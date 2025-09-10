import CaseStudyItem from '../CaseStudyItem/CaseStudyItem';

const projects = [
  {
    title1: 'Title 1',
    title2: 'Title 2',
    src: 'title1.jpeg',
  },

  {
    title1: 'Title 1',
    title2: 'Title 2',
    src: 'title1.jpeg',
  },

  {
    title1: 'Title 1',
    title2: 'Title 2',
    src: 'title1.jpeg',
  },

  {
    title1: 'Title 1',
    title2: 'Title 2',
    src: 'title1.png',
  },

  {
    title1: 'Title 1',
    title2: 'Title 2',
    src: 'title1.jpeg',
  },
];

export default function CaseStudies() {
  return (
    <section className='flex h-screen flex-col items-center justify-center gap-5'>
      {projects.map((p, i) => {
        return <CaseStudyItem key={i} title1={p.title1} title2={p.title2} />;
      })}
    </section>
  );
}
