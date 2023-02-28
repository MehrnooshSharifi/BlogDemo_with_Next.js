import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
const DesktopCategory = ({ postCategories }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="bg-white rounded-3xl overflow-hidden">
      {/* accordion Header */}
      <div
        className="flex justify-between items-center py-4 px-4 cursor-pointer bg-purple-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>دسته بندی مقالات</span>
        <ChevronDownIcon
          className={`w-6 h-6 stroke-purple-600 transition-all duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      {/* accordion content */}
      <div className={`pr-4 ${isOpen ? "block" : "hidden"}`}>
        <Link className="block py-2 hover:bg-purple-50" href="/blogs">
          همه مقالات
        </Link>
        {postCategories.data.map((category) => {
          return (
            <Link
              key={category._id}
              href={`/blogs/${category.englishTitle}`}
              className="block py-2 hover:bg-purple-50"
            >
              {category.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DesktopCategory;
