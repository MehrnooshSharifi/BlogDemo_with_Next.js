import {
  BookmarkIcon,
  ChatBubbleBottomCenterIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import {HeartIcon as SolidHeartIcon}from "@heroicons/react/24/solid";
import { BookmarkIcon as SolidBookmarkIcon } from "@heroicons/react/24/solid";
const PostInteractions = ({blog}) => {
  return (
    <div className="flex gap-x-1">
      <div className="flex items-cente bg-gray-200 ml-2 cursor-pointer rounded-sm">
        <ChatBubbleBottomCenterIcon className="w-4 h-4 cursor-pointer stroke-gray-700 ml-2" />
        <span className=" -mr-2 text-xs text-gray-500">
          {blog.commentsCount}
        </span>
      </div>
      <div className="flex items-cente bg-red-200 text-red-500 hover:bg-red-500 hover:text-red-100 ml-2 cursor-pointer rounded-sm">
        {blog.isLiked? <SolidHeartIcon className="w-4 h-4  fill-current ml-2"/> : <HeartIcon className="w-4 h-4  stroke-current ml-2" />}
        <span className=" -mr-2 text-xs text-current">{blog.likesCount}</span>
      </div>
      <div className="flex items-cente bg-blue-200 text-blue-500  hover:bg-blue-500 hover:text-blue-100 ml-2 cursor-pointer rounded-sm">
        {blog.isBookmarked ? (
          <SolidBookmarkIcon className="w-4 h-4  fill-current ml-2" />
        ) : (
          <BookmarkIcon className="w-4 h-4  stroke-current ml-2" />
        )}
        <span className=" -mr-2 text-xs text-blue-500"></span>
      </div>
    </div>
  );
};

export default PostInteractions;
