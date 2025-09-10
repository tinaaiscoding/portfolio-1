'use client';

import { useScroll } from 'framer-motion';
import { useRef } from 'react';

import PhraseWrap from '../PhraseWrap/PhraseWrap';
import './Hero.css';

const phrases = [
  { phrase: 'Creative websites', left: '-45%', direction: 'left' },
  { phrase: 'Creative websites', left: '-20%', direction: 'right' },
  { phrase: 'Creative websites', left: '-35%', direction: 'left' },
];

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
