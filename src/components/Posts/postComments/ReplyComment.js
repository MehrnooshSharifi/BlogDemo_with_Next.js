import SingleComment from "./SingleComment";

const ReplyComment = ({ parentCommentId, comments , postId }) => {
  return comments.map((comment, index) => {
    return (
      parentCommentId === comment.responseTo && (
        <div className="mr-5">
          <SingleComment comment={comment} postId={postId} />
          <ReplyComment
            comments={comments}
            parentCommentId={comment._id}
            postId={postId}
          />
        </div>
      )
    );
  });
};

export default ReplyComment;
