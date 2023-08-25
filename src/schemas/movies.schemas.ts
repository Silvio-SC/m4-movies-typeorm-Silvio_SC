import { z } from 'zod';

const MovieSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(50),
    description: z.string().nullish(),
    duration: z.number().positive().int(),
    price: z.number().positive().int()
})

const movieCreateSchema = MovieSchema.omit({ id: true });
const movieUpdateSchema = movieCreateSchema.partial();

export { movieCreateSchema, movieUpdateSchema };