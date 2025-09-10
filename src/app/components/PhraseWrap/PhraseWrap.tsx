import { MotionValue, motion, useTransform } from 'framer-motion';

import Phrase from '../Phrase/Phrase';

type Props = {
  phrase: string;
  left: string;
  progress: MotionValue<number>;
  direction: string;
};

export default function PhraseWrap({
  phrase,
  left,
  progress,
  direction,
}: Props) {
  const translateDir = direction === 'left' ? -1 : 1;
  const translateX = useTransform(
    progress,
    [0, 1],
    [250 * translateDir, -250 * translateDir],
  );
  return (
    <motion.div
      style={{ left, x: translateX }}
      className='relative flex gap-5 py-4 whitespace-nowrap'
    >
      <Phrase phrase={phrase} />
      <Phrase phrase={phrase} />
      <Phrase phrase={phrase} />
    </motion.div>
  );
}
