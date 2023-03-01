import { UserIcon } from "@heroicons/react/24/outline";
import { Suspense, useState } from "react";
import CommentForm from "./CommentForm";
const SingleComment = ({ comment }) => {
  const [onReply, setOnReply] = useState(false);
  const [replyValue, setReplyValue] = useState("");
  return (
    <div className="border border-gray-500 rounded p-2 md:p-4 m-1">
      <div className="flex gap-x-4 ">
        <UserIcon className="h-10 w-10" />
        <div className="flex flex-col justify-between">
          <span>{comment.writer?.name}</span>
          <time>
            <Suspense fallback={null}>
              {new Date(comment.createdAt).toLocaleDateString("fa-IR")}
            </Suspense>
          </time>
        </div>
      </div>
      <div>{comment.content}</div>
      <button
        className="text-xs bg-purple-500 rounded px-2 py-1 mt-2 mb-2 text-white"
        onClick={() => setOnReply(!onReply)}
      >
        {onReply ? "انصراف" : "پاسخ به"}
      </button>
      {onReply && (
        <div>
          <span className="text-sm text-gray-400">در حال پاسخ به {comment.writer?.name}</span>
          {/* <form className="flex flex-col mt-3">
            <textarea
              value={replyValue}
              onChange={(e) => setReplyValue(e.target.value)}
              className="border border-gray-500 rounded-md p-2"
              placeholder="پاسخ خود را یادداشت کنید..."
            />
            <button className="py-2 mr-0 mt-4 text-white bg-violet-600  sm:w-56 rounded-xl md:text-lg ">
              ارسال پاسخ
            </button>
          </form> */}
          <CommentForm comment={replyValue} setComment={setReplyValue}/>
        </div>
      )}
    </div>
  );
};

export default SingleComment;
