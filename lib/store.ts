import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { FormSchema } from './types';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

type FormState = Omit<FormSchema, 'confirmPassword'>;

type FromAction = {
  setData: (data: Partial<FormSchema>) => void;

  clearState: () => void;
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
