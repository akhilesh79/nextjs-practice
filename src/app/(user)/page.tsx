import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>Welcome to Next.js!</div>
      <div className='mt-4'>
        <Link href='/docs' className='bg-blue-500 text-white p-2 m-2 rounded'>
          Docs
        </Link>
        <Link href='/products' className='bg-green-500 text-white p-2 m-2 rounded'>
          Products
        </Link>
        <Link href='/articles' className='bg-purple-500 text-white p-2 m-2 rounded'>
          Articles
        </Link>
      </div>
    </>
  );
}
