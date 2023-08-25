import { Movie } from "../entities";
import { MovieRead, MovieUpdate, MoviesCreate, PaginationParams } from "../interface";
import { movieCreateSchema, movieUpdateSchema } from "../schemas";
import { moviesRepo } from "../repositories";

const createMovie = async (payload: MoviesCreate): Promise<Movie> => {
    return await moviesRepo.save(payload)
}

const readMovie = async ({page, perPage, sort, order, prevPage, nextPage}: PaginationParams) => {
    
    const [movies, count]: Array<MovieRead | number> = await moviesRepo.findAndCount({
        order: { [sort]: order },
        skip: page,
        take: perPage,
    });

    return {
        prevPage: page <= 1 ? null : prevPage,
        nextPage: count - page <= perPage ? null : nextPage,
        count,
        data: movies
    }
}

const updateMovie = async (movie: Movie, payload: MovieUpdate ): Promise<Movie> => {
    return await moviesRepo.save({...movie, ...payload});
}

const deleteMovie = async (payload: Movie): Promise<void> => {
    await moviesRepo.remove(payload)
}

export default { createMovie, readMovie, updateMovie, deleteMovie }