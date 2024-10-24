const { getAllApprovedPlacesController, getOnePlaceController, createPlaceController, approvePlaceController, rejectPlaceController } = require('../controllers/placeController');
const { verifyAccessToken } = require('../middlewares/verifyToken');


const placeRouter = require('express').Router();

placeRouter
.get("/:id",  getOnePlaceController)
.get("/", getAllApprovedPlacesController)

.post("/",  createPlaceController)
.put("/approve/:id",  approvePlaceController)
.put("/reject/:id",  rejectPlaceController);

module.exports = placeRouter;
