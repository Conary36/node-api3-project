const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const userRouter = require('./users/userRouter.js');
const postRouter = require('./posts/postRouter.js')
const server = express();

//global middleware
server.use(express.json());//built in middleware, no need to npm install
server.use(helmet());
server.use(morgan('dev'));//third-party middleware, needs to be installed
server.use(logger);
server.use('/api/users', userRouter);
server.use('/api/posts', postRouter);
//server.use(addName);

// server.get('/', addName, (req, res) => {
//   const nameInsert = (req.name) ? `${req.name}`: '';
//   res.send(`<h2>Let's write some middleware ${nameInsert}!</h2>`);
// });

// server.use(notFound);

// function notFound(req, res, next){
//     res.status(400)
//     .json({message: "Your Lost, Try again!"});
// }


//custom middleware
// function addName(req, res, next){
//   req.name = 'Webpt 11';
//   next();
// }
function logger(req, res, next) {
  //log information about the request to the console
  //console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url} ${req.get('Origin')}`)
  const method = req.method;
  const endpoint = req.originalUrl;
   console.log(`${method} to ${endpoint}`);
  next();//moves request to next middleware
}


module.exports = server;
