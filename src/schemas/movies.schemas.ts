import { z } from 'zod';

const MovieSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(50),
    description: z.string(),
    duration: z.number().positive(),
    price: z.number().positive()
})

const movieCreateSchema = MovieSchema.omit({ id: true });
const movieUpdateSchema = movieCreateSchema.partial();

export { movieCreateSchema, movieUpdateSchema };