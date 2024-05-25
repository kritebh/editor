import sharp from "sharp";
import { ConvertedImage, ImageFormat } from "./interfaces";
import { replaceFileExtension } from "./helper";

function getAllImages(): string {
    return "All images";
}

async function convertImage(files: Express.Multer.File[], format: ImageFormat) {
    const convertedImage: ConvertedImage[] = [];
    for (const file of files) {
        const fileName = replaceFileExtension(file.originalname, format);

        const convertedBuffer = await sharp(file.buffer).toFormat(format).toBuffer();
        convertedImage.push({ fileName, data: convertedBuffer });
    }

    return convertedImage;
}

export { getAllImages, convertImage };
