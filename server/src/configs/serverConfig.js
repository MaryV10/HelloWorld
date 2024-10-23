require('dotenv').config();
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const path = require('path');

const app = express();
const { PORT } = process.env;

const corsConfig = {
  origin: [process.env.CLIENT_URL],
  credentials: true,
};

const configureApp = () => {
  app.use(cors(corsConfig));
  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(
    '/images',
    express.static(path.join(__dirname, '../..', 'public', 'images'))
  );

  return app;
};

module.exports = {
  configureApp,
  PORT,
};
