import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  isFirstPage?: boolean;
  children: ReactNode;
};

export const RegisterContainer = ({ children, isFirstPage }: Props) => (
  <div className='relative w-full max-w-xs rounded-md bg-white p-6 shadow-lg'>
    {!isFirstPage && (
      <Link
        href={'../'}
        className='absolute -top-5 left-0 flex items-center text-xs hover:text-gray-500 hover:underline'
      >
        <ChevronLeft size={16} />

        <p>Go Back</p>
      </Link>
    )}

    <h1 className='mb-2 text-3xl font-semibold'>Sign up</h1>

    <p className='text-sm text-gray-400'>
      Your personal information stays private—only you can see it.
    </p>

    <hr className='my-4' />

    <div>{children}</div>
  </div>
);
