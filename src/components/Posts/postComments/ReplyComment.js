import SingleComment from "./SingleComment";

const ReplyComment = ({ parentCommentId, comments }) => {
  return comments.map((comment, index) => {
    return (
      parentCommentId === comment.responseTo && (
        <div className="mr-5">
          <SingleComment comment={comment} />
          <ReplyComment
            comments={comments}
            parentCommentId={comment._id}
          />
        </div>
      )
    );
  });
};

export default ReplyComment;
