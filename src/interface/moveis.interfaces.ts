import { z } from "zod";
import { movieCreateSchema } from "../schemas";
import { Movie } from "../entities";
import { DeepPartial, Repository } from "typeorm";



type MoviesCreate = z.infer<typeof movieCreateSchema>;
type MovieRead = Movie[]
type MovieUpdate = DeepPartial<Movie>
type MovieRepo = Repository<Movie>


export { MoviesCreate, MovieRead, MovieUpdate, MovieRepo }