import {useState } from "react";
import CommentForm from "./CommentForm";
import ReplyComment from "./ReplyComment";
import SingleComment from "./SingleComment";

const PostComments = ({ post }) => {
  return (
    <div className="">
      <h2 className="mt-8 mb-8 text-lg font-bold">نظرات</h2>
      {post.comments.map((comment) => {
        return (
          !comment.responseTo &&
          comment.status === 2 && (
            <div key={comment._id}>
              <SingleComment comment={comment} postId={post._id} />
              <ReplyComment comments={post.comments} parentCommentId={comment._id} postId={post._id}/>
            </div>
          )
        );
      })}
      {/* Base Comment Form */}
      <div className="mt-8">
        <span className="mb-3">ارسال دیدگاه جدید</span>
        {/* <form className="flex flex-col mt-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border border-gray-500 rounded-md p-2"
            placeholder="نظر خود را یادداشت کنید..."
          />
          <button className="py-2 mr-0 mt-4 text-white bg-violet-600  sm:w-56 rounded-xl md:text-lg">
            ارسال نظر
          </button>
        </form> */}
        <CommentForm  postId={post._id} responseTo={null}/>
      </div>
    </div>
  );
};

export default PostComments;
