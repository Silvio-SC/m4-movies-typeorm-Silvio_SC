import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data_source";

export const idExists = async (req: Request, res: Response, next: NextFunction) => {
    const repo = AppDataSource.getRepository(req.body)
    const foundMovie = repo.findOneBy({ id: Number(req.params.id) })
    
    if (!foundMovie) res.status(404).json({ message: "Movie not found"})

    res.locals = { ...res.locals, foundMovie}

    return next()
}