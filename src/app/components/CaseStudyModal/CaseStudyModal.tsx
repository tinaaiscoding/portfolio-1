'use client';

import { motion } from 'framer-motion';

import './CaseStudyModal.css';

const modalAnimation = {
  initial: { opacity: 0 },
  open: {
    opacity: 1,
    zIndex: 10,
  },
  closed: { opacity: 0 },
};

export default function CaseStudyModal({ isSelected, setIsSelected }) {
  return (
    isSelected && (
      <motion.div
        className='casestudy_modal_wrap'
        variants={modalAnimation}
        animate={isSelected ? 'open' : 'closed'}
      >
        <motion.div className='image_wrap' layoutId='imageScale'>
          <div className='h-full w-full rounded-full bg-gray-300'></div>
        </motion.div>

        <div className='navigation_wrap'>navigation</div>
        <button
          onClick={() => {
            setIsSelected(false);
          }}
        >
          close
        </button>
      </motion.div>
    )
  );
}
