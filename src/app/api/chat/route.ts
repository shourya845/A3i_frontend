import { forwardToAgent } from '@/lib/server/agent';
export const runtime = 'nodejs';
export async function POST(request: Request) {
  return forwardToAgent(request, '/chat/stream');
}
