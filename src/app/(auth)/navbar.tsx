'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/login', label: 'Login' },
  { href: '/forgot-password', label: 'Forgot Password' },
  { href: '/register', label: 'Register' },
];

export default function Navbar() {
  const pathName = usePathname();

  return (
    <nav className='p-4'>
      {navLinks.map((link) => {
        const isActive = pathName === link.href && pathName.startsWith(link.href) && pathName !== '/';
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`mx-2 ${isActive ? 'text-gray-600 font-bold' : 'text-blue-500 hover:text-blue-700'}`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
