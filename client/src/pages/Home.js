import React, {  useEffect } from "react";
import { useBlogsContext } from "../hooks/useBlogsContext";


//components
import BlogDetails from '../components/BlogDetails';


// function to render Home Page
const Home = () => {
   const {blogs, dispatch} = useBlogsContext()

   const fetchBlogsData = async() => {

        // FOR DEV ONLYto be able to run client and server from diff port # I need to add to package.json : "proxy": "http://localhost:4000" 
        const response = await fetch("https://manifest-backend.herokuapp.com/api/blog" );

        const json = await response.json()
        // check if response is successful
        if(response.ok){
           await dispatch({type: 'SET_BLOGS', payload: json})
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

        <div className="home bg-darkp">
            <div className="content">
                <h1 className="content-title text-beige container font-cursive-bold">Blog</h1>
                <div className="container flex-column flow" >
                    {blogs && blogs.map((blog)=>(
                        <BlogDetails
                        key={blog._id}
                        blog={blog}
                        />
                    ))}
                </div>
            </div>
                </div>
       
    )
}

// Make Home available to import
export default Home;