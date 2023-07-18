import request from 'supertest';
import app from './app'; // Import app from app.ts

describe('GET /books', () => {
  it('should return a list of books', async () => {
    const res = await request(app).get('/books');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('length');
    expect(res.body.length).toBeGreaterThan(0);
  });
});