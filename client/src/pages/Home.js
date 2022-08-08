import React, { useState, useEffect } from "react";


//components
import BlogDetails from "../components/BlogDetails";


// function to render Home Page
const Home = () => {
    const [blogs, setBlogs] = useState(null)

   const fetchBlogsData = async() => {

        // FOR DEV ONLYto be able to run client and server from diff port # I need to add to package.json : "proxy": "http://localhost:4000" 
        const response = await fetch("/api/blog/" );

        const json = await response.json()
        // check if response is successful
        if(response.ok){
            setBlogs(json)
        }
    }
    
    useEffect(() => {
        fetchBlogsData();
     // the [] ensures that this useeffect function is only call once when it first fires   
    }, []);

    if (!blogs) {
    return "No blogs to show for now :(";
    }  

    return (
        <div className="home">
            <div className="blogs">
                {blogs && blogs.map((blog) =>(
                   <BlogDetails
                   key={blog._id}
                   blog={blog}
                   />
                ))}
            </div>
        </div>
       
    )
}

// Make Home available to import
export default Home;