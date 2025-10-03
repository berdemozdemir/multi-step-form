'use client';

import { Eye, EyeOff } from 'lucide-react';
import { ComponentProps, useState } from 'react';
import { Input } from './input';
import { Label } from './label';

type CustomFormInputProps = {
  label: string;
  isPasswordField?: boolean;
} & ComponentProps<typeof Input>;

export const CustomFormInput = ({
  label,
  isPasswordField = false,
  ...props
}: CustomFormInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className='relative'>
      <Input
        className='peer h-12 border px-3 pt-5'
        type={isPasswordField ? (showPassword ? 'text' : 'password') : 'text'}
        placeholder=' '
        {...props}
      />

      <Label
        className={`absolute top-1/2 left-3 -translate-y-1/2 text-[#62748E] transition-all duration-200 ease-out peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:-translate-y-0 peer-[:not(:placeholder-shown)]:text-xs`}
      >
        {label}
      </Label>

      {isPasswordField &&
        (showPassword ? (
          <EyeOff
            className='absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer'
            color='#62748E'
            size={18}
            onClick={togglePasswordVisibility}
          />
        ) : (
          <Eye
            className='absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer'
            size={18}
            color='#62748E'
            onClick={togglePasswordVisibility}
          />
        ))}
    </div>
  );
};
