import Link from "next/link";
import { useRouter } from "next/router";
const MobileCategory = ({ postCategories }) => {
  const { query } = useRouter();
  return (
    <div className="flex gap-x-4 md:hidden  overflow-auto pb-5">
      <Link
        href={`/blogs`}
        className={`block hover:bg-purple-50 border border-gray-500 text-gray-500 bg-white rounded-3xl whitespace-nowrap px-3 py-1 text-xs ${!query.categorySlug ? "border-purple-700 text-purple-700 bg-purple-100 border-2" : ""}`}
      >
        همه مقالات
      </Link>
      {postCategories.data.map((category) => {
        return (
          <Link
            key={category._id}
            href={`/blogs/${category.englishTitle}`}
            className={`block hover:bg-purple-50 border border-gray-500 text-gray-500 bg-white rounded-3xl whitespace-nowrap px-3 py-1 text-xs ${query.categorySlug===category.englishTitle ? "border-purple-700 text-purple-700 bg-purple-100" : ""}`}
          >
            {category.title}
          </Link>
        );
      })}
    </div>
  );
};

export default MobileCategory;
