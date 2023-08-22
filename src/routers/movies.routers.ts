import { Router } from "express";
import { moviesControllers } from "../controllers";
import middleware from "../middleware";


export const moviesRouter: Router = Router();

moviesRouter.post("", moviesControllers.createMovie);
moviesRouter.get("", moviesControllers.readMovie);

moviesRouter.use("/:id", middleware.idExists)

moviesRouter.patch("/:id", moviesControllers.updateMovie);
moviesRouter.delete("/:id", moviesControllers.deleteMovie);


