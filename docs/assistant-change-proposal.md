# Assistant change proposal for approval

Status: not approved for implementation. The user explicitly chose to keep the current backend unchanged on 19 October 2026. Retain this proposal for reference only. No backend behavior or chat UI has been changed. Product names remain as currently approved. Figma, GitHub and Netlify work is deferred at the user's request.

## Current behavior

The frontend sends message, session ID and page path through `/api/chat`. The Python service streams session/delta/done/error records. Its `agent.py` already handles greetings, some off-topic requests, demo requests, follow-up context and uncertain answers. For factual questions it calls `search_a3i_web` from `tools.py`, which retrieves live content restricted to the official A3i domain. Demo capture is a separate confirmed form and `/leads` endpoint.

The assignment instead requests answers grounded only in supplied product content and explicit learn/pricing/demo intent routing. Website-only retrieval is related, but is not the same boundary as a frozen, approved supplied-content set.

## Proposed smallest change

Keep Next.js, chat appearance, streaming event names, session handling, model/provider adapters, product names, demo form and lead endpoint unchanged. Add a small approved local content file and retrieval helper in the Python backend. Use plain text matching for this small corpus, without adding a vector database, framework or dependency.

| File | Proposed change | Visitor effect |
| --- | --- | --- |
| `Chatbot/data/approved-content.json` (new) | Store reviewed source IDs, approved excerpts and existing product URLs. Existing `knowledge.json` is reference material, not automatically approved. | Stable, reviewable factual source |
| `Chatbot/approved_content.py` (new) | Read/validate the supplied corpus and retrieve relevant excerpts with source IDs | Missing facts produce an honest fallback |
| `Chatbot/conversation.py` (existing) | Add a small explicit learn/pricing/demo/out-of-scope classification, reusing current context helpers | Demo intent reaches the existing demo action; pricing never invents a number |
| `Chatbot/agent.py` (existing) | Replace the live search path for assignment Q&A with approved excerpts; retain checked generation and streaming | Answers use only the approved supplied content |
| `Chatbot/tests/test_assignment.py` (new) | Cover intent, unknown pricing, off-topic refusal, source boundary, follow-ups and no lead creation from Q&A | Regression evidence |

`tools.py` need not be deleted. Retain it as an unused reference for this path rather than removing useful code. No automatic lead capture, calendar booking, new UI, or provider change is proposed.

## Content approval needed

Review the actual text and source links before marking them approved. Required coverage: company purpose, Apps/Ants/Agents definitions, current six product names and one-liners, industries, contact/demo links, and any explicitly approved pricing. Unsupported capabilities, prices, guarantees and integration claims must remain absent. The assignment product-name mismatch remains documented rather than silently corrected.

## Acceptance before release

All existing 44 backend tests must be reviewed against the changed source boundary; update only assumptions intentionally superseded by approval. Add a real ten-question answer review plus refusal cases. Verify NDJSON compatibility, session expiry, retries, error redaction and the existing confirmed lead flow. A supplied-content design limits retrieval scope but does not alone prove model factuality.

## Approval requested

Approve this backend scope and the proposed content file before implementation. Until then the current live-search assistant remains untouched. Hosting and durable production storage remain separate deferred decisions.
