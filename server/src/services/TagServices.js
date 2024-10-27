const {Tag} = require("../../db/models");

class TagService {
   static async getAllTags() {
        try {
            const tags = await Tag.findAll();
            return tags;
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = TagService