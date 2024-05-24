import request from 'supertest';
import app from '../..';

describe('GET /', () => {
    it('should return a message', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'Hello there !' });
    });
});
