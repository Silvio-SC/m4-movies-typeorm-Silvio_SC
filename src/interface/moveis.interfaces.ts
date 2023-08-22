import { z } from "zod";
import { movieCreateSchema } from "../schemas";
import { Movie } from "../entities";
import { DeepPartial } from "typeorm";



type MoviesCreate = z.infer<typeof movieCreateSchema>;
type MovieRead = Movie[]
type MovieUpdate = DeepPartial<Movie>

export { MoviesCreate, MovieRead, MovieUpdate }