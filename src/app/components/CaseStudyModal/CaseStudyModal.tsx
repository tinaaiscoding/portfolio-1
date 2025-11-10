'use client';

import { motion } from 'framer-motion';

import { useCaseStudyContext } from '@/app/utils/contexts';

import './CaseStudyModal.css';

const modalAnimation = {
  initial: { opacity: 0 },
  open: {
    opacity: 1,
    zIndex: 10,
  },
  closed: { opacity: 0 },
};

export default function CaseStudyModal() {
  const { caseStudy, setCaseStudy } = useCaseStudyContext();

  return (
    caseStudy.active && (
      <motion.div
        className='casestudy_modal_wrap'
        variants={modalAnimation}
        animate={caseStudy.active ? 'open' : 'closed'}
      >
        <motion.div className='image_wrap' layoutId='imageScale'>
          <div className='h-full w-full rounded-full bg-gray-300'></div>
        </motion.div>

        <div className='navigation_wrap'>navigation</div>
        <button
          onClick={() => {
            setCaseStudy((prev) => ({ ...prev, active: false }));
          }}
        >
          close
        </button>
      </motion.div>
    )
  );
}
