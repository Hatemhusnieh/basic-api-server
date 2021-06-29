'use strict';
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const gamesRouter = require('./routes/gamesRoutes');
const playersRouter = require('./routes/playersRoutes');
const notFoundHandler = require('./error-handlers/404');
const errHandler = require('./error-handlers/500');

app.use(express.json());
app.use(cors());
app.use(morgan('combined'));
app.use('/api/v1/games', gamesRouter);
app.use('/api/v1/players', playersRouter);

app.get('/', (req, res)=>{
  res.status(200).send('He that fights and runs away, May turn and fight another day; But he that is in battle slain, Will never rise to fight again. "Tacitus"---> RUN B****!!');
});

app.use('*', notFoundHandler);
app.use(errHandler);

module.exports = {
  app,
  start: port => {
    app.listen(port, ()=>console.log(`server starts at ${port}`));
  },
};