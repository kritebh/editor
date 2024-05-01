import { Router, Request, Response, NextFunction } from 'express';
import { getAllImages } from './service';
import { readFileSync } from 'node:fs';

const photoController = Router();

photoController.get('/', (request: Request, response: Response, next: NextFunction) => {
    let allImages = getAllImages();
    response.send(allImages);
});

export default photoController;
