import path from "node:path";

function replaceFileExtension(originalname: string, format: string) {
    return originalname.replace(path.extname(originalname), `.${format}`);
}

export { replaceFileExtension };
