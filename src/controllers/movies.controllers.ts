import { Request, Response } from "express";
import { moveisServices } from "../services";


const createMovie = async (req: Request, res: Response): Promise<Response> => {
    const Movie = await moveisServices.createMovie(req.body)
    return res.status(201).json(Movie)
}

const readMovie = async (req: Request, res: Response): Promise<Response> => {
    const Movie = await moveisServices.readMovie(res.locals.paginationParams)
    return res.status(200).json(Movie)
}

const updateMovie = async (req: Request, res: Response): Promise<Response> => {
    const Movie = await moveisServices.updateMovie(res.locals.foundMovie, req.body)
    return res.status(200).json(Movie)
}

const deleteMovie = async (req: Request, res: Response): Promise<Response> => {
    await moveisServices.deleteMovie(res.locals.foundMovie)
    return res.status(204).json()
}

export default { createMovie, readMovie, updateMovie, deleteMovie  }