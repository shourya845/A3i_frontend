import Link from 'next/link';
import SiteShell from '@/components/layout/site-shell';
export const metadata={title:'Login preview | A3i-Accel'};
export default function LoginPage(){return <SiteShell><section className="content-section"><div className="content-container preview-message"><p className="section-label">Account access</p><h1>Login is not connected yet.</h1><p>This frontend does not collect account passwords. Authentication and the original account screens need their supporting files and backend configuration.</p><Link className="dark-action" href="/">Explore A3i</Link></div></section></SiteShell>;}
