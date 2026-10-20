import { notFound } from 'next/navigation';
import pages from '@/content/imported/pages.json';
import { portfolio } from '@/content/products';
import SiteShell from '@/components/layout/site-shell';
import ReferencePage from '@/components/products/reference-page';
export function generateStaticParams() {return portfolio.map(product=>({slug:product.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}) {const {slug}=await params;const product=portfolio.find(item=>item.slug===slug);return {title:product?`${product.name} | A3i-Accel`:'Product not found | A3i-Accel',description:product?.description};}
export default async function ProductPage({params}:{params:Promise<{slug:string}>}) {const {slug}=await params;const page=pages.find(item=>item.path===`/products/${slug}`);if(!page)notFound();return <SiteShell><ReferencePage title={page.title} html={page.html}/></SiteShell>;}
