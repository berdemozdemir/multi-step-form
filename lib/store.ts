import { create } from 'zustand';
import { FormSchema } from './schema';
import { createJSONStorage, persist } from 'zustand/middleware';

type FormState = FormSchema;

type FromAction = {
  setData: (data: Partial<FormSchema>) => void;
};

export const useFormStore = create(
  persist<FormState & FromAction>(
    (set) => ({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',

      setData: (data) => set((state) => ({ ...state, ...data })),
    }),
    { name: 'form-store', storage: createJSONStorage(() => localStorage) }
  )
);
