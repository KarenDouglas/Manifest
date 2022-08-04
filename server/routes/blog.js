const express= require('express');

const {blogs_get, blog_get, blogs_post, blog_delete, blog_patch} =  require('../controllers/blogControllers');



const router = express.Router();

//Get all Blogs
router.get('/', blogs_get);

//GET single blog
router.get('/:id',blog_get);

//POST  a new Blog
router.post('/', blogs_post);

// Delete a Blog
router.delete('/:id', blog_delete);

// Edit a Blog
router.patch('/:id', blog_patch);
module.exports = router;