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
  
  let gameId;
  let playerId;
  
  it('correct way to create a game', async () => {
    let game = {
      name: 'pes',
      rate: '6.5',
      genre: 'sport',
    };
    const response = await mockRequest.post('/api/v1/games').send(game);
    gameId = response.body[0].id; 
    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual(game.name);
  });
  
  it('correct way to get all games request', async () => {
    const game2 = {
      name: 'fifa',
      rate: '7',
      genre: 'sport',
    };
    const response2 = await mockRequest.post('/api/v1/games').send(game2);
    const response = await mockRequest.get('/api/v1/games');
    expect(response.status).toEqual(200);
    expect(response.body.length).toEqual(2);
  });
  
  it('correct way to get game by id request', async () => {
    const response = await mockRequest.get(`/api/v1/games/${gameId}`);
    expect(response.status).toEqual(200);
    expect(response.body).toBeDefined();
  });

  it('correct way to update a game', async () => {
    let updatedGame = {
      name: 'pes',
      rate: '7.5',
      genre: 'sport, drama',
    };
    const response = await mockRequest.put(`/api/v1/games/${gameId}`).send(updatedGame);
    expect(response.status).toEqual(200); 
    expect(response.body.rate).toEqual(updatedGame.rate); 
    expect(response.body.genre).toEqual(updatedGame.genre); 
  });

  it('correct way to delete a game', async () => {
    const response = await mockRequest.delete(`/api/v1/games/${gameId}`);
    expect(response.status).toEqual(200); 
    console.log(response.body);
    expect(response.body.length).toBeDefined(); 
  });

  //   // player tests

  it('correct way to create a player', async () => {
    const player = {
      name: 'hatem',
      games: 'pes',
    };
    const response = await mockRequest.post('/api/v1/players').send(player);
    playerId = response.body[0].id;
    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual(player.name);
  });

  it('correct way to get all players request', async () => {
    const player2 = {
      name: 'osama',
      games: 'pes, fifa',
    };
    const response3 = await mockRequest.post('/api/v1/players').send(player2);
    const response = await mockRequest.get('/api/v1/players');
    expect(response.status).toEqual(200);
    expect(response.body.length).toEqual(2);
  });
  
  it('correct way to get player by id request', async () => {
    const response = await mockRequest.get(`/api/v1/players/${playerId}`);
    expect(response.status).toEqual(200);
    expect(response.body).toBeDefined();
  });

  it('correct way to update a player', async () => {
    let updatedPlayer = {
      name: 'hatem',
      games: 'god of war, witcher 3: the wild hunt',
    };
    const response = await mockRequest.put(`/api/v1/players/${playerId}`).send(updatedPlayer);
    expect(response.status).toEqual(200); 
    expect(response.body.games).toEqual(updatedPlayer.games); 
  });

  it('correct way to delete a player', async () => {
    const response = await mockRequest.delete(`/api/v1/players/${playerId}`);
    expect(response.status).toEqual(200); 
    expect(response.body).toBeDefined(); 
  });
});