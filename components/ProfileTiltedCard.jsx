'use client';

import TiltedCard from './TiltedCard';
import { useBreakpoint, getTiltedCardSizes } from '../lib/useBreakpoint';

export default function ProfileTiltedCard() {
  const breakpoint = useBreakpoint();
  const sizes = getTiltedCardSizes(breakpoint);

  return (
    <div className="profile-card-wrap">
      <TiltedCard
        imageSrc="/profile-card.jpg"
        altText="Nicholas Edmund"
        captionText="Nicholas Edmund · Fullstack Developer"
        containerHeight={sizes.containerHeight}
        containerWidth={sizes.containerWidth}
        imageHeight={sizes.imageHeight}
        imageWidth={sizes.imageWidth}
        rotateAmplitude={breakpoint === 'mobile' ? 8 : 12}
        scaleOnHover={breakpoint === 'mobile' ? 1.03 : 1.06}
        showMobileWarning={false}
        showTooltip={breakpoint !== 'mobile'}
        displayOverlayContent={false}
      />
    </div>
  );
}
