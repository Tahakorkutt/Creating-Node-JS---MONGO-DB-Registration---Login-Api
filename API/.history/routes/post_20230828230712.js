
const express = require('express')

const router = express.Router();

router.get('/getPosts', getPosts)
router.post('/createPosts', createPosts)

router.get('/getDetail/:id', getDetail)
router.get('/getUpdate/:id', getUpdate)
router.get('/deletePost/:id', deletePost)

module.exports = router