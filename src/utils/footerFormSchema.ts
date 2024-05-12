import { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

export const footerFormSchema = z.object({ email: z.string().email() }).required();

export type TypeFooterForm = z.infer<typeof footerFormSchema>;

export interface FooterFormProps {
  disabled: boolean;
  onSubmit: SubmitHandler<TypeFooterForm>;
}
