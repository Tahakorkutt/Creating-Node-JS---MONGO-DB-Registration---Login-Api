
const express = require('express')

const router = express.Router();

router.get('/getPosts', getPosts)
router.get('/getPosts', createPosts)

router.get('/getDetail/:id', getDetail)
router.get('/getUpdate/:id', getUpdate)
router.get('/deletePost/:id', deletePost)

module.exports = router