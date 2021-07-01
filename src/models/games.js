'use strict';
const uuid = require('uuid').v4;

class Games {
  constructor (){
    this.gamesDb = [];
  }
  // get a game by id or all games
  read(id){
    if(id){
      return this.gamesDb.find(game => game.id === id);
    }else{
      return this.gamesDb;
    }
  }
  // post a game to database
  create(obj){
    const record = {
      id: uuid(),
      name: obj.name,
      rate: obj.rate,
      genre: obj.genre,
    };
    this.gamesDb.push(record);
    return this.gamesDb;
  }
  // update a game in database
  update(id, obj){
    for(let i=0; i<this.gamesDb.length; i++){
      if(this.gamesDb[i].id === id){
        this.gamesDb[i].name = obj.name;
        this.gamesDb[i].rate = obj.rate;
        this.gamesDb[i].genre = obj.genre;
        return this.gamesDb[i];
      }
    }  
  }
  // delete a game from database
  delete(id){
    this.gamesDb = this.gamesDb.filter(record => record.id !== id);
    return 'object DELETED';
  }
}

module.exports = Games;