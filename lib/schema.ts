import z from 'zod';

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

export const formSchema = z
  .object({
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    email: z.email(),
    password: z
      .string()
      .regex(
        passwordRegex,
        '        Password must include uppercase, lowercase, number, and special character'
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

export type FormSchema = z.infer<typeof formSchema>;
