import { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";

const BlogCardGroup = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [setBlogs]);
  return (
    <div id="blogs" className="bg-gray-100 rounded-lg p-4">
      <p className="text-3xl text-left text-slate-800 mb-4">Blogs</p>
      <hr className="border-black" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-6">
        {blogs.map((blog, index) => (
          <BlogCard key={blog.title} index={index} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default BlogCardGroup;
