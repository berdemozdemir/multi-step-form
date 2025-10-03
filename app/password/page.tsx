'use client';

import { Button } from '@/components/ui/button';
import { CustomFormInput } from '@/components/ui/CustomFormInput';

const PasswordPage = () => {
  return (
    <div className='space-y-4 rounded-md bg-white p-4 shadow-lg'>
      <CustomFormInput label='Password' />

      <CustomFormInput label='Confirm Password' />

      <div className='text-end'>
        <Button>Next</Button>
      </div>
    </div>
  );
};

export default PasswordPage;
