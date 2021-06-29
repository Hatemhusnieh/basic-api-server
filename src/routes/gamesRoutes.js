'use strict';
const express= require('express');
const Games = require('../models/games');
const validator = require('../middleware/gamesValidator');
const router = express.Router();
const games = new Games();

const getGames = (req, res) => {
  const response = games.read(req.params.id);
  res.status(200).json(response);
};

const createGame = (req, res) => {
  const response = games.create(req.body);
  res.status(200).json(response);
};

const updateGame = (req, res) => {
  const response = games.update(req.params.id, req.body);
  res.status(200).json(response);
};

const deleteGame = (req, res) => {
  const response = games.delete(req.params.id);
  res.status(200).json(response);
};

router.get('/', getGames);

router.get('/:id', getGames); 

router.post('/', validator, createGame);

router.put('/:id', validator, updateGame);

router.delete('/:id', deleteGame);

module.exports = router;