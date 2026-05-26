import Link from 'next/link';

export const metadata = {
  title: 'Products',
};

export default function Products() {
  return (
    <div>
      <Link href='/' style={{ padding: '0.5rem' }}>
        Home
      </Link>
      <h5>Products Page</h5>
      <ul>
        <li>
          <Link href='/products/1'>Product 1</Link>
        </li>
        <li>
          <Link href='/products/2'>Product 2</Link>
        </li>
        <li>
          <Link href='/products/3'>Product 3</Link>
        </li>
      </ul>
    </div>
  );
}
