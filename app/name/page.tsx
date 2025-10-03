'use client';

import { Button } from '@/components/ui/button';
import { CustomFormInput } from '@/components/ui/CustomFormInput';
import { paths } from '@/lib/paths';
import { useRouter } from 'next/navigation';

const NamePage = () => {
  const router = useRouter();

  return (
    <div className='space-y-4 rounded-md bg-white p-6 shadow-lg'>
      <CustomFormInput label='Fist Name' />

      <CustomFormInput label='Last Name' />

      <div className='text-end'>
        <Button onClick={() => router.push(paths.email)}>Next</Button>
      </div>
    </div>
  );
};

export default NamePage;
