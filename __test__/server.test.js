'use strict';
const supertest = require('supertest');
const {app} = require('../src/server');
const mockRequest = supertest(app);
// const gameRouter = require('../src/routes/gamesRoutes');

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
  
  it('correct way to get game by id request', async () => {
    const game = await mockRequest.post('/api/v1/games').send({
      name: 'pes',
      genre: 'sport',
    });
    const response = await mockRequest.get(`/api/v1/games/${game.id}`);
    expect(response.status).toEqual(200);
  });

  it('correct way to create a game', async () => {
    const response = await mockRequest.post('/api/v1/games').send({
      name: 'pes',
      rate: '6.5',
      genre: 'sport',
    });
    expect(response.status).toEqual(200);
  });

  it('correct way to update a game', async () => {
    const response = await mockRequest.put(`/api/v1/games/:id`).send({name: 'witcher', genre: 'action'} );
    expect(response.status).toEqual(200); 
  });

  it('correct way to delete a game', async () => {
    const response = await mockRequest.delete(`/api/v1/games/:id`).send({name: 'witcher', genre: 'action'} );
    expect(response.status).toEqual(200); 
  });

  // player tests

  it('correct way to get all players request', async () => {
    const response = await mockRequest.get('/api/v1/players');
    expect(response.status).toEqual(200);
  });
  
  it('correct way to get player by id request', async () => {
    const game = await mockRequest.post('/api/v1/players').send({
      name: 'pes',
      genre: 'sport',
    });
    const response = await mockRequest.get(`/api/v1/players/${game.id}`);
    expect(response.status).toEqual(200);
  });

  it('correct way to create a player', async () => {
    const response = await mockRequest.post('/api/v1/players').send({
      name: 'hatem',
      games: 'pes',
    });
    expect(response.status).toEqual(200);
  });

  it('correct way to update a player', async () => {
    const response = await mockRequest.put(`/api/v1/players/:id`).send({name: 'hatem', games: 'pes'});
    expect(response.status).toEqual(200); 
  });

  it('correct way to delete a player', async () => {
    const response = await mockRequest.delete(`/api/v1/players/:id`).send({name: 'hatem', games: 'pes'});
    expect(response.status).toEqual(200); 
  });
});