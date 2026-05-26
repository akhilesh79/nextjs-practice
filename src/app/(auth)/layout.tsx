import '../global.css';
import Navbar from './navbar';

export const metadata = {
  title: {
    default: 'Next.js App',
    template: '%s | Next.js App',
  },
  description: '...',
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-gray-100'>
        {/* Navigation Bar */}
        <Navbar />
        {children}
        <footer className='bg-gray-200 p-4 mt-8'>
          <p>&copy; 2023 My App. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
