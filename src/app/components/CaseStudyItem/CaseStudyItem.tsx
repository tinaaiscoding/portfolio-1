type Props = {
  title1: string;
  title2: string;
};

export default function CaseStudyItem({ title1, title2 }: Props) {
  return (
    <div className="flex items-center gap-5 text-8xl uppercase">
      <p>{title1}</p>
       <div className='h-[80px] w-[150px] rounded-full bg-gray-300'></div>
      <p>{title2}</p>
    </div>
  );
}
