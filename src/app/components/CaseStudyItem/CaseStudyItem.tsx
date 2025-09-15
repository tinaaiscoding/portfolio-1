'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

type Props = {
  title1: string;
  title2: string;
  isSelected: boolean;
  setIsSelected: Dispatch<SetStateAction<boolean>>;
};

const animation = {
  initial: { width: 0 },
  open: {
    width: 'auto',
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
  closed: { width: 0 },
};

const scaleAnim = {
  initial: { scale: 1 },
  open: {
    scale: 4,
  },
  closed: { scale: 1 },
};

export default function CaseStudyItem({
  title1,
  title2,
  isSelected,
  setIsSelected,
}: Props) {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleOnClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={handleOnClick}
      className='flex items-center gap-5 overflow-hidden text-8xl uppercase'
    >
      <p>{title1}</p>
      <motion.div
        variants={animation}
        animate={isActive ? 'open' : 'closed'}
        className='flex justify-center overflow-hidden'
      >
        <motion.div layoutId='imageScale'
        >
          <div className='h-[80px] w-[150px] rounded-full bg-gray-300'></div>
        </motion.div>
      </motion.div>
      <p>{title2}</p>
    </div>
  );
}
