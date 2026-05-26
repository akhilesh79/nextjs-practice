'use client';

// This is the error page for the user layout
//  means if any erorr accurs in any page under the user layout, this page will be rendered, wraps route segments and its children in an error boundary, and renders the fallback UI when an error is thrown.
//  it is always an client component.
//  it isolates the error to its specific route segment without affecting the rest of your application, allowing for better error handling and user experience.
export default function Error({ error }: { error: Error }) {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold mb-4'>An error occurred</h1>
      <p className='text-lg text-gray-600 mb-8'>{error.message}</p>
      {/* back to previous page */}
      <button
        onClick={() => window.history.back()}
        className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300'
      >
        Go Back
      </button>
    </div>
  );
}
