import Joi from "joi";

const formatSchema = Joi.string()
    .valid("avif", "gif", "heif", "jpeg", "jpg", "jp2", "jxl", "png", "raw", "svg", "tiff", "tif", "webp")
    .required();
const photoConvertSchema = Joi.object({
    format: formatSchema,
});

export default photoConvertSchema;
