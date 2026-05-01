import { lazy, Suspense } from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import FactoryOps from '../sections/FactoryOps';
import TrustedBy from '../sections/TrustedBy';

// Lazy load heavy sections
const RealTimeInsights = lazy(() => import('../sections/RealTimeInsights'));
const CustomerReviews = lazy(() => import('../sections/CustomerReviews'));

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <Hero />
      <About />
      <FactoryOps />
      <Suspense fallback={
        <div className="w-full py-32 flex items-center justify-center">
          <div className="skeleton w-full max-w-7xl h-96 rounded-3xl" />
        </div>
      }>
        <RealTimeInsights />
      </Suspense>
      <Suspense fallback={
        <div className="w-full py-32 flex items-center justify-center">
          <div className="skeleton w-full max-w-4xl h-96 rounded-3xl" />
        </div>
      }>
        <CustomerReviews />
      </Suspense>
      <TrustedBy />
    </main>
  );
}
