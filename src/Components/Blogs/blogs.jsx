import { useEffect, useState } from "react"
import Blog from "/src/Components/Blog/blog"
const Blogs = ({handleBookmark,handlereadingTime}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('public/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="">
            {
                blogs.map(blog=>  <Blog
                     blog={blog}
                     key={blog.id}
                     handleBookmark={handleBookmark}
                     handlereadingTime={handlereadingTime}
                     >
                      
                     </Blog>)
            }
            
        </div>
    )
}

export default Blogs