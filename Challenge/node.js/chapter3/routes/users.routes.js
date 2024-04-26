const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/users.controllers');

usersRouter.get('/', usersController.getUsers);
usersRouter.post('/', usersController.postUser);
usersRouter.get('/:userId', usersController.getUser);

module.exports = usersRouter;
