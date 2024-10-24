const { Place, Tag, Photo, Feedback } = require("../../db/models");

class PlaceService {
  // параметризированный запрос для OnePlacePage (только со статусом "approved")
  static async getOnePlace(id) {
    try {
      const place = await Place.findOne({
        where: { id, status: "approved" },
        include: [
          { model: Tag, as: "tags" },
          { model: Feedback },
          { model: Photo },
        ],
      });
      return place;
    } catch (error) {
      console.error(error);
    }
  }
  //вывести все места которые есть в базе со статусом "approved" (для общей карты)
  static async getAllApprovedPlaces() {
    try {
      return await Place.findAll({
        where: { status: "approved" },
        include: [
          { model: Tag, as: "tags" },
          { model: Feedback },
          { model: Photo },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  }
  //вывести все места которые есть в базе со статусом "pending" (для админки)
  static async getAllPendingPlaces() {
    try {
      return await Place.findAll({
        where: { status: "pending" },
        include: [
          { model: Tag, as: "tags" },
          { model: Feedback },
          { model: Photo },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  }
  //создание одного места на общей карте
  static async createPlace({ title, description, userId }) {
    try {
      const newPlace = await Place.create({ title, description, userId, status: "pending" });
      const placeWithRelations = await Place.findOne({
        where: { id: newPlace.id },
        include: [
          { model: Tag, as: "tags" },
          { model: Feedback },
          { model: Photo },
        ],
      });
      return placeWithRelations;
    } catch (error) {
      console.error(error);
    }
  }
  //одобрить заявку на добавление нового места
  static async approvePlace() {
    try {
      const place = await Place.findOne({
        where: { userId:1, status: "pending" },
        include: [
          { model: Tag, as: "tags" },
          { model: Feedback },
          { model: Photo },
        ],
      });
      if (place) {
        place.status = "approved";
        await place.save();
        return place;
      }
      return null;
    } catch (error) {
      console.error(error);
    }
  }
  //отклонить заявку на добавление нового места
  static async rejectPlace() {
    try {
      const place = await Place.findOne({
        where: { userId:1, status: "pending" },
        include: [
          { model: Tag, as: "tags" },
          { model: Feedback },
          { model: Photo },
        ],
      });
      if (place) {
        place.status = "rejected";
        await place.save();
        return place;
      }
      return null;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = PlaceService;
