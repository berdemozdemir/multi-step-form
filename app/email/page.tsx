'use client';

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
import { formSchema, FormSchema } from '@/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

const EmailPage = () => {
  const router = useRouter();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const submitForm = form.handleSubmit((data) => {
    console.log(data);

    router.push('/password');
  });

  return (
    <div className='rounded-md bg-white p-4 shadow-lg'>
      <Form {...form}>
        <form className='space-y-4' onSubmit={submitForm}>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>

                <FormControl>
                  <Input {...field} />
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
    </div>
  );
};

export default EmailPage;
