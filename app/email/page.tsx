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
import { paths } from '@/lib/paths';
import { formSchema, FormSchema } from '@/lib/schema';
import { useFormStore } from '@/lib/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

const EmailPage = () => {
  const router = useRouter();

  const formStore = useFormStore();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const submitForm = form.handleSubmit((data) => {
    console.log(data);

    formStore.setData({
      email: data.email,
    });

    console.log(useFormStore.getState());

    router.push(paths.password);
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
