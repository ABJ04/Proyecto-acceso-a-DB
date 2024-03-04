const express = require('express');
const { posts, createPosts } = require('../controllers/postControllers.js');

const router = express.Router();

router.get('/', posts);
router.post('/', createPosts);

module.exports = router;
