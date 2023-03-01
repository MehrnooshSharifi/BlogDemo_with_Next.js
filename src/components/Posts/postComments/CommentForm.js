const CommentForm = ({comment , setComment}) => {
  return (
    <form className="flex flex-col mt-3">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="border border-gray-500 rounded-md p-2"
        placeholder="دیدگاه خود را یادداشت کنید..."
      />
      <button className="py-2 mr-0 mt-4 text-white bg-violet-600  sm:w-56 rounded-xl md:text-lg ">
        ارسال دیدگاه
      </button>
    </form>
  );
};

export default CommentForm;
