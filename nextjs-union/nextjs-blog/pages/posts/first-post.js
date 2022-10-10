import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
        <a href="/">Back to home</a>
      </h2>
    </>
  );
}