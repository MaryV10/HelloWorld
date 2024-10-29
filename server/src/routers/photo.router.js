const { uploadPhotoController, deletePhotoController } = require('../controllers/photoController');
const { verifyAccessToken } = require('../middlewares/verifyToken');
const { uploadPhoto } = require('../services/PhotoServices');


const photoRouter = require('express').Router();

photoRouter

.post("/",  verifyAccessToken, uploadPhotoController)

.delete("/:id",  verifyAccessToken,deletePhotoController);

module.exports = photoRouter;
