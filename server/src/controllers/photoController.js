const PhotoService = require("../services/PhotoServices");
const PlaceService = require("../services/PlaceServices");

async function uploadPhotoController(req, res) {
  console.log(req.body, 'body');
  const {  placeId} = req.params;
  const imageUrl = req.file ? req.file.filename : null;
  console.log(req.file,'============>>>>>');
  console.log(placeId,'-------------------');

  try {

    console.log(imageUrl, 'imageUrl');

     await PhotoService.uploadPhoto({imageUrl, placeId});

      const place = await PlaceService.getOnePlace(placeId);
       console.log(place.Photos , "111111111111");  
           res.status(201).json({ place });
    

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// работает удалить созданное пользователем место (может только он сам)
async function deletePhotoController(req, res) {
  const { id } = req.params;
  const userId = res.locals.user.id;
  try {
    const { isDeleted } = await PhotoService.deletePhoto(id, userId);
    const place = await PlaceService.getOnePlace(id);
    if (isDeleted) {
      res.status(200).json({ place });
    } else {
      res.status(400).json({ message: "Not found photo" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  uploadPhotoController,
  deletePhotoController,
};
