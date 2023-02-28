import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";
const SortBar = () => {
  return (
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
  );
};

export default SortBar;
