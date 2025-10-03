import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Multi Step Form',
  description: 'Making forms easy and fun with Next.js and Zustand.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='mx-auto h-screen w-full max-w-7xl bg-gray-300'>
        {children}
      </body>
    </html>
  );
}
