const { TagPlace } = require("../../db/models");

class TagPlaceService {

    static async createTagPlace({ tagId, placeId }) {
        try {
           const tagPlace = await TagPlace.create({ tagId, placeId });
            return tagPlace;
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = TagPlaceService;