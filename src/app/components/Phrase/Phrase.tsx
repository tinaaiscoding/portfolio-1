type Props = {
  phrase: string;
};

export default function Phrase({ phrase }: Props) {
  return (
    <div className='flex items-center gap-5'>
      <p className='text-8xl uppercase'>{phrase}</p>
      <div className='h-[80px] w-[150px] rounded-full bg-gray-300'></div>
    </div>
  );
}
