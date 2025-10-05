'use client';

import { Button } from '@/components/ui/button';
import { paths } from '@/lib/paths';
import { formNameSchema } from '@/lib/schema';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { useFormStore } from '@/lib/store';
import { FormNameSchema } from '@/lib/types';
import { RegisterContainer } from '@/components/RegisterContainer';
import { CustomFormInput } from '@/components/ui/CustomFormInput';

const NamePage = () => {
  const router = useRouter();

  const { firstName, lastName, setData } = useFormStore();

  const form = useForm<FormNameSchema>({
    resolver: zodResolver(formNameSchema),
    defaultValues: {
      firstName,
      lastName,
    },
  });

  const submitForm = form.handleSubmit((data) => {
    setData({
      firstName: data.firstName || '',
      lastName: data.lastName || '',
    });

    console.log(useFormStore.getState());

    router.push(paths.email);
  });

  return (
    <RegisterContainer>
      <Form {...form}>
        <form onSubmit={submitForm} className='space-y-4'>
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <CustomFormInput label='First Name' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='lastName'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <CustomFormInput label='Last Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='text-end'>
            <Button type='submit'>Next</Button>
          </div>
        </form>
      </Form>
    </RegisterContainer>
  );
};

export default NamePage;
