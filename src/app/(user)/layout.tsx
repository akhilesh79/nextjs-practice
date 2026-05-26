import type { Metadata } from 'next';
import '../global.css';

export const metadata: Metadata = {
  title: {
    default: 'Next.js App',
    template: '%s | Next.js App',
  },
  description: '...',
};

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='font-sans m-0 p-0'>
        <header className='bg-gray-800 text-white p-4'>
          <h1>My App</h1>
        </header>
        {children}
        <footer className='bg-gray-200 p-4 mt-8'>
          <p>&copy; 2023 My App. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
