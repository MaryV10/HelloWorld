const { getAllApprovedPlacesController, getOnePlaceController, createPlaceController, approvePlaceController, rejectPlaceController, getAllPendingPlacesController, deletePlaceController, updatePlaceController } = require('../controllers/placeController');
const { verifyAccessToken } = require('../middlewares/verifyToken');


const placeRouter = require('express').Router();

placeRouter
.get("/", getAllApprovedPlacesController)
.get("/pending", getAllPendingPlacesController)
.post("/",  createPlaceController)
.get("/:id",  getOnePlaceController)
.put("/approve/:id",  approvePlaceController)
.put("/reject/:id",  rejectPlaceController)
.put("/:id",  updatePlaceController)
.delete("/:id",  deletePlaceController);

module.exports = placeRouter;
