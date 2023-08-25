import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import AppError from "../errors";
import { Movie } from "../entities";

export const nameExists = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.name) return next()  

    const repo = AppDataSource.getRepository(Movie)
    const foundMovieName = await repo.findOneBy({ name: req.body.name })

    if (!foundMovieName) {
        return next()  
    }
        
    throw new AppError('Movie already exists.', 409)
}