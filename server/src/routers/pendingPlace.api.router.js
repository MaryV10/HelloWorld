const {  getAllPendingPlacesController } = require('../controllers/placeController');
const { verifyAccessToken } = require('../middlewares/verifyToken');


const placeRouter = require('express').Router();

placeRouter


.get("/", getAllPendingPlacesController)


module.exports = placeRouter;
