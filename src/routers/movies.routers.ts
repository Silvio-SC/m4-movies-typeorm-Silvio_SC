import { Router } from "express";
import { moviesControllers } from "../controllers";
import middleware from "../middleware";
import { validateBody } from "../middleware/validateBody.middleware";
import { movieCreateSchema, movieUpdateSchema } from "../schemas";


export const moviesRouter: Router = Router();

moviesRouter.post("", 
    validateBody(movieCreateSchema), 
    middleware.nameExists, 
    moviesControllers.createMovie
);
moviesRouter.get("",middleware.pagination, moviesControllers.readMovie);

moviesRouter.use("/:id", middleware.idExists)

moviesRouter.patch("/:id", 
    validateBody(movieUpdateSchema),   
    middleware.nameExists, 
    moviesControllers.updateMovie
);
moviesRouter.delete("/:id", moviesControllers.deleteMovie);


