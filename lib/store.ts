import { create } from 'zustand';
import { FormSchema } from './schema';
import { createJSONStorage, persist } from 'zustand/middleware';

type FormState = FormSchema;

type FromAction = {
  setData: (data: FormSchema) => void;
};

export const useFormStore = create(
  persist<FormState & FromAction>(
    (set) => ({
      setData: (data) => set(data),
    }),
    { name: 'form-store', storage: createJSONStorage(() => localStorage) }
  )
);
