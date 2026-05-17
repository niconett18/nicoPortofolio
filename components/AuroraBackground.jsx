'use client';

import dynamic from 'next/dynamic';

const Aurora = dynamic(() => import('./Aurora'), { ssr: false });

export default function AuroraBackground() {
  return (
    <div className="aurora-bg" aria-hidden>
      <Aurora
        colorStops={['#a9abfc', '#3B82F6', '#06B6D4']}
        blend={0.5}
        amplitude={1.0}
        speed={1}
      />
      <div className="aurora-vignette" />
    </div>
  );
}
