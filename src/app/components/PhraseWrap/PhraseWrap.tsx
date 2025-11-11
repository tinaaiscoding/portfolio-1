import { MotionValue, motion, useTransform } from 'framer-motion';

import { PhraseProvider } from '../../utils/contexts/phrase';
import Phrase from '../Phrase/Phrase';

type Props = {
  phrase: string;
  leftPercentage: string;
  progress: MotionValue<number>;
  direction: string;
};

export default function PhraseWrap({
  phrase,
  leftPercentage,
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
    <PhraseProvider context={{ phrase }}>
      <motion.div
        style={{ left: leftPercentage, x: translateX }}
        className='relative flex gap-5 py-4 whitespace-nowrap'
      >
        <Phrase />
        <Phrase />
        <Phrase />
      </motion.div>
    </PhraseProvider>
  );
}
