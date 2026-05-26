import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>Welcome to Next.js!</div>
      <div style={{ marginTop: '1rem' }}>
        <Link href='/docs' style={{ padding: '0.5rem' }}>
          Docs
        </Link>
        <Link href='/products' style={{ padding: '0.5rem' }}>
          Products
        </Link>
        <Link href='/articles' style={{ padding: '0.5rem' }}>
          Articles
        </Link>
      </div>
    </>
  );
}
