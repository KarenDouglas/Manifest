const express= require('express');
const Blog = require('../models/Blog')

const router = express.Router();

//Get all Blogs
router.get('/', (req, res) => {
    res.json({mssg: "Get all Blogs..."})
});

//GET single blog
router.get('/:id', (req, res) => {
    res.json({mssg: "Get single Blog..."})
});

//POST  a new Blog
router.post('/', async(req, res) => {
    const { title, author, body } = req.body
     try{
        // the blog constant stores the response and becomes the new doc
        const blog = await Blog.create({
            title,
            author,
            body,
        })
         res.status(200).json(blog)

     }catch(error){
        // send status codes for more info
        res.status(400).json({error: error.message})
     }
    
    

});

// Delete a Blog
router.delete('/:id', (req, res) => {
    res.json({mssg: "delete a Blog..."})
});

// Edit a Blog
router.patch('/:id', (req, res) => {
    res.json({mssg: "editing a Blog..."})
});
module.exports = router;