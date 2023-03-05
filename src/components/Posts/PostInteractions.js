import http from "@/services/httpService";
import routerPush from "@/utils/routerPush";
import {
  BookmarkIcon,
  ChatBubbleBottomCenterIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { BookmarkIcon as SolidBookmarkIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

const PostInteractions = ({ blog }) => {
  const router = useRouter();
  const likeHandler = (blogId) => {
    http
      .put(`/posts/like/${blogId}`)
      .then((res) => {
        // router.push({
        //   pathname : router.pathname,
        //   query : router.query,
        // } , undefined , {scroll:false});
        routerPush(router);
        toast.success(res.data.message);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      });
  };
  const bookmarkHandler = (blogId) => {
    http
      .put(`/posts/bookmark/${blogId}`)
      .then((res) => {
        routerPush(router);
        toast.success(res.data.message);
      })
      .catch((error) => {toast.error(error?.response?.data?.message)});
  };
  return (
    <div className="flex gap-x-1">
      <div className="flex items-cente bg-gray-200 ml-2 cursor-pointer rounded-sm">
        <ChatBubbleBottomCenterIcon className="w-4 h-4 cursor-pointer stroke-gray-700 ml-2" />
        <span className=" -mr-2 text-xs text-gray-500">
          {blog.commentsCount}
        </span>
      </div>
      <div
        onClick={() => likeHandler(blog._id)}
        className="flex items-cente bg-red-200 text-red-500 hover:bg-red-500 hover:text-red-100 ml-2 cursor-pointer rounded-sm"
      >
        {blog.isLiked ? (
          <SolidHeartIcon className="w-4 h-4  fill-current ml-2" />
        ) : (
          <HeartIcon className="w-4 h-4  stroke-current ml-2" />
        )}
        <span className=" -mr-2 text-xs text-current">{blog.likesCount}</span>
      </div>
      <div
        onClick={() => bookmarkHandler(blog._id)}
        className="flex items-cente bg-blue-200 text-blue-500  hover:bg-blue-500 hover:text-blue-100 ml-2 cursor-pointer rounded-sm"
      >
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
