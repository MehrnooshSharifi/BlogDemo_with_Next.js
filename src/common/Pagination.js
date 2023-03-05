import routerPush from "@/utils/routerPush";
import Pagination from "@mui/material/Pagination";
import { useRouter } from "next/router";
const PaginationComponent = ({blogsData}) => {
    const router = useRouter();
    const pageHandler = (e, page) => {
      router.query.page = page;
      routerPush(router);
    };
  return (
    <div className=" col-span-6 flex justify-center" dir="ltr">
      {blogsData.totalPages > 1 && (
        <Pagination
          count={blogsData.totalPages}
          color="secondary"
          page={blogsData.page}
          onChange={pageHandler}
        />
      )}
    </div>
  );
};

export default PaginationComponent;
