const express = require('express')
const {createPostValidator} = require('../validator')
const {getPosts, createPost} = require('../controllers/post')
const { requireSignin } = require('../controllers/auth')
const { userById, hasAuthorization } = require('../controllers/user')

const router = express.Router()

router.get('/', getPosts)
router.post('/post', requireSignin, createPostValidator, createPost)

router.param("userId", userById)


module.exports = router;