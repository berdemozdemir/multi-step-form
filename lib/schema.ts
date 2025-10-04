import z from 'zod';

export const formSchema = z.object({
  firstName: z.string().min(3).optional(),
  lastName: z.string().min(3).optional(),
  email: z.email().optional(),
  password: z.string().optional(),
  confirmPassword: z.string().optional(),
});

export type FormSchema = z.infer<typeof formSchema>;
