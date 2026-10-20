import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { productStories } from "@/content/product-stories";
import { portfolio } from "@/content/products";
import styles from './footer.module.css';
const columns = [
  {
    title: "Products",
    links: productStories.map((p) => [p.name, `/#product-${p.kind}`]),
  },
  {
    title: "Industries",
    links: [
      ["Banks", "/industries/banks"],
      ["Hedge Funds", "/industries/hedge-funds"],
      ["Financial Advisors", "/industries/financial-advisors"],
      ["Restaurants", "/industries/restaurants"],
      ["Clinics", "/industries/clinics"],
      ["Hospitality", "/industries/hospitality"],
    ],
  },
  {
    title: "Explore",
    links: [
      ["Services", "/services"],
      ["Resources", "/resources"],
      ["Apps, Ants & Agents", "/#automation-title"],
      ["Workflow examples", "/#workflows"],
      ["Responsible AI", "/responsible-ai"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About A3i", "/company/about"],
      ["Contact", "/contact"],
      ["Collaborations", "/company/collaborations"],
      ["Careers", "/company/careers"],
      ["Competitions", "/company/competitions"],
    ],
  },
];
const compactColumns = [
  { title: 'Products', links: portfolio.map(product => [product.name, `/products/${product.slug}`]) },
  { title: 'Company', links: [['About A3i', '/company/about'], ['Contact', '/contact'], ['Careers', '/company/careers']] },
  { title: 'Explore', links: [['Industry', '/#why-a3i'], ['Services', '/services'], ['Responsible AI', '/responsible-ai']] },
];

export default function Footer({ compact = false }: { compact?: boolean }) {
  return (
    <footer className={compact ? `site-footer ${styles.compact}` : 'site-footer'}>
      <div className="content-container">
        <div className="footer-top">
          <div className="footer-identity">
            <Link href="/" className="brand">
              <span className="brand-symbol">
                <Image src="/logo.png" alt="" width={42} height={42} />
              </span>
              <span>A3i-Accel</span>
            </Link>
            <p>{compact ? 'Different solutions. Powered by the same Apps, Ants, and Agents.' : 'AI-powered accelerators for every human workflow.'}</p>
            <a
              href="https://www.linkedin.com/company/a3i-accelerators/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="A3i Accel on LinkedIn"
            >
              <span>LinkedIn</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="footer-columns">
            {(compact ? compactColumns : columns).map((column) => (
              <div key={column.title}>
                <h2>{column.title}</h2>
                {column.links.map(([label, path]) => (
                  <Link href={path} key={label}>
                    {label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} A3i Accel. All rights reserved.
          </span>
          <div>
            <a href="https://a3i-accel.com/legal/privacy">Privacy Policy</a>
            <a href="https://a3i-accel.com/legal/terms">Terms of Service</a>
            <a href="https://a3i-accel.com/legal/refund">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
