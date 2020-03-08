import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
  it('shoub be able to register', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Nathalia Batista Amorim',
        email: 'nathalissa@hotmail.com',
        password: '123456',
      });

    expect(response.body).toHaveProperty('id');
  });
});
