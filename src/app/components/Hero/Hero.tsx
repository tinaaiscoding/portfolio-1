'use client';

import { useScroll } from 'framer-motion';
import { useRef } from 'react';

import { phrases } from '@/app/data/data';
import { PhraseContext } from '@/app/utils/contexts';

import PhraseWrap from '../PhraseWrap/PhraseWrap';
import './Hero.css';

export default function Hero() {
  const heroContainer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroContainer,
    offset: ['start end', 'end start'],
  });

  return (
    <main
      ref={heroContainer}
      className='flex h-screen items-end overflow-hidden'
    >
      <div>
        {phrases.map((p, i) => {
          return (
            <PhraseWrap
              key={i}
              phrase={p.phrase}
              left={p.left}
              progress={scrollYProgress}
              direction={p.direction}
            />
          );
        })}
      </div>
    </main>
  );
}
