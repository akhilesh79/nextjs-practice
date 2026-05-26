import Link from 'next/link';

export const metadata = {
  title: 'Products',
};

const random = (count: number) => {
  return Math.floor(Math.random() * count);
};

export default function Products() {
  const num = random(2);
  if (num == 1) {
    throw new Error('Failed to load products');
  }
  return (
    <>
      <div className='p-4'>Products Page</div>
      <Link href='/' className='bg-gray-300 text-black p-2 m-2 rounded'>
        Home
      </Link>
      <ul className='list-disc list-inside mt-4'>
        <li className='mb-2 hover:text-blue-500'>
          <Link href='/products/1'>Product 1</Link>
        </li>
        <li className='mb-2 hover:text-blue-500'>
          <Link href='/products/2'>Product 2</Link>
        </li>
        <li className='mb-2 hover:text-blue-500'>
          <Link href='/products/3'>Product 3</Link>
        </li>
      </ul>
    </>
  );
}
