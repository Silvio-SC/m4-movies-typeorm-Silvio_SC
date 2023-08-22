import { Movie } from "../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../data_source";
import { MovieUpdate, MoviesCreate } from "../interface";


const createMovie = async (payload: MoviesCreate): Promise<Movie> => {
    const repo: Repository<Movie> = AppDataSource.getRepository(Movie)
    return await repo.save(payload)
}

const readMovie = async (): Promise<Movie[]> => {
    const repo: Repository<Movie> = AppDataSource.getRepository(Movie)
    return await repo.find();
}

const updateMovie = async (movie: Movie, payload: MovieUpdate ): Promise<Movie> => {
    const repo: Repository<Movie> = AppDataSource.getRepository(Movie)
    return await repo.save({...movie, ...payload});
}

const deleteMovie = async (payload: Movie): Promise<void> => {
    const repo: Repository<Movie> = AppDataSource.getRepository(Movie)
    await repo.remove(payload)
}

export default { createMovie, readMovie, updateMovie, deleteMovie }