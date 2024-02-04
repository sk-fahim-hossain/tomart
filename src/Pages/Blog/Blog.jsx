import { useLoaderData } from "react-router-dom";

const Blog = () => {
  const blogs = useLoaderData();
  console.log(blogs);
  return (
    <div>
      {blogs.map((blog, index) => (
        <div
          id={index + 1}
          key={blog.img}
          className="card w-full bg-gray-200 text-black shadow-xl mb-6"
        >
          <figure>
            <img src={blog?.img} className="min-w-[600px] mt-3" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl mx-auto">{blog?.title}</h2>
            <div className="divider w-1/2 mx-auto"></div>
            <p className="my-3 text-left">{blog.shortDescription}</p>
            <p className="my-2 text-left">{blog.description}</p>
            <div className="card-actions justify-start">
              <div>
                <p className="text-xs">Category:</p>
              </div>
              <div className="badge badge-outline text-xs">IT</div>
              <div className="badge badge-outline text-xs">Technology</div>
            </div>
            <div className="card-actions justify-start">
              <div>
                <p className="text-xs">Tags:</p>
              </div>
              <div className="badge badge-outline text-xs">IT</div>
              <div className="badge badge-outline text-xs">code</div>
              <div className="badge badge-outline text-xs">Technology</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
