import http from "@/services/httpService";
import routerPush from "@/utils/routerPush";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";

const CommentForm = ({ postId, responseTo, setOnReply }) => {
  const [commentValue, setCommentValue] = useState("");
  const router = useRouter();
  const data = {
    content: commentValue,
    postId,
    responseTo,
  };
  const commentHandler = (e) => {
    e.preventDefault();
    http
      .post("/post-comment/save-comment", data)
      .then((res) => {
        setCommentValue("");
        if (setOnReply) setOnReply((open) => !open);
        toast.success(res.data.message);
        routerPush(router);
        console.log(res.data.message);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.massage);
      });
  };
  return (
    <form className="flex flex-col mt-3">
      <textarea
        value={commentValue}
        onChange={(e) => setCommentValue(e.target.value)}
        className="border border-gray-500 rounded-md p-2"
        placeholder="دیدگاه خود را یادداشت کنید..."
      />
      <button
        onClick={commentHandler}
        className="py-2 mr-0 mt-4 text-white bg-violet-600  sm:w-56 rounded-xl md:text-lg "
      >
        ارسال دیدگاه
      </button>
    </form>
  );
};

export default CommentForm;
