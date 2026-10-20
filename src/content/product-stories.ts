// Names and outcomes come from the supplied company graphic.
// Preview rows illustrate that copy; they are not live product screenshots.
export const productStories = [
  {
    name: "NeXtory",
    image: "/images/products/notes-ai.jpg",
    href: "/products/ai-note",
    kind: "notes",
    headline: "From meeting to action.",
    description:
      "Meeting captured. Actions taken. Keep the conversation and the work that follows in focus.",
    previewTitle: "Meeting → action",
    items: ["Meeting captured", "Actions taken"],
    outcome: "Turn the conversation into action.",
  },
  {
    name: "H3ive",
    image: "/images/tier-ants.webp",
    href: null,
    kind: "agents",
    headline: "Coordinate agents. Complete the work.",
    description:
      "Agents coordinated. Tasks completed. Bring the pieces of a job together.",
    previewTitle: "Working together",
    items: ["Agents coordinated", "Tasks completed"],
    outcome: "Connected work, from task to completion.",
  },
  {
    name: "SpeedRec",
    image: "/images/products/hire.jpg",
    href: "/products/ai-hire",
    kind: "hiring",
    headline: "Move towards your next shortlist.",
    description:
      "Candidates enriched. Shortlist ready. Focus your next conversation on the people behind the profiles.",
    previewTitle: "Candidate workflow",
    items: ["Candidates enriched", "Shortlist ready"],
    outcome: "Ready for the next conversation.",
  },
  {
    name: "Invenio",
    image: "/images/products/lead.jpg",
    href: "/contact",
    kind: "leads",
    headline: "Find the leads. Prepare the outreach.",
    description:
      "Relevant leads found. Outreach prepared. Take the next step towards a business conversation.",
    previewTitle: "Lead discovery",
    items: ["Relevant leads found", "Outreach prepared"],
    outcome: "From discovery to outreach.",
  },
  {
    name: "Video AI",
    image: "/reference/assets/video/3i-teaser-poster.jpg",
    href: "/contact",
    kind: "video",
    headline: "Start with a brief. Bring it to video.",
    description:
      "Brief received. Video created. Move your idea from a written starting point to a visual result.",
    previewTitle: "Your brief → video",
    items: ["Brief received", "Video created"],
    outcome: "An idea, brought into view.",
  },
  {
    name: "Send3r",
    image: "/images/products/marketing.jpg",
    href: "https://send3r.a3i-accel.com/",
    kind: "email",
    headline: "Keep your next campaign moving.",
    description:
      "Campaign scheduled. Emails delivered. Carry your message through to delivery.",
    previewTitle: "Campaign workflow",
    items: ["Campaign scheduled", "Emails delivered"],
    outcome: "From scheduled campaign to delivered email.",
  },
] as const;
