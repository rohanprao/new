import { lazy, Suspense } from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import SolutionOutcomesTabs from '../components/home/SolutionOutcomesTabs';
import PlatformPillarsGrid from '../components/home/PlatformPillarsGrid';
import HowItWorksPinned from '../components/home/HowItWorksPinned';
import ArchitectureScroll from '../sections/ArchitectureScroll';
import BlueprintExplorer from '../sections/BlueprintExplorer';
import IndustriesSection from '../sections/IndustriesSection';
import InteractiveWorkbench from '../sections/InteractiveWorkbench';
import InteractiveCalculator from '../sections/InteractiveCalculator';
import CaseStudyEditorial from '../sections/CaseStudyEditorial';

// Lazy load heavy live telemetry grids
const RealTimeInsights = lazy(() => import('../sections/RealTimeInsights'));
const CustomerReviews = lazy(() => import('../sections/CustomerReviews'));

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full overflow-hidden bg-[#0B1B3A]">
      {/* 1. Executive Editorial Hero with 3D Industrial Machine */}
      <HeroSection />

      {/* 2. Enterprise Trust Bar / Partner Marquee */}
      <TrustBar />

      {/* 3. Outcomes by Solution (Tabbed Shop-Floor Returns) */}
      <SolutionOutcomesTabs />

      {/* 4. The FactoryOps Platform (Six Core Industrial Pillars) */}
      <PlatformPillarsGrid />

      {/* 5. How It Works (4-Stage Pinned Engineering Story) */}
      <HowItWorksPinned />

      {/* 6. Signature Scroll-Linked Industrial Architecture (Physical to Cloud) */}
      <ArchitectureScroll />

      {/* 7. Interactive CAD Blueprint & Machine Explorer */}
      <BlueprintExplorer />

      {/* 8. Specialized Manufacturing Industry Sectors */}
      <IndustriesSection />

      {/* 9. Frontline Operations Interactive Studio (Workflows & Triage) */}
      <InteractiveWorkbench />

      {/* 10. Verified Plant Performance Case Studies */}
      <CaseStudyEditorial />

      {/* 11. Interactive Plant Energy & ROI Calculator */}
      <InteractiveCalculator />

      {/* 12. Live Multi-Machine Telemetry Grid */}
      <Suspense fallback={
        <div className="w-full py-32 flex items-center justify-center">
          <div className="skeleton w-full max-w-7xl h-96 rounded-3xl" />
        </div>
      }>
        <RealTimeInsights />
      </Suspense>

      {/* 13. Verified Customer Reviews & Impact Metrics */}
      <Suspense fallback={
        <div className="w-full py-32 flex items-center justify-center">
          <div className="skeleton w-full max-w-4xl h-96 rounded-3xl" />
        </div>
      }>
        <CustomerReviews />
      </Suspense>
    </main>
  );
}
