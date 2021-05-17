const app = require('../app');
const request = require('supertest');
// describe('Post Endpoints', () => {
//     test('should create a new post', async () => {
//         const res = await request(app)
//             .post('/articales')
//             .send({
//                 name: "bagaban",
//                 desc: 'story of mali',
//                 author: "suraj"
//             })
//         expect(res.statusCode).toEqual(201)
//     })
// })
describe('Get Endpoints', () => {
    it('gets the test endpoint', async done => {
        const response = await request(app).get('/articales');
        expect(response.status).toBe(200);
        // expect(response.body.message).toBe('pass!');
        done();
      })
})
