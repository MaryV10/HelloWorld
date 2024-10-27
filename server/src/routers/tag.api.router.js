const { getAllTagsController } = require('../controllers/tagController');


const tagRouter = require('express').Router();

tagRouter
.get("/", getAllTagsController)

module.exports = tagRouter