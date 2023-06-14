const request = require('supertest');
const app = require('../index');
const User = require('../models/User');

describe('POST /newUser', () => {
  it('should create a new user', async () => {
    const newUser = {
      email: 'test@example.com',
      password: 'test123',
    };

    const response = await request(app)
      .post('/newUser')
      .send(newUser);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.user.email).toBe(newUser.email);
    expect(response.body.user.password).toBe(newUser.password);
  });
});
