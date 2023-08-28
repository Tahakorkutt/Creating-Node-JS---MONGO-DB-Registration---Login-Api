const PostSchema = require('../models/post.js');

const createPosts = async (req, res) => {
    try {
        const newPost = await PostSchema.create(req.body);
        res.status(201).json(newPost);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
const getPosts = async (req, res) => {
    try {
        const getPost = await PostSchema.find();
        res.status(200).json(newPost);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
const getDetail = async (req, res) => {
    try {
        const newPost = await PostSchema.create(req.body);
        res.status(201).json(newPost);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
const getUpdate = async (req, res) => {
    try {
        const newPost = await PostSchema.create(req.body);
        res.status(201).json(newPost);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
const deletePost = async (req, res) => {
    try {
        const newPost = await PostSchema.create(req.body);
        res.status(201).json(newPost);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


