function BlogCard({ blog }) {

  return(
    <div className="blog-card">
      <img className="blog-img" src={blog.image} alt={blog.title}/>
      <h2><a href={blog.link} target="_blank" rel="noreferrer">{blog.title}</a></h2>
      <p className="blog-card-details">{blog.date} | {blog.minutes} min. read</p>
    </div>
  )
}

export default BlogCard