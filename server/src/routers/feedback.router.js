const { createFeedbackController, updateFeedbackController, deleteFeedbackController } = require('../controllers/feedbackController');

const { verifyAccessToken } = require('../middlewares/verifyToken');


const feedbackRouter = require('express').Router();

feedbackRouter

.post("/",   verifyAccessToken, createFeedbackController)
.put("/:id",  verifyAccessToken, updateFeedbackController)
.delete("/:id",  verifyAccessToken,deleteFeedbackController)

module.exports = feedbackRouter;
