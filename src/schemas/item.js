import { z } from 'zod';

export const createItemSchema = z.object({
  name: z.string().min(3).max(50),
  description: z.string().optional(),
  price: z.number().positive(),
});
