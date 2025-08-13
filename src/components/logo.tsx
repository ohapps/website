'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';

export default function Logo() {
  const { theme } = useTheme();
  const logo = theme === 'light' ? '/dark_logo.png' : '/light_logo.png';
  return (
    <Link href="/" className="flex items-center space-x-2">
      <img src={logo} alt="Logo" className="h-8 w-8" />
      <span className="font-bold text-xl">Open House Apps</span>
    </Link>
  );
}
