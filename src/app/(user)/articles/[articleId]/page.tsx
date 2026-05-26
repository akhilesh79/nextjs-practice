import Link from 'next/link';

export default async function ArticleDetails({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: string }>;
}) {
  const { articleId } = await params;
  const { lang } = await searchParams;
  return (
    <div>
      Article Details
      <p>Article ID: {articleId}</p>
      <p>Language: {lang}</p>
      {/* if same article want to see in other languages  */}
      <p>View in other languages:</p>
      <ul>
        <li>
          <Link href={`/articles/${articleId}?lang=english`}>English</Link>
        </li>
        <li>
          <Link href={`/articles/${articleId}?lang=french`}>French</Link>
        </li>
      </ul>
    </div>
  );
}
