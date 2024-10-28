const FeedbackService = require("../services/FeedbackServices");
const PlaceService = require("../services/PlaceServices");


async function createFeedbackController(req, res) {
  const { score, comment, placeId } = req.body;

  const {user} = res.locals;

  
  
  try {
    
    if ( comment.trim() === "") {
      res.status(400).json({
        error: "Заполните данные",
      });
    } else {
      
     const yyyy = await FeedbackService.createFeedback({score, comment, placeId, userId: user.id});
// console.log(yyyy,';;;;;;;;')

      const place = await PlaceService.getOnePlace(placeId);
  
      res.status(201).json({ place });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
async function updateFeedbackController(req, res) {
  const { id } = req.params;

  const { score, comment, placeId } = req.body;

  const { user } = res.locals;

  try {
    if ( comment.trim() === "") {
      res.status(400).json({
        message: "Not update",
      });
    } else {
      // console.log(score, comment, placeId, "score, comment, placeId");
      const newFeedback=await FeedbackService.updateFeedback(id, user.id, {
        score, comment
      });
console.log(newFeedback, "newFeedback")
      const place = await PlaceService.getOnePlace(placeId);
      // console.log(place,';;;;;;;;')
      res.status(200).json({ place });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


async function deleteFeedbackController(req, res) {
  const { id } = req.params;
  const userId = res.locals.user.id;
  try {
    console.log(id, userId, "---------------------")
    const { isDeleted } = await FeedbackService.deleteFeedback(id, userId);
    const place = await PlaceService.getOnePlace(id);
    if (isDeleted) {
      res.status(200).json({ place });
    } else {
      res.status(400).json({ message: "Not found feedback" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


module.exports = {
createFeedbackController,
updateFeedbackController,
deleteFeedbackController
};
