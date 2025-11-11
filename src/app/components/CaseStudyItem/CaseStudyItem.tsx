'use client';

import { motion } from 'framer-motion';

import { useHoverSlide } from '@/app/utils/hooks/useHoverSlide';

import { useCaseStudyContext } from '../../utils/contexts/caseStudy';

type Props = {
  index: number;
  title1: string;
  title2: string;
};

export default function CaseStudyItem({ index, title1, title2 }: Props) {
  const { slide, isHovered, onMouseEnter, onMouseLeave } = useHoverSlide();
  const { setCaseStudy } = useCaseStudyContext();

  const handleOnClick = () => {
    setCaseStudy({ active: true, index });
  };

  return (
    <a
      href='#'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleOnClick}
      className='flex items-center gap-5 overflow-hidden text-8xl uppercase'
    >
      <p>{title1}</p>
      <motion.div
        variants={slide}
        animate={isHovered ? 'open' : 'closed'}
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
