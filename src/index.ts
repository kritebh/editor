import express, { NextFunction, Request, Response, application } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import photoController from './photoEdit/controller';
import handleError from './utils/middleware/globalErrorHandler';
import compression from 'compression';

const app = express();
const PORT = Number(process.env.PORT) || 8000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, () => {
    console.log(`Server is running at http://${HOST}:${PORT}`);
});

//Middleware
app.use(compression());

//HomeURL
app.get('/', (request: Request, response: Response, next: NextFunction) => {
    response.json({ message: 'Hello there !' });
});

app.use('/api/image', photoController);

//Error Handler Middleware
app.use(handleError);
