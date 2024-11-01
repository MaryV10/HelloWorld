const { getAllApprovedPlacesController, getOnePlaceController, createPlaceController, approvePlaceController, rejectPlaceController, getAllPendingPlacesController, deletePlaceController, updatePlaceController, getAllMyPlacesController } = require('../controllers/placeController');
const { verifyAccessToken } = require('../middlewares/verifyToken');


const placeRouter = require('express').Router();

placeRouter
.get("/",   getAllApprovedPlacesController)

.get("/pending", verifyAccessToken, getAllPendingPlacesController)
.post("/",  verifyAccessToken, createPlaceController)
.get("/my",  verifyAccessToken, getAllMyPlacesController)
.get("/:id",  verifyAccessToken, getOnePlaceController)
.put("/approve/:id", verifyAccessToken, approvePlaceController)
.put("/reject/:id",  verifyAccessToken, rejectPlaceController)
.put("/:id",  verifyAccessToken, updatePlaceController)
.delete("/:id",  verifyAccessToken,deletePlaceController);

module.exports = placeRouter;
