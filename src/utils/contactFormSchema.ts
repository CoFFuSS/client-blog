import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  officeLocation: z.string().min(1, 'Office location is required'),
  message: z.string().min(30, 'invalid Message'),
});

export type FormValues = z.infer<typeof contactFormSchema>;

export interface ContactFormFields {
  fullName: string;
  email: string;
  officeLocation: string;
  message: string;
}
