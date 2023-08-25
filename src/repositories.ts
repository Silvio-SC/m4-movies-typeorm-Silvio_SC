import { AppDataSource } from "./data-source";
import { Movie } from "./entities";
import { MovieRepo } from "./interface";


const moviesRepo: MovieRepo = AppDataSource.getRepository(Movie);

export { moviesRepo };