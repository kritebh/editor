import request from "supertest";
import app from "../..";
import path from "node:path";
import http from "node:http";

describe("convert API", () => {
    let server: http.Server;

    beforeAll((done) => {
        server = app.listen(() => {
            done();
        });
    });

    afterAll((done) => {
        server.close(() => {
            done();
        });
    });

    it("should convert images and return converted images", async () => {
        const response = await request(app)
            .post("/api/image/convert")
            .field("format", "jpeg")
            .attach("files", path.join(__dirname, "..", "..", "TestMockData", "test-images", "car1.png"))
            .attach("files", path.join(__dirname, "..", "..", "TestMockData", "test-images", "car2.png"));

        console.log(response);
    });
});
