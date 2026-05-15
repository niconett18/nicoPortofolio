'use client';

import dynamic from 'next/dynamic';

const Aurora = dynamic(() => import('./Aurora'), { ssr: false });

export default function AuroraBackground() {
  return (
    <div className="aurora-bg" aria-hidden>
      <Aurora
        colorStops={['#030712', '#1d4ed8', '#60a5fa']}
        blend={0.72}
        amplitude={1.35}
        speed={0.45}
      />
      <div className="aurora-vignette" />
      <div className="aurora-noise" />
    </div>
  );
}
