import express, { NextFunction, Request, Response, application } from "express";
import dotenv from "dotenv";
dotenv.config();
import photoEditController from "./photoEdit/controller";
import handleError from "./utils/middleware/globalErrorHandler";
import compression from "compression";

const app = express();
const PORT = Number(process.env.PORT) || 8000;
const HOST = process.env.HOST || "localhost";

app.listen(PORT, HOST, () => {
    console.log(`Server is running at http://${HOST}:${PORT}`);
});

//Middleware
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//HomeURL
app.get("/", (request: Request, response: Response, next: NextFunction) => {
    response.json({ message: "Server is up !" });
});

app.use("/api/image", photoEditController);

//Error Handler Middleware
app.use(handleError);

export default app;
