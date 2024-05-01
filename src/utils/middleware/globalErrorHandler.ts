import { Request, Response, NextFunction } from 'express';

function handleError(error: Error, request: Request, response: Response, next: NextFunction) {
    console.error('Global error handler:', error);
    response.status(500).json({ error: 'Internal Server Error' });
}

export default handleError;
