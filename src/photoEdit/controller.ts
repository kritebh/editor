import { Router, Request, Response, NextFunction } from "express";
import { convertImage } from "./service";
import fileUpload from "../utils/middleware/fileUpload";
import { PhotoConvertRequestBody } from "./interfaces";
import payloadValidate from "../utils/middleware/payloadValidate";
import photoConvertSchema from "./payloadValidationSchema/photoConvert";
import { MAX_FILE_COUNT } from "../utils/constants";

const photoEditController = Router();

photoEditController.post(
    "/convert",
    fileUpload.array("files", MAX_FILE_COUNT),
    payloadValidate(photoConvertSchema),
    async (request: Request<{}, {}, PhotoConvertRequestBody>, response: Response, next: NextFunction) => {
        try {
            const files = request.files as Express.Multer.File[];
            const format = request.body.format;

            let result = await convertImage(files, format);

            response.json({
                message: "Files converted successfully",
                result,
            });
        } catch (error) {
            console.log(error);
            response.status(500).json({ error: "Error in converting files" });
        }
    },
);

export default photoEditController;
