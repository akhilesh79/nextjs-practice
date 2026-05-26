import type { Metadata } from 'next';

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
      <body style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
        <header style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>
          <h1>My App</h1>
        </header>
        {children}
        <footer style={{ backgroundColor: '#f0f0f0', padding: '1rem', marginTop: '2rem' }}>
          <p>&copy; 2023 My App. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
