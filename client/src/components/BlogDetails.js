import React from "react";

const BlogDetails = ({blog}) => {

    return(

        <div className="blog-details">
            <h2 className="blog-title">{blog.title}</h2>
            <p><em>{blog.author}</em></p>
            <p>{blog.body}</p>
            <p>{blog.createdAt}</p>
         
        </div>
        
    )

}

export default BlogDetails;