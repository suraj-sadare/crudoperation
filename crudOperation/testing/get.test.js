const app = require('../app');
const request = require('supertest');
describe('Post Endpoints', () => {
    test('should create a new post', async () => {
        const res = await request(app)
            .post('/articales')
            .send({
                name: "bagaban",
                desc: 'story of mali',
                author: "suraj"
            })
        expect(res.statusCode).toEqual(201)
    })
})
describe('Get Endpoints', () => {
    it('gets the test endpoint', async done => {
        const response = await request(app).get('/articales');
        expect(response.status).toBe(200);
        done();
      })
})
//here we need to assign id manually
const id="60a0ed2f961e8e032ec6574c";
test("Delete One Todo", async () => {
  const response = await request(app).delete(`/deleteArti/${id}`);
  expect(response.status).toBe(208);
  expect(typeof response.body).toBe("object");
 });
 //here we need to assign id manually
const id="60a330db04daff12bc83ddfd";
 describe('Post Endpoints', () => {
      test('should update the given post', async () => {
          const res = await request(app)
              .patch(`/update/${id}`)
              .send({
                  name: "bagaban123",
                  desc: 'story of mali',
                  author: "jivan"
              })
          expect(res.statusCode).toEqual(200)
      })
  })
describe('Post Endpoints', () => {
test('Should login existing user', async () => {
  const res=await request(app)
        .post('/login')
        .send({ 
          email:"jivanghadage@gmail.com",
          password:"jivan@1234"
        })
        expect(res.body.message).toBe("Authentication successfull");
        expect(200);
})
})
describe('Post Endpoints', () => {
  test('Should not login user with wrong email id', async () => {
    const res=await request(app)
          .post('/login')
          .send({ 
            email:"jivanghadagegmail.com",
            password:"jivan@1234"
          })
          expect(res.body.message).toBe("Authentication failed");
          expect(200);
  })
  })
describe('Post Endpoints', () => {
    test('new user should be created', async () => {
      const res=await request(app)
            .post('/signup')
            .send({ 
              email:"sadarepatil@gmail.com",
              password:"sadare@1234"
            })
            expect(201);
    })
    })
  describe('Post Endpoints', () => {
  test('duplicated user should not be created', async () => {
    const res=await request(app)
          .post('/signup')
          .send({ 
            email:"sadarepatil@gmail.com",
            password:"sadare@1234"
          })
          expect(res.body.message).toBe("mail exist");
  })
  })
const id="60a0e45bdce98777b1aec8fa";
test("Delete a user", async () => {
  const response = await request(app).delete(`/delete/${id}`);
  expect(response.status).toBe(208);
  expect(typeof response.body).toBe("object");
 });


  