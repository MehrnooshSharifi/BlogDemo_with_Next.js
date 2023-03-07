import axios from "axios";
import {
  BookmarkIcon,
  DocumentDuplicateIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import PostInteractions from "@/components/Posts/PostInteractions";
import { FaLinkedin, FaTelegramPlane, FaTwitterSquare } from "react-icons/fa";
import Link from "next/link";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import PostList from "@/components/Posts/PostList";
import PostComments from "@/components/Posts/postComments";
import Layout from "src/container/Layout";
const PostPage = ({ post }) => {
  const [copied, setCopied] = useState(false);
  const copyHandler = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  console.log(post);
  return (
    <Layout>
      <div className="max-w-screen-lg container mx-auto px-6 md:px-0">
        <header className="flex flex-col items-center md:flex-row md:justify-evenly md:items-center mb-10">
          <div className="flex justify-between items-center">
            <div className="ml-4">
              <Image src="/images/me.jpg" className="w-16 h-16 rounded-full" />
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
        <main className=" mx-auto prose prose-sm md:prose-base prose-h2:text-purple-800 prose-h1:text-purple-900 md:prose-h1:text-3xl md:prose-h1:font-black md:prose-h2:text-2xl mb-8">
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
          <Image
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
        <div className="flex items-center gap-x-5 relative mb-10 mt-4 ">
          <PostInteractions blog={post} />
          <div className="flex gap-x-2">
            <Link
              href={`https://www.linkedin.com/sharing/share-offsite/?url=http://localhost:3000/${post.hashId}/${post.slug}`}
            >
              <FaLinkedin className="fill-gray-500 cursor-pointer" />
            </Link>
            <Link
              href={`https://t.me/share/url?url=http://localhost:3000/${post.hashId}/${post.slug}`}
            >
              <FaTelegramPlane className="fill-gray-500 cursor-pointer" />
            </Link>
            <Link
              href={`https://twitter.com/intent/tweet?url=http://localhost:3000/${post.hashId}/${post.slug}`}
            >
              <FaTwitterSquare className="fill-gray-500 cursor-pointer" />
            </Link>
          </div>
          <div className="flex border border-1 rounded-2xl px-3 py-1 cursor-pointer whitespace-nowrap">
            <DocumentDuplicateIcon className="w-5 h-5 stroke-gray-500" />
            <CopyToClipboard
              text={`http://localhost:3000/${post.hashId}/${post.slug}`}
              onCopy={copyHandler}
            >
              <span className="text-[12px] text-gray-500">کپی لینک</span>
            </CopyToClipboard>
          </div>
          {copied && <span className=" absolute -top-3 md:top-0 whitespace-nowrap right-48  md:right-80 text-xs md:-mr-6 md:text-sm text-purple-500">کپی انجام شد</span>}
        </div>
        <hr className="mb-10" />
        {/* Similar Posts */}
        <section className="">
          <h2 className="font-extrabold text-2x md:text-3xl mb-10">پست های مشابه</h2>
          <div className="grid grid-cols-6 lg:gap-x-8"><PostList blogsData={post.related}/></div>
        </section>
        {/* post Comments */}
        <PostComments post={post}/>
      </div>
    </Layout>
  );
};

export default PostPage;

export async function getServerSideProps(context) {
  const { query ,req } = context;
  console.log(query);
  const {
    data: { data },
  } = await axios.get(`http://localhost:5000/api/posts/${query.postSlug}` ,    {
    withCredentials: true,
    headers: {
      Cookie: req.headers.cookie || "",
    },
  });

  return {
    props: {
      post: data,
    },
  };
}
