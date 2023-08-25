import { NextFunction, Request, Response } from "express";
import { PaginationParams } from "../interface";

export const pagination = async (req: Request, res: Response, next: NextFunction) => {
    const queryPage: number = Number(req.query.page)
    const queryPerPage: number = Number(req.query.perPage)

    const page: number = queryPage && queryPage > 1 ? queryPage : 1;
    const perPage: number = queryPerPage && queryPerPage <= 5 && queryPerPage > 0 ? queryPerPage : 5;
    
    const baseUrl: string = "http://localhost:3000/movies"
    const prevPage: string = `${baseUrl}?page=${page - 1}&perPage=${perPage}`
    const nextPage: string = `${baseUrl}?page=${page + 1}&perPage=${perPage}`

    const querySort: any = req.query.sort;
    const queryOrder: any = req.query.order;

    const sortOpts: string[] = ["price", "duration"]
    const orderOpts: string[] = ["asc", "desc"]

    let sort: string;
    let order: string;

    if (!(querySort && sortOpts.includes(querySort))) {
        sort = "id"
    } else {
        sort = querySort
    }

    if ( !querySort || !(queryOrder && orderOpts.includes(queryOrder))) {
        order = "asc"
    } else {
        order = queryOrder
    }
 
    const paginationParams: PaginationParams = {
        page: perPage * (page - 1), 
        perPage, 
        order: order,
        sort: sort,
        prevPage, 
        nextPage,
    }

    res.locals = { ...res.locals, paginationParams } 
    return next()
}