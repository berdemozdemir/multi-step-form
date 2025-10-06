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
import { formPasswordSchema } from '@/lib/schema';
import { useFormStore } from '@/lib/store';
import { FormPasswordSchema } from '@/lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { redirect, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const PasswordPage = () => {
  const router = useRouter();

  const { email, password, setData } = useFormStore();

  const form = useForm<FormPasswordSchema>({
    resolver: zodResolver(formPasswordSchema),
    defaultValues: {
      password: password,
      confirmPassword: '',
    },
  });

  const submitForm = form.handleSubmit((data) => {
    setData({
      password: data.password,
    });

    router.push(paths.result);
  });

  useEffect(() => {
    if (!email) redirect(paths.name);
  }, [email]);

  return (
    <RegisterContainer>
      <Form {...form}>
        <form className='space-y-4' onSubmit={submitForm}>
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <CustomFormInput
                    label='Password'
                    isPasswordField
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <CustomFormInput
                    label='Password'
                    isPasswordField
                    {...field}
                  />
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

export default PasswordPage;
