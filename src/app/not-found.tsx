import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: 'noindex, follow',
};

export { NotFound as default } from '@/components/NotFound';
