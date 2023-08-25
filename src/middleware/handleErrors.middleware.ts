import { NextFunction, Request, Response } from "express";
import AppError from "../errors";
import { ZodError } from "zod";
import { EntityMetadataNotFoundError } from "typeorm";

export const handleErrors = (
    error: unknown,
    req: Request,
    res: Response,
    next: NextFunction
): Response => {

    if (error instanceof AppError) {
        return res.status(error.status).json({ message: error.message })
    }

    if (error instanceof ZodError) {
        let obj = {}
        error.errors.map(err => obj = {...obj, [err.path[0]]: [err.message]})
        return res.status(400).json({ message: obj })
    }

    if ( error instanceof EntityMetadataNotFoundError) {
        return res.status(500).json({ message: error.message })
    }

    return res.status(500).json({ message: 'internal server error' })
}