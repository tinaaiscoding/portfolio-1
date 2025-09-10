export default function Footer() {
  return (
    <footer className='flex h-screen flex-col items-center justify-center gap-5 text-8xl uppercase'>
      <p>Creative Agency</p>
      <p>Sydney, AU</p>
      <p>(03) 9300 1234</p>
      <div className="flex gap-5">
        <a href=''>→ Email</a>
        <a href=''>→ LinkedIn</a>
      </div>
    </footer>
  );
}
