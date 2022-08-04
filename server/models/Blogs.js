const mongoose = require('mongoose');

// create schema

const {Schema } = mongoose

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    body:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

// create model
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;