import Link from 'next/link';

export default function ArticlePage() {
  return (
    <div>
      Article Page
      <ul>
        <li>
          <Link href='/articles/breaking-news?lang=english'>Breaking News</Link>
        </li>
        <li>
          <Link href='/articles/latest-updates?lang=french'>Latest Updates</Link>
        </li>
      </ul>
    </div>
  );
}
