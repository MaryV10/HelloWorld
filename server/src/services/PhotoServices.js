const { Photo, Place} = require("../../db/models");

class PhotoService {

    
  

  static async uploadPhoto(data) {
    try {
      return await Photo.create(data) 
    } catch (error) {
      console.error(error);
    }
  }
  
  static async deletePhoto(id, userId) {
    try {
        const photo = await Photo.findOne({ 
            where: { id }, 
            include: { 
              model: Place, 
              where: { userId } 
            } 
          });
      if (!photo) {
        return { isDeleted: false, message: "Photo is not found" };
      }
      await photo.destroy();
      return { isDeleted: true, message: "Photo is deleted" };
    } catch (error) {
      console.error(error);
    }
  }

}

module.exports = PhotoService;
