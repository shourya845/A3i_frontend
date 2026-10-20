import type { Metadata } from 'next';
import './globals.css';
import './reference.css';
import 'tippy.js/dist/tippy.css';
import './motion.css';
import './design-system.css';
import './product-stories.css';
import MotionEnhancements from '@/components/layout/motion-enhancements';
import MarketingIntegrations from '@/components/layout/marketing-integrations';
import ChatWidget from '@/components/chat/chat-widget';
export const metadata: Metadata = { title: 'A3i-Accel | AI for everyday business processes', description: 'Focused Apps, repeatable workflow Ants, and multi-step Agents for your everyday business processes.', robots: { index: false, follow: false } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><head><link rel="stylesheet" href="/vendor/fontawesome/css/all.min.css" /></head><body>{children}<ChatWidget /><MotionEnhancements /><MarketingIntegrations /></body></html>; }
