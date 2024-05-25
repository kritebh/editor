export interface PhotoConvertRequestBody {
    format: ImageFormat;
}

export interface ConvertedImage {
    fileName: string;
    data: Buffer;
}

export type ImageFormat =
    | "avif"
    | "gif"
    | "heif"
    | "jpeg"
    | "jpg"
    | "jp2"
    | "jxl"
    | "png"
    | "raw"
    | "svg"
    | "tiff"
    | "tif"
    | "webp";
