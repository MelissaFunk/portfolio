import { useEffect, useState } from 'react'
import BlogCard from './BlogCard'

function Blogs() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch('/blogs')
      .then(res => res.json())
      .then(setBlogs)  
  }, [])

  function eachBlog() {
    return blogs.map(blog => 
        <BlogCard blog={blog} key={blog.id}/>
      )
  }

  return(
    <div className="blogs">
      <h1>BLOGS</h1>
      {eachBlog()}
    </div>
  )
}

export default Blogs