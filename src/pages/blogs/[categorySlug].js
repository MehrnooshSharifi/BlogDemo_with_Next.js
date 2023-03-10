import PaginationComponent from "@/common/Pagination";
import DesktopCategory from "@/components/Posts/DescktopCategory";
import MobileCategory from "@/components/Posts/MobileCategory";
import PostList from "@/components/Posts/PostList";
import SortBar from "@/components/Posts/SortBar";
import axios from "axios";
import Layout from "src/container/Layout";
const CategoryPage = ({ blogsData, postCategories }) => {
  console.log(postCategories);
  return (
    <Layout>
      <div className="container mx-auto lg:max-w-screen-lg px-4 md:px-0">
        {/* category Mobile */}
        <MobileCategory postCategories={postCategories} />
        <div className="grid gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)] min-h-screen ">
          {/* Category Descktop */}
          <div className="hidden md:block md:col-span-3 md:row-span-2 ">
            <DesktopCategory postCategories={postCategories} />
          </div>
          {/* SortBar Descktop */}
          <div className=" hidden md:block md:col-span-9 ">
            <SortBar />
          </div>
          {/* Blog Section */}
          <div className=" md:col-span-9 grid grid-cols-6 gap-8 ">
            <PostList blogsData={blogsData.docs} />
            <PaginationComponent blogsData={blogsData}  />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;

export async function getServerSideProps(context) {
  const { query, req } = context;
  const queryString = new URLSearchParams(query).toString();
  console.log(queryString);
  const { data: result } = await axios.get(
    `http://localhost:5000/api/posts?${queryString}`,
    {
      withCredentials: true,
      headers: {
        Cookie: req.headers.cookie || "",
      },
    }
  );
  const { data } = result;
  const { data: postCategories } = await axios.get(
    "http://localhost:5000/api/post-category"
  );
  return {
    props: {
      blogsData: data,
      postCategories,
    },
  };
}
