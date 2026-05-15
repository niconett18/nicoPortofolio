'use client';

import { useEffect, useState } from 'react';

const QUERIES = {
  mobile: '(max-width: 767px)',
  tablet: '(min-width: 768px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)'
};

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState('desktop');

  useEffect(() => {
    const mobileMq = window.matchMedia(QUERIES.mobile);
    const tabletMq = window.matchMedia(QUERIES.tablet);

    const update = () => {
      if (mobileMq.matches) setBreakpoint('mobile');
      else if (tabletMq.matches) setBreakpoint('tablet');
      else setBreakpoint('desktop');
    };

    update();
    mobileMq.addEventListener('change', update);
    tabletMq.addEventListener('change', update);
    return () => {
      mobileMq.removeEventListener('change', update);
      tabletMq.removeEventListener('change', update);
    };
  }, []);

  return breakpoint;
}

export function getTiltedCardSizes(breakpoint) {
  switch (breakpoint) {
    case 'mobile':
      return {
        containerHeight: '340px',
        containerWidth: 'min(100%, 260px)',
        imageHeight: '300px',
        imageWidth: '240px'
      };
    case 'tablet':
      return {
        containerHeight: '380px',
        containerWidth: 'min(100%, 300px)',
        imageHeight: '340px',
        imageWidth: '280px'
      };
    default:
      return {
        containerHeight: '420px',
        containerWidth: 'min(100%, 320px)',
        imageHeight: '380px',
        imageWidth: '300px'
      };
  }
}
