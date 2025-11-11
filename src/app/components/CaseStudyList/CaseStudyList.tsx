'use client';

import { projects } from '../../data/data';
import { CaseStudyProvider } from '../../utils/contexts/caseStudy';
import CaseStudyItem from '../CaseStudyItem/CaseStudyItem';

export default function CaseStudyList() {
  return (
    <CaseStudyProvider>
      <section className='flex h-screen flex-col items-center justify-center gap-5'>
        {projects.map((p, i) => {
          return (
            <CaseStudyItem
              key={i}
              index={i}
              title1={p.title1}
              title2={p.title2}
            />
          );
        })}

        {/* 
        <div>
          <CaseStudyModal />
        </div> */}
      </section>
    </CaseStudyProvider>
  );
}
