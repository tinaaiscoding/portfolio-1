'use client';

import { useLenis } from 'lenis/react';
import { useEffect, useState } from 'react';

import CaseStudyItem from '../CaseStudyItem/CaseStudyItem';
import CaseStudyModal from '../CaseStudyModal/CaseStudyModal';

const projects = [
  {
    title1: 'Title 1',
    title2: 'Title 1',
    src: 'title1.jpeg',
  },

  {
    title1: 'Title 2',
    title2: 'Title 2',
    src: 'title1.jpeg',
  },

  {
    title1: 'Title 3',
    title2: 'Title 3',
    src: 'title1.jpeg',
  },

  {
    title1: 'Title 4',
    title2: 'Title 4',
    src: 'title1.png',
  },

  {
    title1: 'Title 5',
    title2: 'Title 5',
    src: 'title1.jpeg',
  },
];

export default function CaseStudyList() {
  const lenis = useLenis();
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    if (isSelected) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [isSelected]);

  return (
    <section className='flex h-screen flex-col items-center justify-center gap-5'>
      {projects.map((p, i) => {
        return (
          <CaseStudyItem
            key={i}
            title1={p.title1}
            title2={p.title2}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
          />
        );
      })}

      <div>
        <CaseStudyModal isSelected={isSelected} setIsSelected={setIsSelected} />
      </div>
    </section>
  );
}
