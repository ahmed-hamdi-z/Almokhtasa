import { z } from 'zod';

// Define the schema for the form data
export const formSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits' }),
  message: z.string().min(1, { message: 'Message is required' }),
});

// Infer the TypeScript type from the schema
export type FormData = z.infer<typeof formSchema>;