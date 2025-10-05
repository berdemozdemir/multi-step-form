import z from 'zod';

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

export const formSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: 'First name must be at least 3 characters' }),
  lastName: z
    .string()
    .min(3, { message: 'Last name must be at least 3 characters' }),
  email: z.email(),
  password: z
    .string()
    .regex(
      passwordRegex,
      'Password must include uppercase, lowercase, number, and special character'
    ),
  confirmPassword: z.string(),
});

export const formNameSchema = formSchema.pick({
  firstName: true,
  lastName: true,
});

export const formEmailSchema = formSchema.pick({
  email: true,
});

export const formPasswordSchema = formSchema
  .pick({
    password: true,
    confirmPassword: true,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });
