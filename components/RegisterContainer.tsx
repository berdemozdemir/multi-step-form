import { ReactNode } from 'react';

export const RegisterContainer = ({ children }: { children: ReactNode }) => (
  <div className='w-full max-w-xs rounded-md bg-white p-6 shadow-lg'>
    <h1 className='mb-2 text-3xl font-semibold'>Sign up</h1>

    <p className='text-sm text-gray-400'>
      Your personal information stays private—only you can see it.
    </p>

    <hr className='my-4' />

    <div>{children}</div>
  </div>
);
