import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { PropsWithChildren } from 'react';
import { profile } from '@/constants/profile';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: profile.name,
  description: profile.bio,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
