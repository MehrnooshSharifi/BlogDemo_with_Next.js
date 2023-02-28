import Link from "next/link";
const MobileCategory = ({postCategories}) => {
    return ( 
        <div className="flex gap-x-4 md:hidden  overflow-auto pb-5">
        {postCategories.data.map((category) => {
          return (
            <Link key={category._id} href={`/blogs/${category.englishTitle}`} className="block hover:bg-purple-50 border border-gray-500 text-gray-500 bg-white rounded-3xl whitespace-nowrap px-3 py-1 text-xs">
              {category.title}
            </Link>
          );
        })}
  </div>
     );
}
 
export default MobileCategory;