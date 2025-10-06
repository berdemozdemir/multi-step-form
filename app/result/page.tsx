'use client';

import { Button } from '@/components/ui/button';
import { paths } from '@/lib/paths';
import { useFormStore } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ResultPage = () => {
  const router = useRouter();

  const { firstName, lastName, email, userName, password, clearState } =
    useFormStore();

  useEffect(() => {
    if (!firstName || !lastName || !email || !userName || !password)
      router.push(paths.name);
  }, [firstName, lastName, email, userName, password, router]);

  return (
    <div className='w-full max-w-xs space-y-2 rounded-md bg-white p-6 shadow-lg'>
      <h2 className='text-2xl font-semibold'>Result Page</h2>

      <p>
        First Name: <span className='font-semibold'>{firstName}</span>
      </p>

      <p>
        Last Name: <span className='font-semibold'>{lastName}</span>
      </p>

      <p>
        Email: <span className='font-semibold'>{email}</span>
      </p>

      <p>
        Username: <span className='font-semibold'>{userName}</span>
      </p>

      <p>
        Password: <span className='font-semibold'>{password}</span>
      </p>

      <p className='mb-4 text-xs text-gray-400 italic'>
        Since this application is a mock application, the data is not sent
        anywhere and is only stored in the Zustand store.
      </p>

      <Button
        variant='outline'
        className='w-full'
        onClick={() => {
          clearState();

          router.push(paths.name);
        }}
      >
        Go and fill the form again
      </Button>
    </div>
  );
};

export default ResultPage;
