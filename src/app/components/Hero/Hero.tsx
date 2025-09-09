import TextSlide from '../TextSlide/TextSlide';
import './Hero.css';

export default function Hero() {
  return (
    <main className='flex items-end h-screen'>
      <div>
        <TextSlide phrase='Creative websites' />
        <TextSlide phrase='Creative websites' />
        <TextSlide phrase='Creative websites' />
      </div>
    </main>
  );
}
