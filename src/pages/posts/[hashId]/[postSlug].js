import axios from "axios";
import { BookmarkIcon, ShareIcon } from "@heroicons/react/24/outline";
import PostInteractions from "@/components/Posts/PostInteractions";
const PostPage = ({ post }) => {
  console.log(post);
  return (
    <div className=" bg-gray-50 min-h-screen">
      <div className="max-w-screen-lg container mx-auto px-6 md:px-0">
        <header className="flex flex-col items-center md:flex-row md:justify-evenly md:items-center mb-10">
          <div className="flex justify-between items-center">
            <div className="ml-4">
              <img src="/images/me.jpg" className="w-16 h-16 rounded-full" />
            </div>
            <div className="flex flex-col">
              <p>مهرنوش شریفی</p>
              <p>Front-End Developer</p>
              <span>
                {new Date(post.createdAt).toLocaleDateString("fa-IR")}. خواندن{" "}
                {post.readingTime} دقیقه
              </span>
            </div>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <ShareIcon className="w-5 h-5 ml-3 cursor-pointer" />
            <div className="flex border border-1 rounded-2xl px-3 py-1 cursor-pointer">
              <BookmarkIcon className="w-5 h-5" />
              <span>ذخیره</span>
            </div>
          </div>
        </header>
        <main className="prose prose-sm md:prose-base prose-h2:text-purple-800 prose-h1:text-purple-900 md:prose-h1:text-3xl md:prose-h1:font-black md:prose-h2:text-2xl mb-8">
          <h1>{post.title}</h1>
          <h2>عنوان تستی اول</h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
          <img
            src={post.coverImage}
            alt={post.slug}
            className="w-full h-full"
          />
          <h2>عنوان تستی دوم</h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
        </main>
        {/* post tags like-Bookmark */}
        <section>
          <ul className="flex items-center flex-wrap gap-x-4">
            {["فرانت اند", "جاوا اسکریپت", "ریکت", "نکست"].map((tag, index) => {
              return (
                <li className="px-3 py-1 rounded-2xl bg-gray-200 hover:bg-gray-100 transition-all duration-300 cursor-pointer text-gray-600 text-sm mb-3 ">
                  {tag}
                </li>
              );
            })}
          </ul>
        </section>
        <div>
           <PostInteractions blog={post}/>
        </div>
      </div>
    </div>
  );
};

export default PostPage;

export async function getServerSideProps(context) {
  const { query } = context;
  console.log(query);
  const {
    data: { data },
  } = await axios.get(`http://localhost:5000/api/posts/${query.postSlug}`);

  return {
    props: {
      post: data,
    },
  };
}
