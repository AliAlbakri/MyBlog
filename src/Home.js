import { useState,useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";



const Home = () => {

    const {data:blogs ,isFetching} = useFetch('http://localhost:8000/blogs')
    
    return ( 
        <div className="home">
            {isFetching && <div>Loading blogs ...</div>}
            {blogs && <BlogList blogs={blogs} title="My Blogs!" />}
        </div>
     );
}
 
export default Home;