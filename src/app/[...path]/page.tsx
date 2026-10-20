import { notFound } from 'next/navigation';
import pages from '@/content/imported/pages.json';
import SiteShell from '@/components/layout/site-shell';
import ReferencePage from '@/components/products/reference-page';
export function generateStaticParams() { return pages.filter(page=>!page.path.startsWith('/products/')).map(page=>({path:page.path.slice(1).split('/')})); }
export async function generateMetadata({params}:{params:Promise<{path:string[]}>}) {const {path}=await params;const page=pages.find(page=>page.path==='/'+path.join('/'));return {title:page?`${page.title} | A3i-Accel`:'Page not found | A3i-Accel'};}
export default async function PublicPage({params}:{params:Promise<{path:string[]}>}) {const {path}=await params;const page=pages.find(page=>page.path==='/'+path.join('/'));if(!page)notFound();return <SiteShell><ReferencePage title={page.title} html={page.html}/></SiteShell>;}
