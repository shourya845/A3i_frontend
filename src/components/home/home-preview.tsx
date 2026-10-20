'use client';

import { useState } from 'react';
import Header from '@/components/layout/header';
import Hero from './hero';
import PlatformIntro from './platform-intro';
import AutomationModel from './automation-model';
import ProductGrid from './product-grid';
import WhyA3i from './why-a3i';
import WorkflowShowcase from './workflow-showcase';
import AcceleratorLibrary from './accelerator-library';
import FinalCta from './final-cta';
import Footer from '@/components/layout/footer';

export default function HomePreview() {
  const [productRequest, setProductRequest] = useState(0);
  return <>
    <Header productRequest={productRequest} />
    <main id="main" tabIndex={-1}>
      <Hero />
      <PlatformIntro />
      <ProductGrid />
      <WhyA3i />
      <WorkflowShowcase />
      <AutomationModel />
      <AcceleratorLibrary />
      <FinalCta onExplore={() => setProductRequest(request => request + 1)} />
    </main>
    <Footer compact />
  </>;
}
