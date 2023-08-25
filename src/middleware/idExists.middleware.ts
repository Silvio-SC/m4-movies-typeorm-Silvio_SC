import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import AppError from "../errors";
import { Movie } from "../entities";

export const idExists = async (req: Request, res: Response, next: NextFunction) => {
    const repo = AppDataSource.getRepository(Movie)
    const foundMovie = await repo.findOneBy({ id: Number(req.params.id) })
    
    if (!foundMovie) {
        console.log("id-movie:",foundMovie)
        console.log("req.id",req.params.id)
        throw new AppError("Movie not found", 404)
    } else {
        res.locals = { ...res.locals, foundMovie}
    
        return next()
    }

}