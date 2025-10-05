import { create } from 'zustand';
import { FormSchema } from './schema';
import { createJSONStorage, persist } from 'zustand/middleware';

type FormState = FormSchema;

type FromAction = {
  setData: (data: Partial<FormSchema>) => void;

  clearState: () => void;
};

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const useFormStore = create(
  persist<FormState & FromAction>(
    (set) => ({
      ...initialState,

      setData: (data) => set((state) => ({ ...state, ...data })),

      clearState: () => set(() => ({ ...initialState })),
    }),
    { name: 'form-store', storage: createJSONStorage(() => localStorage) }
  )
);
