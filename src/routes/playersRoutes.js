'use strict';
const express = require('express');
const Players = require('../models/players');
const validator = require('../middleware/playersValidator');
const router = express.Router();
const player = new Players();

router.get('/', getPlayers);

router.get('/:id', getPlayers);

router.post('/', validator, createPlayers);

router.put('/:id', validator, updatePlayers);

router.delete('/:id', deletePlayers);

function getPlayers(req, res){
  const response = player.read(req.params.id);
  res.status(200).json(response);
}

function createPlayers(req, res){
  const response = player.create(req.body);
  res.status(200).json(response);
}

function updatePlayers(req, res){
  const response = player.update(req.params.id, req.body);
  res.status(200).json(response);
}

function deletePlayers(req, res){
  const response = player.delete(req.params.id);
  res.status(200).json(response);
}

module.exports = router;