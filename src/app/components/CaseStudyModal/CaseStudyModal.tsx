'use client'

import { motion } from 'framer-motion';

import './CaseStudyModal.css';

const modalAnimation = {
  initial: { opacity: 0 },
  open: {
    opacity: 1,
    zIndex: 10
  },
  closed: { opacity: 0 },
};

export default function CaseStudyModal({ isSelected, setIsSelected }) {
  return (
    <motion.div
      className='casestudy_modal_wrap'
      variants={modalAnimation}
      animate={isSelected ? 'open' : 'closed'}
    >
      <div className='image_wrap'>
        <div className='h-full w-full rounded-full bg-gray-300'></div>
      </div>

      <div className='navigation_wrap'>navigation</div>
      <button
        onClick={() => {
          setIsSelected(false);
        }}
      >
        close
      </button>
    </motion.div>
  );
}
