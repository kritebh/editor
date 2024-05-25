import multer from "multer";
import { FILE_20_MB } from "../constants";

const storage = multer.memoryStorage();

const fileUpload = multer({ storage, limits: { fileSize: FILE_20_MB } });

export default fileUpload;
