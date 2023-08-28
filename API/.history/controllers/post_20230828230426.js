const PostSchema = require('../models/post.js');

const createPost = async (req, res) => {
    try {
        const newPost = await PostSchema.create(req.body);
        res.status(201).json(newPost);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createPost
};
