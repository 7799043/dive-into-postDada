const request = require('supertest');
const app = require('../index');
const User = require('../models/User');

describe('POST /newUser',  () => {
  it('should create a new user', async () => {
  

    const response =  await request(app)
      .post('/newUser')
      .send({ email: 'bu@ba.com', password: 'fatima' });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.user.email).toBe(newUser.email);
    expect(response.body.user.password).toBe(newUser.password);

    const createdUser = await User.findOne({ email: newUser.email });
    expect(createdUser).toBeTruthy();

    
    await new Promise((resolve) => setTimeout(resolve, 15000));
  });
});