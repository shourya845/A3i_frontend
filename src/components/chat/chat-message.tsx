import type { ChatMessage as Message } from "@/types/chat";

function officialLink(value: string) {
  try {
    const url = new URL(value);
    return (
      url.protocol === "https:" &&
      ["a3i-accel.com", "www.a3i-accel.com"].includes(url.hostname) &&
      !url.username &&
      !url.password &&
      (!url.port || url.port === "443")
    );
  } catch {
    return false;
  }
}

// Render the small formatting subset the assistant uses. React escapes all text;
// raw HTML and arbitrary link destinations are never rendered.
function inline(text: string) {
  return text
    .split(/(\[[^\]\n]+\]\([^\s)]*\)|\*\*[^*\n]+\*\*|https:\/\/[^\s<>()]+)/g)
    .map((part, index) => {
      const link = part.match(/^\[([^\]]+)\]\(([^)]*)\)$/);
      if (link)
        return officialLink(link[2]) ? (
          <a
            key={index}
            href={link[2]}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link[1]}
          </a>
        ) : (
          link[1]
        );
      if (part.startsWith("**") && part.endsWith("**"))
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      const url = part.replace(/[.,;!?]+$/, "");
      if (officialLink(url))
        return (
          <a key={index} href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
        );
      return part;
    });
}

function answerBlocks(content: string) {
  const blocks: { list: boolean; lines: string[] }[] = [];
  for (const line of content.split("\n")) {
    if (!line.trim()) continue;
    const bullet = line.match(/^\s*(?:[-*•]|\d+\.)\s+(.+)$/);
    const last = blocks[blocks.length - 1];
    if (bullet && last?.list) last.lines.push(bullet[1]);
    else
      blocks.push({
        list: Boolean(bullet),
        lines: [bullet ? bullet[1] : line],
      });
  }
  return blocks.map((block, index) =>
    block.list ? (
      <ul key={index}>
        {block.lines.map((line, item) => (
          <li key={item}>{inline(line)}</li>
        ))}
      </ul>
    ) : (
      <p key={index}>{inline(block.lines[0])}</p>
    ),
  );
}

export default function ChatMessage({ message }: { message: Message }) {
  return (
    <div className={`a31-message a31-message-${message.role}`}>
      <span className="a31-speaker">
        {message.role === "user" ? "You" : "A3i Assistant"}
      </span>
      {message.role === "user" ? (
        <p>{message.content}</p>
      ) : (
        answerBlocks(message.content)
      )}
    </div>
  );
}
