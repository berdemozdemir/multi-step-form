'use client';

import { RegisterContainer } from '@/components/RegisterContainer';
import { Button } from '@/components/ui/button';
import { CustomFormInput } from '@/components/ui/CustomFormInput';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { paths } from '@/lib/paths';
import { formEmailSchema } from '@/lib/schema';
import { useFormStore } from '@/lib/store';
import { FormEmailSchema } from '@/lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { redirect, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const EmailPage = () => {
  const router = useRouter();

  const { firstName, lastName, email, userName, setData } = useFormStore();

  const form = useForm<FormEmailSchema>({
    resolver: zodResolver(formEmailSchema),
    defaultValues: {
      email,
      userName,
    },
  });

  const submitForm = form.handleSubmit((data) => {
    setData({
      email: data.email,
    });

    router.push(paths.password);
  });

  useEffect(() => {
    if (!firstName || !lastName) redirect(paths.name);
  }, [firstName, lastName]);

  return (
    <RegisterContainer>
      <Form {...form}>
        <form className='space-y-4' onSubmit={submitForm}>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <CustomFormInput label='Email' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='userName'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <CustomFormInput label='Username' {...field} />
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

export default EmailPage;
