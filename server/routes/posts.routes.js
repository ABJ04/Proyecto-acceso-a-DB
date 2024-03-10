const express = require('express');
const { posts, createPosts, updatePostLikes, deletePost } = require('../controllers/postControllers.js');

const router = express.Router();

router.get('/', posts);
router.post('/', createPosts);
router.put('/like/:id', updatePostLikes);
router.delete('/:id', deletePost);

module.exports = router;
