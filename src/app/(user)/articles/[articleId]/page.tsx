import Link from 'next/link';

export default async function ArticleDetails({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: string }>;
}) {
  const { articleId } = await params; // in client component we can use "use" hook to get the params and searchParams but in server component we have to get it from the props
  const { lang } = await searchParams;
  return (
    <div>
      Article Details
      <p>Article ID: {articleId}</p>
      <p>Language: {lang}</p>
      {/* if same article want to see in other languages  */}
      <p>View in other languages:</p>
      <ul className='list-disc list-inside'>
        <li className='mb-2 hover:text-blue-500 hover:underline'>
          <Link href={`/articles/${articleId}?lang=english`}>English</Link>
        </li>
        <li className='mb-2 hover:text-blue-500 hover:underline'>
          <Link href={`/articles/${articleId}?lang=french`}>French</Link>
        </li>
      </ul>
    </div>
  );
}
