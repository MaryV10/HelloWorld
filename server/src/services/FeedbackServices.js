const { Feedback } = require("../../db/models");

class FeedbackService {
  static async createFeedback(data) {
    try {
      
      const newFeedback = await Feedback.create(data);
      return newFeedback;
    } catch (error) {
      console.error(error);
    }
  }

  static async updateFeedback(id, userId, {
    score, comment
  }) {
    try {
      const feedback = await Feedback.findOne({
        where: { id, userId },
      });
      if (!feedback) {
        return { message: "feedback is not found" };
      }
      feedback.comment = comment;
      feedback.score = score;
      await feedback.save();

      return feedback.dataValues;
    } catch (error) {
      console.error(error);
    }
  }
  static async deleteFeedback(id, userId) {
    try {
      const feedback = await Feedback.findOne({
        where: { id, userId },
      });
      if (!feedback) {
        return { isDeleted: false, message: "feedback is not found" };
      }
      await feedback.destroy();
      return { isDeleted: true, message: "feedback is deleted" };
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = FeedbackService;
