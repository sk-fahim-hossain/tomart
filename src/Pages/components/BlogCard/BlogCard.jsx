import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const BlogCard = ({ blog, index }) => {
  return (
    <div className="card bg-white shadow-xl h-[485px]">
      <figure>
        <img src={blog?.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="font-semibold text-lg text-left ">{blog.title}</h2>

        <p className="text-left flex-1">{blog.shortDescription}...</p>
        <div className="card-actions justify-between">
          <div>
            <div className="badge badge-outline">blog</div>
            <div className="badge badge-outline">IT</div>
          </div>
          <Link to={`/blog#${index + 1}`}>
            <button className="btn text-black bg-[#FF217F] border-0 btn-sm hover:text-white">
              Read More..
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
