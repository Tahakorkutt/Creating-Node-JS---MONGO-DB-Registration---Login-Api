
const PostSchema = require('..models/post.js')

const getPosts = (req,res) =>{

    try {
        const newPost = await PostSchema.create(req.body)
        res.status(201).json(newPost)
        
    } catch (error) {
        
        
    }

}