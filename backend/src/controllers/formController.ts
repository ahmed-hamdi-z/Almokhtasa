import { Request, Response } from 'express';
import { saveToExcel } from '../utils/excelUtils';
import { formSchema, FormData } from '../schemas/formSchema';
import { z } from 'zod';

export const submitForm = (req: Request, res: Response): void => {
  try {
    // Validate the request body using Zod
    const validatedData: FormData = formSchema.parse(req.body);

    // Save the validated data to Excel
    saveToExcel(validatedData);

    // Send a success response
    res.status(200).json({ message: 'Form data saved successfully!' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Handle validation errors
      res.status(400).json({ message: 'Validation failed', errors: error.errors });
    } else {
      // Handle other errors
      console.error('Error saving form data:', error);
      res.status(500).json({ message: 'Failed to save form data.' });
    }
  }
};