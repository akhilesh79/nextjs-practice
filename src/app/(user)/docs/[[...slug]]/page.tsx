import { notFound } from 'next/navigation';
export default async function Docs({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;

  // consider there is features and every feature has its own page and under feature there are conscepts also mutltiple concepts
  // if invalid slug is provided, show not found page
  if (slug?.length > 2) {
    notFound();
  }

  // concept page
  if (slug?.length === 2) {
    return (
      <div>
        <p>
          Viewing docs for Feature: {slug[0]} and Concept: {slug[1]}
        </p>
      </div>
    );
  }

  // feature page
  if (slug?.length === 1) {
    return (
      <div>
        <p>Viewing docs for Feature: {slug[0]}</p>
      </div>
    );
  }

  // If no slug is provided, show the docs home page
  return (
    <div>
      <h5>Docs Home Page</h5>
      <p>Welcome to the documentation!</p>
    </div>
  );
}
