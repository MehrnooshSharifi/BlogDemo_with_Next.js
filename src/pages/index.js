import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto lg:max-w-screen-lg">
        <div className="grid gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)] min-h-screen ">
          <div className="hidden md:block md:col-span-3 md:row-span-2 ">
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
                <Link className="block py-2 hover:bg-purple-50" href="#">
                  همه مقالات
                </Link>
                <Link className="block py-2 hover:bg-purple-50" href="#">
                  {" "}
                  ریکت
                </Link>
                <Link className="block py-2 hover:bg-purple-50" href="#">
                  جاوا اسکریپت{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className=" hidden md:block md:col-span-9 ">
            <div className="bg-white rounded-3xl px-4 flex items-center">
              <div className="flex gap-x-2 items-center ml-4 text-gray-400">
                <AdjustmentsVerticalIcon className="w-6 h-6" />
                <span>مرتب سازی :</span>
              </div>
              <ul className="flex items-center gap-x-4 text-gray-700">
                <li className="py-4 cursor-pointer">پر بازدید ترین</li>
                <li className="py-4 cursor-pointer">محبوب ترین</li>
                <li className="py-4 cursor-pointer">جدید ترین</li>
              </ul>
            </div>
          </div>
          <div className=" md:col-span-9 grid grid-cols-6 gap-8 ">
            {["next.png" , "node.png" , "nuxt.png" , "vue.png" , "react.png" , "javaScript.png"].map((item ,index) => {
              return (
                <div key={index} className=" col-span-6 md:col-span-3 lg:col-span-2  rounded-3xl p-2 ">
                  {/* CoverImage */}
                  <div className="aspect-w-16 aspect-h-9">
                    <img src={`/images/${item}`} alt="" className="rounded-2xl w-full h-full object-center object-cover"/>
                  </div>
                  {/* Blog Content */}
                  <div className="bg-gray-100 rounded-2xl">content</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
