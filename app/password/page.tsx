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
import { formPasswordSchema } from '@/lib/schema';
import { useFormStore } from '@/lib/store';
import { FormPasswordSchema } from '@/lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const PasswordPage = () => {
  const formStore = useFormStore();

  const form = useForm<FormPasswordSchema>({
    resolver: zodResolver(formPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const submitForm = form.handleSubmit((data) => {
    console.log(data);

    formStore.setData({
      password: data.password,
    });

    console.log(useFormStore.getState());
  });

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
