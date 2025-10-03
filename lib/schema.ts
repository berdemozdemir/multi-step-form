import z from 'zod';

export const formSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.email(),
  password: z.string(),
  cofirmPassword: z.string(),
});

export type FormSchema = z.infer<typeof formSchema>;
