'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import { useCaseStudyContext } from '@/app/utils/contexts';

type Props = {
  index: number;
  title1: string;
  title2: string;
};

const slideAnimation = {
  initial: { width: 0 },
  open: {
    width: 'auto',
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
  closed: { width: 0 },
};

const scaleAnimation = {
  initial: { scale: 1 },
  open: {
    scale: 4,
  },
  closed: { scale: 1 },
};

export default function CaseStudyItem({ index, title1, title2 }: Props) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { setCaseStudy } = useCaseStudyContext();

  const handleOnClick = () => {
    setCaseStudy({ active: true, index });
  };

  return (
    <a
      href='#'
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={handleOnClick}
      className='flex items-center gap-5 overflow-hidden text-8xl uppercase'
    >
      <p>{title1}</p>
      <motion.div
        variants={slideAnimation}
        animate={isActive ? 'open' : 'closed'}
        className='flex justify-center overflow-hidden'
      >
        <motion.div layoutId='imageScale'>
          <div className='h-[80px] w-[150px] rounded-full bg-gray-300'></div>
        </motion.div>
      </motion.div>
      <p>{title2}</p>
    </a>
  );
}
