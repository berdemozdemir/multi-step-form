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
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useFormStore } from '@/lib/store';
import { FormNameSchema } from '@/lib/types';

const NamePage = () => {
  const router = useRouter();

  const formStore = useFormStore();

  const form = useForm<FormNameSchema>({
    resolver: zodResolver(formNameSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });

  const submitForm = form.handleSubmit((data) => {
    formStore.setData({
      firstName: data.firstName,
      lastName: data.lastName,
    });

    console.log(useFormStore.getState());

    router.push(paths.email);
  });

  return (
    <div className='rounded-md bg-white p-6 shadow-lg'>
      <Form {...form}>
        <form onSubmit={submitForm} className='space-y-4'>
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>

                <FormControl>
                  <Input {...field} />
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
                <FormLabel>Last Name</FormLabel>
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

export default NamePage;
