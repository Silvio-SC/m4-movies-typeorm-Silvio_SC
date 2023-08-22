import "reflect-metadata"
import "dotenv/config"
import express, { Application } from 'express';
import { moviesRouter } from "./routers";
import middleware from "./middleware";

const app: Application = express();
app.use(express.json());

app.use("/movies", moviesRouter)

app.use(middleware.handleErrors)

export default app;