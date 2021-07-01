'use strict';
const { v4: uuidv4 } = require('uuid');

class Players {
  constructor(){
    this.playersDb = [];
  }

  // get player by id or all players
  read(id){
    if(id){
      return this.playersDb.filter(player => player.id === id);
    }else{
      return this.playersDb;
    }
  }
  // create a player 
  create(obj){
    const record = {
      id: uuidv4(),
      name: obj.name,
      games: obj.games,
    };
    this.playersDb.push(record);
    return this.playersDb;
  }
  // update a player
  update(id, obj){
    for(let i=0; i<this.playersDb.length; i++){
      if(this.playersDb[i].id === id){
        this.playersDb[i].name = obj.name;
        this.playersDb[i].games = obj.games;
        return this.playersDb[i];
      }
    }
  }
  // delete a player
  delete(id){
    this.playersDb = this.playersDb.filter(player => player.id !== id);
    return 'player REMOVED';
  }
}

module.exports = Players;