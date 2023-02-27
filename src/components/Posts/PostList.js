import {
  AdjustmentsVerticalIcon,
  BookmarkIcon,
  BookOpenIcon,
  ChatBubbleBottomCenterIcon,
  ChevronDownIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
const PostList = ({ blogsData }) => {
  return blogsData.docs.map((blog, index) => {
    return (
      <div
        key={blog._id}
        className=" col-span-6 md:col-span-3 lg:col-span-2  rounded-3xl p-2 flex flex-col"
      >
        {/* CoverImage */}
        <div className="aspect-w-16 aspect-h-9 mb-5">
          <img
            src={blog.coverImage}
            alt=""
            className="rounded-2xl w-full h-full object-center object-cover"
          />
        </div>
        {/* Blog Content */}
        <div className="bg-gray-50 p-2 rounded-2xl flex flex-col w-full justify-between flex-1">
          <h2 className="mb-4 font-bold">{blog.title}</h2>
          {/* Blog Detail */}
          <div className="">
            {/* Blog author-category */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img
                  src="/images/next.png"
                  alt="next"
                  className="w-6 h-6 rounded-full ring-2 ring-white ml-2"
                />
                <span className="text-sm">مهرنوش شریفی</span>
              </div>
              <span className="text-xs px-3 py-1 bg-blue-100 text-blue-500 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-blue-500 hover:text-blue-100">
                {blog.category.englishTitle}
              </span>
            </div>
            {/* Blog Interactions */}
            <div className="flex justify-between items-center">
              <div className="flex">
                <div className="flex items-cente bg-gray-200 ml-2 cursor-pointer rounded-sm">
                  <ChatBubbleBottomCenterIcon className="w-4 h-4 cursor-pointer stroke-gray-700 ml-2" />
                  <span className=" -mr-2 text-xs text-gray-500">{blog.commentsCount}</span>
                </div>
                <div className="flex items-cente bg-red-200 ml-2 cursor-pointer rounded-sm">
                  <HeartIcon className="w-4 h-4  stroke-red-400 ml-2" />
                  <span className=" -mr-2 text-xs text-red-500">{blog.likesCount}</span>
                </div>
                <div className="flex items-cente bg-blue-200 ml-2 cursor-pointer rounded-sm">
                  <BookmarkIcon className="w-4 h-4  stroke-blue-500 ml-2" />
                  <span className=" -mr-2 text-xs text-blue-500"></span>
                </div>
              </div>
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
