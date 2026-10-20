import Header from './header';
import Footer from './footer';
export default function SiteShell({ children }: { children: React.ReactNode }) { return <><a className="skip-link" href="#main">Skip to main content</a><Header /><main id="main" tabIndex={-1}>{children}</main><Footer /></>; }
