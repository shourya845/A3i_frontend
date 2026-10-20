import Link from 'next/link';
import DemoForm from '@/components/forms/demo-form';
import SiteShell from '@/components/layout/site-shell';

export default function DemoPage() {
  return <SiteShell><section className="a31-demo-page">
    <Link href="/">← Back to A3i</Link>
    <h1>Request a demo</h1>
    <p>Tell us about your company and the work you want to simplify.</p>
    <DemoForm />
  </section></SiteShell>;
}
