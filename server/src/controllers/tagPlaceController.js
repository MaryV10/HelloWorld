const TagPlaceService = require("../services/TagPlaceService");

async function createTagPlaceController(req, res) {
    const { tagId, placeId } = req.body;
    
    try {
        const tagPlace = await TagPlaceService.createTagPlace({ tagId, placeId });
        res.status(201).json({ tagPlace });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createTagPlaceController
}