import React from "react";

const BlogDetails = ({blog}) => {

    return(

        <div className="blog-details container flex-row">
            <div className=" bg-dark container">
            <img src={require('../journal.jpg')} alt="" />
            <h2 className="blog-title text-white font-cursive-bold">{blog.title}</h2>
            <p className="text-accent-green font-serif-light"><em>{blog.author}</em></p>
            </div>
            
            <div className="bg-dark container">
            <p className="text-white ">{blog.body}</p>
            <p className="text-accent-peach font-serif-light">{blog.createdAt}</p>
            </div>
            
         
        </div>
        
    )

}

export default BlogDetails;