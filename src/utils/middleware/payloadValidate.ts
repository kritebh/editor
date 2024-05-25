import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

const payloadValidate = (schema: ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            const errorMessage = error.details.map((detail) => detail.message.replace(/\"/g, "")).join(", ");
            return res.status(400).json({ "Payload Validation Error": errorMessage });
        }
        next();
    };
};

export default payloadValidate;
