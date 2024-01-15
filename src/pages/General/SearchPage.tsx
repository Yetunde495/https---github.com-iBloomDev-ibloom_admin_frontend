/* eslint-disable @typescript-eslint/no-explicit-any */
import { SearchCourseCard } from "../../components/card";
import Layout from "../../layout/Layout";
// import { useNavigate } from "react-router-dom";
import PreviewImg from "../../assets/images/course-img3.png";
import FilterSidebar from "./components/FilterSidebar";
import Drawer from "../../components/Drawer";
import { useCallback, useEffect, useState } from "react";
import { SearchpageFilter } from "./components/SearchFilterOptions";
import { FaFilter } from "react-icons/fa6";
import ReactPaginate from "react-paginate";

export const data = [
  {
    title: "Intro to Product Design",
    progress: 60,
    progress_url: "",
    preview_img_url: PreviewImg,
    progress_bookmark: "6-8 weeks",
    tag: "Fresh",
    creator: {
      name: "Angela Yu",
      photo: PreviewImg,
    },
  },
  {
    title: "Intro to Product Design2",
    progress: 60,
    progress_url: "",
    preview_img_url: PreviewImg,
    progress_bookmark: "6-8 weeks",
    tag: "Fresh",
    creator: {
      name: "Angela Yu",
      photo: PreviewImg,
    },
  },
  {
    title: "Intro to Product Design3",
    progress: 60,
    progress_url: "",
    preview_img_url: PreviewImg,
    progress_bookmark: "6-8 weeks",
    tag: "Fresh",
    creator: {
      name: "Angela Yu",
      photo: PreviewImg,
    },
  },
  {
    title: "Intro to Product Design4",
    progress: 40,
    progress_url: "",
    preview_img_url: PreviewImg,
    progress_bookmark: "8-10 weeks",
    tag: "Fresh",
    creator: {
      name: "Angela Yu",
      photo: PreviewImg,
    },
  },
  {
    title: "Intro to Product Design5",
    progress: 30,
    progress_url: "",
    preview_img_url: PreviewImg,
    progress_bookmark: "22 hours",
    tag: "Fresh",
    creator: {
      name: "Angela Yu",
      photo: PreviewImg,
    },
  },
];

const SearchPage: React.FC = () => {
  //   const navigate = useNavigate()
  const [filterOpen, setFilterOpen] = useState(false);

  const itemsPerPage = 3;
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const [paginatedData, setPaginatedData] = useState<any>([]);


  const PaginatedItems = useCallback(() => {
    const endOffset = itemOffset + itemsPerPage;
    setPaginatedData(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, data]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    PaginatedItems();
  }, [itemOffset, itemsPerPage, PaginatedItems]);
  return (
    <Layout>
      <section className="pt-14 pb-22 px-10">
        <section className="flex relative w-full">
          <FilterSidebar />

          <div className="w-full flex flex-col">
            <div className="flex items-center gap-4 justify-between mb-4">
              <p className="sm:ml-6 ml-1 font-semibold sm:text-xl text-[16px]">
                Search Result: "13" search results were found
              </p>
              <div className="sm:hidden block w-[20%]">
                {!filterOpen && (
                  <button
                    onClick={() => setFilterOpen(true)}
                    className={`flex gap-1 items-center z-50 rounded border border-slate-300 py-1 px-2 bg-transparent`}
                  >
                    <span className="cursor-pointer">
                      <FaFilter />
                    </span>
                    Filters
                  </button>
                )}
                <Drawer
                  isOpen={filterOpen}
                  onClose={() => setFilterOpen(false)}
                  title=""
                  width="300px"
                >
                  <SearchpageFilter />
                </Drawer>
              </div>
            </div>

            <div className="flex flex-col gap-6 w-full">
              {paginatedData.map((val:any, index:number) => (
                <SearchCourseCard
                  key={index}
                  title={val.title}
                  preview_img_url={val.preview_img_url}
                  duration={val.progress_bookmark}
                  course_url=""
                  creator={val.creator}
                  tag={val.tag}
                />
              ))}
            </div>

          <div className="py-20 px-3 flex justify-center">
          <ReactPaginate
            nextLabel=">"
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            onPageChange={handlePageClick}
            pageCount={pageCount}
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default SearchPage;
