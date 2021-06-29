'use strict';
module.exports = (req, res, next) => {
  if(req.body.name && req.body.games){
    next();
  }else{
    next('Missing request data');
  }
};