const express= require('express');

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
router.post('/', (req, res) => {
    res.json({mssg: "Post a new Blog..."})
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