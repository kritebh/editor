import app from ".";

const PORT = Number(process.env.PORT) || 8000;
const HOST = process.env.HOST || "localhost";

const server = app.listen(PORT, HOST, () => {
    console.log(`Server is running at http://${HOST}:${PORT}`);
});

export default server;
