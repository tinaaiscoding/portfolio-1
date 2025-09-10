import Phrase from '../Phrase/Phrase';

type Props = {
  phrase: string;
};

export default function PhraseWrap({ phrase }: Props) {
  return (
    <div className='flex gap-5 py-4 whitespace-nowrap'>
      <Phrase phrase={phrase} />
      <Phrase phrase={phrase} />
      <Phrase phrase={phrase} />
    </div>
  );
}
