'use client';

import { Button } from '@/components/ui/button';
import { CustomFormInput } from '@/components/ui/CustomFormInput';
import { useRouter } from 'next/navigation';

const EmailPage = () => {
  const router = useRouter();

  return (
    <div className='space-y-4 rounded-md bg-white p-4 shadow-lg'>
      <CustomFormInput label='E-mail' />

      <div className='text-end'>
        <Button onClick={() => router.push('/password')}>Next</Button>
      </div>
    </div>
  );
};

export default EmailPage;
