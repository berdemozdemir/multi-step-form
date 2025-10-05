'use client';

import { RegisterContainer } from '@/components/RegisterContainer';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { paths } from '@/lib/paths';
import { formPasswordSchema } from '@/lib/schema';
import { useFormStore } from '@/lib/store';
import { FormPasswordSchema } from '@/lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const PasswordPage = () => {
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
                <FormLabel>Password</FormLabel>

                <FormControl>
                  <Input type='password' {...field} />
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
                <FormLabel>Confirm Password</FormLabel>

                <FormControl>
                  <Input type='password' {...field} />
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
