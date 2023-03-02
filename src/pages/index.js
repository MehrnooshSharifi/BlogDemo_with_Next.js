import Link from "next/link";
import Layout from "src/container/Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center mt-8">
        <h1 className="text-2xl font-bold">This is Home Page</h1>
        <Link href="/blogs" className="font-bold text-purple-700">
          Go to Blogs Page
        </Link>
      </div>
    </Layout>
  );
};

export default HomePage;
