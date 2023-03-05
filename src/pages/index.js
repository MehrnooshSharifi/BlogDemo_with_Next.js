import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import Layout from "src/container/Layout";

const HomePage = () => {
  const { user } = useAuth();
  console.log(user)
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center mt-8">
        {user&&<h2>{user.name} به برنامه خوش آمدید</h2>}
        <h1 className="text-2xl font-bold">This is Home Page</h1>
        <Link href="/blogs" className="font-bold text-purple-700">
          Go to Blogs Page
        </Link>
      </div>
    </Layout>
  );
};

export default HomePage;
