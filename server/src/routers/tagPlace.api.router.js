const { createTagPlaceController } = require("../controllers/tagPlaceController");
const { verifyAccessToken } = require("../middlewares/verifyToken");


const tagPlaceRouter = require("express").Router();

tagPlaceRouter
.post("/", verifyAccessToken, createTagPlaceController)

module.exports = tagPlaceRouter;