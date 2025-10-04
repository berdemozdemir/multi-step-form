import { create } from 'zustand';
import { FormSchema } from './schema';

type FormState = FormSchema;

type FromAction = {
  setData: (data: FormSchema) => void;
};

export const useFormStore = create<FormState & FromAction>((set) => ({
  setData: (data) => set(data),
}));
