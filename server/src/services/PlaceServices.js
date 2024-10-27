const { Place, Tag, Photo, Feedback } = require("../../db/models");

class PlaceService {
  // параметризированный запрос для OnePlacePage (только со статусом "approved")
  static async getOnePlace(id) {
    try {
      const place = await Place.findOne({
        where: { id, status: "approved" },
        include: [
          {model: Tag, as: "tags", through: { attributes: [] }  },
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
          { model: Tag, as: "tags", through: { attributes: [] } },
          { model: Feedback },
          { model: Photo },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  }

    //вывести все места по userId
    static async getAllMyPlaces(userId) {  
      try {  
        return await Place.findAll({  
          where: { userId },  
          include: [  
            { model: Tag, as: "tags", through: { attributes: [] } },  
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
          { model: Tag, as: "tags", through: { attributes: [] }  },
          { model: Feedback },
          { model: Photo },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  }
  // //создание одного места на общей карте
  static async createPlace({ title, description, longitude, width, userId }) {
    try {
      
      const newPlace = await Place.create({ title, description, longitude, width, userId, status: "pending" });
      const placeWithRelations = await Place.findOne({
        where: { id: newPlace.id },
        include: [
          { model: Tag, as: "tags", through: { attributes: [] } },
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
  static async approvePlace(id, userId) {
    try {
      const place = await Place.findOne({
        where: { id, userId, status: "pending" },
        include: [
          { model: Tag, as: "tags", through: { attributes: [] }  },
          { model: Feedback },
          { model: Photo },
        ],
      });
      if (place && userId===1) {
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
  static async rejectPlace(id, userId) {
    try {
      const place = await Place.findOne({
        where: { id, userId:1, status: "pending" },
        include: [
          { model: Tag, as: "tags", through: { attributes: [] }  },
          { model: Feedback },
          { model: Photo },
        ],
      });
      if (place && userId===1) {
        place.status = "rejected";
        await place.save();
        return place;
      }
      return null;
    } catch (error) {
      console.error(error);
    }
  }
   //удалить место 
  static async deletePlace(id, userId) {
    try {
      const place = await Place.findOne({ where: { id, userId} });
      if (!place) {
        return { isDeleted: false, message: "Place is not found" };
      }
      await place.destroy();
      return { isDeleted: true, message: "Place is deleted" };
    } catch (error) {
      console.error(error);
    }
  }

  // обновление
  static async updatePlace(id, userId, {title,description, width, longitude}) {
    try {
      const place = await Place.findOne({
        where: { id, userId },
        include: [
          { model: Tag, as: "tags", through: { attributes: [] }  },
          { model: Feedback },
          { model: Photo },
        ],
      });
      if (!place) {
        return { message: "Place is not found" };
      }
      place.title = title;
      place.description = description;
      place.width = width;
      place.longitude = longitude;
      await place.save();
     
      // console.log(plainUser, '222222222222222222');
      return { place };

  
    } catch (error) {
      return error;
    }
  }
}

module.exports = PlaceService;
