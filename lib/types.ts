import z from 'zod';
import { formSchema } from './schema';

export type FormSchema = z.infer<typeof formSchema>;

export type FormNameSchema = Pick<FormSchema, 'firstName' | 'lastName'>;

export type FormEmailSchema = Pick<FormSchema, 'email' | 'userName'>;

export type FormPasswordSchema = Pick<
  FormSchema,
  'password' | 'confirmPassword'
>;
