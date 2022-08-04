
const Blog = require('../models/Blog');
// using mongoose to validate objectID for params
const mongoose = require('mongoose');

// blogs_get, blogs_post , blog_patch, blog_delete, blog_details_get

// All Blog Routes

//GET REQUEST Blog posts
const blogs_get = async(req, res) => {

     // gets all blogs from db & sorted by when it was created
    const blogs = await Blog.find({}).sort({createdAt: -1})
    res.status(200).json(blogs)
};

// POST REQUEST new post
const blogs_post = async(req, res) => {
    const { title, author, body } = req.body

    // add blog to db
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
};

// Single Blog Routes

// GET-BY-ID REQUEST single post details
const blog_get =  async(req, res) => {
    // retrieves params from url
    const { id } = req.params;
    
    //validates if URL param is a valid ObjectID
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Blog does not exist"})
    }
    
    //gets single blog from db based on id
    const blog = await Blog.findById(id);
    if(!blog){
        return res.status(404).json({error: "Blog does not exist"})
    }
    
    res.status(200).json(blog)     
};

// DELETE REQUEST single post
const blog_delete = async(req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "This blog does not exist"})
    }
    // sends delete request to db
    const blog = await Blog.findByIdAndDelete({_id: id})
    if(!blog){
        res.status(404).json({ error: "This blog does not exist"})
    }

    res.status(200).json(blog)
};

// PATCH single post
const blog_patch = async(req, res) => {
    const { id } = req.params;
     
     
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "This blog does not exist"})
    }
    const blog = await Blog.findByIdAndUpdate({_id: id}, {...req.body})

    if(!blog){
        res.status(404).json({ error: "This blog does not exist"})
    }

    res.status(200).json(blog)
}

module.exports= {
    blogs_get, 
    blog_get, 
    blogs_post, 
    blog_delete, 
    blog_patch
};
