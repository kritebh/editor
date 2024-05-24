import { Router, Request, Response, NextFunction } from 'express';
import { getAllImages } from './service';

const photoEditController = Router();

photoEditController.get('/', (request: Request, response: Response, next: NextFunction) => {
    let allImages = getAllImages();
    response.send(allImages);
});

export default photoEditController;
