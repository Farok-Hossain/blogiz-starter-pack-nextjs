import { Blog } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-center text-3xl my-5">
        Latest Blogs From <span className=" text-accent">Blogiz</span>
      </h1>
      <p className="text-xl text-center text-gray-400 w-2/4 mx-auto">
        <i>
          UEFA Euro 2024: full football match schedule, start times, format and
          teams
        </i>
      </p>
      <div className="grid grid-cols-2 gap-4 my-5">
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard blog={blog} key={blog.id} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 my-5">
        {blogs.slice(2, 5).map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
