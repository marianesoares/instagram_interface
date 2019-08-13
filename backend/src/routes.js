const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store); //o post sempre vai chamar o metodo store dentro do controller

routes.post('/posts/:id/like', LikeController.store);

module.exports = routes; 