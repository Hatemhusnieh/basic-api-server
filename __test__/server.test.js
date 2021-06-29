'use strict';
const supertest = require('supertest');
const {app} = require('../src/server');
const mockRequest = supertest(app);
const gameRouter = require('../src/routes/gamesRoutes');

describe('API server', () => {
  it('right path', async () => {
    const response = await mockRequest.get('/');
    expect(response.status).toEqual(200);
  });

  it('wrong path', async () => {
    const response = await mockRequest.get('/bad');
    expect(response.status).toEqual(404);
  });
  
  it('correct way to get all games request', async () => {
    const response = await mockRequest.get('/api/v1/games');
    expect(response.status).toEqual(200);
  });
  
  // it('correct way to get game by id request', async () => {
  //   await mockRequest.post('/api/v1/games').
  //     send({
  //       name: 'pes',
  //       rate: 6.5,
  //       genre: 'sport',
  //     });
  //   const response = await mockRequest.get(`/api/v1/games${id}`);
  //   expect(response.status).toEqual(200);
  // });
  // it('correct way to create a game', async (req, res) => {
  //   req.body = {
  //     name: 'the witcher',
  //     rate: 9.4,
  //     genre: 'adventure',
  //   };
  //   const response = await mockRequest.post('/games/api/v1');
  //   expect(response.status).toEqual(200);
  // });


});