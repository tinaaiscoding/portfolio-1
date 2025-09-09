'use client';

import 'lenis/dist/lenis.css';
import { ReactLenis, useLenis } from 'lenis/react';
import { FC, useEffect } from 'react';

type LenisScrollProviderProps = {
  children: React.ReactNode;
};

const LenisScrollProvider: FC<LenisScrollProviderProps> = ({ children }) => {
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    }
  }, [lenis]);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        wheelMultiplier: 0.8,
        smoothWheel: true,
        gestureOrientation: 'vertical',
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default LenisScrollProvider;
