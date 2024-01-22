/* eslint-disable @typescript-eslint/no-explicit-any */
import Layout from "../../layout/Layout";
// import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import FaqCategorySidebar from "./components/FaqCategories";
import Tabs, { Tab } from "../../components/tabs";
import { Link } from "react-router-dom";
import { truncateString } from "../../utils/truncateText";

export const data = [
  {
    title: "FAQ Topic 1",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
    id: "2345678"
  },
  {
    title: "FAQ Topic 2",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
    id: "2345678"
  },
  {
    title: "FAQ Topic 3",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
    id: "2345678"
  },
  {
    title: "FAQ Topic 4",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
    id: "2345678"
  },
  {
    title: "FAQ Topic 5",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
    id: "2345678"
  },
  
];

const FaqPage: React.FC = () => {
  //   const navigate = useNavigate()
  const tabs = ["Courses", "Payment Issues", "Organizations"];
  const [tab, setTab] = useState<string>(tabs[0]);

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
      <div className="sm:hidden block w-full">
        <Tabs>
          {tabs.map((val: string, index: number) => (
            <Tab key={index} activeTab={tab} onChange={setTab}>
              {val}
            </Tab>
          ))}
        </Tabs>
      </div>
      <section className="pt-14 pb-22 sm:px-10 px-4">
        <section className="flex relative w-full">
          <FaqCategorySidebar />

          <div className="w-full flex flex-col sm:px-9">
            <div className="flex items-center gap-4 justify-between mb-4">
              <p className="sm:ml-6 ml-1 font-semibold sm:text-xl text-[16px]">
                FAQ
              </p>
            </div>

            <div className="flex flex-col gap-6 w-full">
              {paginatedData.map((val: any, index: number) => (
                <div key={index} className="sm:px-6 py-10 border-b border-stroke">
                 <h4 className="font-semibold text-xl mb-3">{val?.title}</h4>
                 <p className="text-sm mb-3">{truncateString(val?.content)}</p>
                 <Link to={``}>Read More</Link>
                </div>
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

export default FaqPage;
