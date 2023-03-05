import routerPush from "@/utils/routerPush";
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useState } from "react";
const sortOptions = [
  { label: "پر بازدیدترین", id: "most" },
  { label: "محبوب ترین", id: "popular" },
  { label: "جدیدترین ", id: "newest" },
];
const SortBar = () => {
  const router = useRouter();
  const [sort, setSort] = useState(router.query.sort || "newest");
  const sortHandler = (id) => {
    setSort(id);
    router.query.sort = id;
    routerPush(router);
  };
  return (
    <div className="bg-white rounded-3xl px-4 flex items-center">
      <div className="flex gap-x-2 items-center ml-4 text-gray-400">
        <AdjustmentsVerticalIcon className="w-6 h-6" />
        <span>مرتب سازی :</span>
      </div>
      <ul className="flex items-center gap-x-4">
        {sortOptions.map((option) => {
          return (
            <li
              onClick={() => sortHandler(option.id)}
              key={option.id}
              className={`py-4 cursor-pointer relative ${
                option.id === sort
                  ? "text-purple-800 font-bold"
                  : "text-gray-500"
              }`}
            >
              {option.label}
              {option.id === sort && (
                <span className="bg-purple-700 absolute h-[2px] w-8 bottom-0 right-0"></span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SortBar;
