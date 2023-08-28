
const express = require('express')
const { getPosts, createPosts, getDetail }

const router = express.Router();

router.get('/getPosts', getPosts)
router.post('/createPosts', createPosts)

router.get('/getDetail/:id', getDetail)
router.patch('/getUpdate/:id', getUpdate)
router.delete('/deletePost/:id', deletePost)

module.exports = router