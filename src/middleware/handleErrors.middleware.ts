import { NextFunction, Request, Response } from "express";
import AppError from "../errors";
import { ZodError } from "zod";

export const handleErrors = (
    error: unknown,
    req: Request,
    res: Response,
    next: NextFunction
): Response => {

    if (error instanceof AppError) {
        res.status(error.status).json({ message: error.message })
    }

    if (error instanceof ZodError) {
        res.status(400).json({ message: error.errors })
    }

    return res.status(500).json({ message: 'internal server error' })
}