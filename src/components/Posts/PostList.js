
import Link from "next/link";
import PostInteractions from "./PostInteractions";
const PostList = ({ blogsData }) => {
  return blogsData.docs.map((blog) => {
    return (
      <div
        key={blog._id}
        className=" col-span-6 md:col-span-3 lg:col-span-2  rounded-3xl p-2 flex flex-col max-h-[320px]"
      >
        {/* CoverImage */}
        <div className="aspect-w-16 aspect-h-9 mb-5">
          <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
            <img
              src={blog.coverImage}
              alt=""
              className="rounded-2xl w-full h-full object-center object-cover"
            />
          </Link>
        </div>
        {/* Blog Content */}
        <div className="bg-gray-50 p-2 rounded-2xl flex flex-col w-full justify-between flex-1">
          <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
            <h2 className="mb-4 font-bold">{blog.title}</h2>
          </Link>

          {/* Blog Detail */}
          <div className="">
            {/* Blog author-category */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img
                  src="/images/me.jpg"
                  alt="next"
                  className="w-5 h-6 rounded-full ring-2 ring-white ml-2"
                />
                <span className="text-xs">مهرنوش شریفی</span>
              </div>
              <Link
                href={`/blogs/${blog.category.englishTitle}`}
                className=" whitespace-nowrap text-xs px-3 py-1 bg-blue-100 text-blue-500 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-blue-500 hover:text-blue-100"
              >
                {blog.category.englishTitle}
              </Link>
            </div>
            {/* Blog Interactions */}
            <div className="flex justify-between items-center">
              <PostInteractions blog={blog}  />
              <span className="text-[10px] text-gray-400">
                زمان مطالعه : {blog.readingTime} دقیقه
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default PostList;
