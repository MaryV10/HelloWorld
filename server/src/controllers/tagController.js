const TagService = require("../services/TagServices");


async function getAllTagsController(req, res) {
    try {
        const tags = await TagService.getAllTags();
        res.status(200).json({ tags });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllTagsController
}