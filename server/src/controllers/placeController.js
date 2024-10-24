const PlaceService = require("../services/PlaceServices");

 // работает параметризированный запрос для OnePlacePage (только со статусом "approved")
async function getOnePlaceController(req, res) {
  const { id } = req.params;

  try {
    const place = await PlaceService.getOnePlace(id);
    res.status(200).json({ place });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
//работает вывести все места которые есть в базе со статусом "approved" (для общей карты)
async function getAllApprovedPlacesController(req, res) {
  try {
    const places = await PlaceService.getAllApprovedPlaces();
    res.status(200).json({ places });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
//работает вывести все места которые есть в базе со статусом "pending" (для админки)
async function getAllPendingPlacesController(req, res) {
  try {
    const places = await PlaceService.getAllPendingPlaces();
    res.status(200).json({ places });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
  // работает создание одного места на общей карте
async function createPlaceController(req, res) {
  const { title, description, longitude, width } = req.body;
  const { user } = res.locals;
  try {
    if (title.trim() === "" || description.trim() === "") {
      res.status(400).json({
        error: "Заполните данные",
      });
    } else {
      const place = await PlaceService.createTwitter({
        title,
        description,
        userId: user.id,
        longitude, 
        width
      });
      res.status(201).json({ place });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
  //работает одобрить заявку на добавление нового места
async function approvePlaceController(req, res) {
  try {
    const place = await PlaceService.approvePlace();
    res.status(200).json({ place });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
  // работает отклонить заявку на добавление нового места
async function rejectPlaceController(req, res) {
  try {
    const place = await PlaceService.rejectPlace();
    res.status(200).json({ place });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getOnePlaceController,
  getAllApprovedPlacesController,
  getAllPendingPlacesController,
  createPlaceController,
  approvePlaceController,
  rejectPlaceController
};
