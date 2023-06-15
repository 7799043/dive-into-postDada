const request = require('supertest');
const app = require('../index');
const User = require('../models/User');

describe('POST /newUser', () => {
  it('should create a new user', async () => {
    let newUser = { email: '2@work.now', password: 'yesterday_not' };

    const response = await request(app)
      .post('/newUser')
      .send(newUser);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.user.email).toBe(newUser.email);
    expect(response.body.user.password).toBe(newUser.password);

    const createdUser = await User.findOne({ email: newUser.email });
    if (createdUser) {
      console.log('Użytkownik istnieje:', createdUser);
    }

    expect(createdUser).toBeTruthy();
  });
});