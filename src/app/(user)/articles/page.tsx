import Link from 'next/link';

export default function ArticlePage() {
  return (
    <div>
      Article Page
      <ul className='list-disc list-inside mt-4'>
        <li className='mb-2 hover:text-blue-500'>
          <Link href='/articles/breaking-news?lang=english'>Breaking News</Link>
        </li>
        <li className='mb-2 hover:text-blue-500'>
          <Link href='/articles/latest-updates?lang=french'>Latest Updates</Link>
        </li>
      </ul>
    </div>
  );
}
