import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import photoEditController from "./photoEdit/controller";
import handleError from "./utils/middleware/globalErrorHandler";
import compression from "compression";
import cors from "cors";

const app = express();

//Middleware
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//HomeURL
app.get("/", (request: Request, response: Response, next: NextFunction) => {
    response.json({ message: "Server is up !" });
});

app.use("/api/image", photoEditController);

//Error Handler Middleware
app.use(handleError);

export default app;
