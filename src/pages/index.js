import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <h1 className="text-2xl font-bold">This is Home Page</h1>
      <Link href="/blogs" className="font-bold text-purple-700">Go to Blogs Page</Link>
    </div>
  );
};

export default HomePage;
