import type { ChatEvent } from '@/types/chat';

export async function streamReply(
  message: string, sessionId: string | null,
  onEvent: (event: ChatEvent) => void, signal: AbortSignal, pagePath = '',
) {
  const response = await fetch('/api/chat', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, session_id: sessionId, page_path: pagePath }), signal,
  });
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    if (response.status === 404) {
      onEvent({ type: 'session', session_id: '' });
      throw new Error('Your conversation expired. Retry to start a new one.');
    }
    throw new Error(typeof error.detail === 'string' ? error.detail : 'Could not send your message. Please retry.');
  }
  if (!response.body) throw new Error('The answer could not be loaded.');
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '', completed = false;
  function parse(line: string) {
    if (!line.trim()) return;
    const event = JSON.parse(line) as ChatEvent;
    if (event.type === 'error') throw new Error(event.message);
    if (event.type === 'done') completed = true;
    onEvent(event);
  }
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';
      lines.forEach(parse);
    }
    buffer += decoder.decode();
    if (buffer.trim()) parse(buffer);
    if (!completed) throw new Error('The answer was interrupted. Please retry.');
  } finally {
    await reader.cancel().catch(() => {});
    reader.releaseLock();
  }
}
