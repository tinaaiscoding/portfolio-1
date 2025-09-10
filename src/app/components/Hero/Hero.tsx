import PhraseWrap from '../PhraseWrap/PhraseWrap';
import './Hero.css';

export default function Hero() {
  return (
    <main className='flex items-end h-screen'>
      <div>
        <PhraseWrap phrase='Creative websites' />
        <PhraseWrap phrase='Creative websites' />
        <PhraseWrap phrase='Creative websites' />
      </div>
    </main>
  );
}
