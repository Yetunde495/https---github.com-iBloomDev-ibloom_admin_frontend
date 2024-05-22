import { Select3 } from "../../components/form/Select";
import { GradesData } from "../../data/mockData";
import ReactPaginate from "react-paginate";
import Table from "../../components/table";
import Modal from "../../components/modal";
import Button from "../../components/button";
import Drawer from "../../components/Drawer";
import { BsThreeDots } from "react-icons/bs";
import { useEffect, useState } from "react";
import Dropdown from "../../components/Dropdown2";
import { StatusPill } from "../../components/Pills";
import Avatar from "../../components/Avatar2";
import { TableLoader } from "../../components/Loader";
import getUserInitials from "../../utils/getUserInitials";
import { truncateString } from "../../utils/truncateText";

const Feedbacks: React.FC = () => {
  const [isLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [feedbackModal, setFeedbackModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [previewWorksheet, setPreviewWorksheet] = useState(false);
  const fakeData = {
    role: "Teacher",
    grade: "Grade 5",
    subject: "Social Studies",
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: {
      name: "Billy Johnson",
      imgUrl: "",
    },
  };

  const AllFeedbacks = Array.from({ length: 10 }, () => fakeData);

  const itemsPerPage = 12;
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const [paginatedData, setPaginatedData] = useState<any>([]);

  const PaginatedItems = () => {
    const endOffset = itemOffset + itemsPerPage;
    setPaginatedData(AllFeedbacks.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(AllFeedbacks.length / itemsPerPage));
  }

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % AllFeedbacks.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    PaginatedItems();
  }, [itemOffset, itemsPerPage]);
  return (
    <section>
      <div className="pb-3 flex gap-5 items-center">
        <Select3 label="" name="" onChange={() => {}}>
          <option>Show: All Feedbacks</option>
        </Select3>
        <Select3 label="" name="" onChange={() => {}}>
          <option>Grade: All </option>
          {GradesData.map((val, index) => (
            <option key={index}>{val}</option>
          ))}
        </Select3>
        <Select3 label="" name="" onChange={() => {}}>
          <option>Subject: All</option>
          <option>Math</option>
          <option>Reading</option>
          <option>Science</option>
          <option>Social Studies</option>
        </Select3>
        <Select3 label="" name="" onChange={() => {}}>
          <option>Newest to Oldest</option>
          <option>Oldest to Newest</option>
        </Select3>
      </div>

      <div className="mt-10">
        {isLoading ? (
          <TableLoader />
        ) : AllFeedbacks?.length > 0 ? (
          <>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
              {paginatedData.map((val: any, index: number) => (
                <div
                  className="relative bg-white rounded-lg shadow-2 py-3 px-4 overflow-y-auto custom-scrollbar h-[210px] w-full"
                  key={index}
                  onClick={() => setSelectedItem(val)}
                >
                  <div className="flex justify-between pb-5 relative">
                    <div className="flex gap-2 items-center">
                      <Avatar
                        src={val?.author.imgUrl}
                        size="medium"
                        initials={getUserInitials(
                          val?.author.name || "User",
                          ""
                        )}
                      />
                      <div>
                        <p className="m-0">{val?.author.name}</p>
                        <span className="text-sm -mt-1">{val?.role}</span>
                      </div>
                    </div>
                    <div>
                      <Dropdown icon={<BsThreeDots />} bg={false}>
                        <span
                          onClick={() => setPreviewWorksheet(true)}
                          className="py-3 px-4 text-[14px] cursor-pointer text-black/90 hover:text-primary hover:bg-slate-200/60"
                        >
                          Preview Worksheet
                        </span>
                        <span
                          onClick={() => setFeedbackModal(true)}
                          className="py-3 px-4 text-[14px] cursor-pointer text-black/90 hover:text-primary hover:bg-slate-200/60"
                        >
                          View Feedback
                        </span>
                        <span
                          onClick={() => setDeleteModal(true)}
                          className="py-3 px-4 gap-2 text-[14px] cursor-pointer text-danger hover:bg-slate-200/60"
                        >
                          Delete Worksheet
                        </span>
                      </Dropdown>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm mb-1">
                      {truncateString(val?.feedback, 180)}
                    </p>
                  </div>

                  <div className="absolute bottom-5 flex w-full right-0 px-3 gap-3 items-center">
                    <StatusPill variant="success">{val?.subject}</StatusPill>
                    <StatusPill variant="success">{val?.grade}</StatusPill>
                  </div>
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
          </>
        ) : (
          <Table.NoData
            onAdd={() => {}}
            hideButton={true}
            show={
              AllFeedbacks === undefined ||
              AllFeedbacks === null ||
              AllFeedbacks?.length === 0
            }
          >
            No Feedbacks found
          </Table.NoData>
        )}
      </div>
      {feedbackModal && (
        <Modal
          show={feedbackModal}
          onHide={() => setFeedbackModal(false)}
          title="Rejected Worksheet"
          size="w-full max-w-125"
        >
          <div>
            <p className="-mt-7 text-sm text-black/70">
              By {selectedItem?.author.name}
            </p>

            <div className="my-6">
              <p className="mb-2">Feedback</p>
              <div className="px-3 py-2 h-[150px] custom-scrollbar overflow-y-auto border border-stroke rounded-md">
                <p>{selectedItem?.feedback}</p>
              </div>
            </div>

            <Button width="full" onClick={() => setFeedbackModal(false)}>
              Close
            </Button>
          </div>
        </Modal>
      )}
      {previewWorksheet && (
        <Drawer
          width="50%"
          isOpen={previewWorksheet}
          onClose={() => setPreviewWorksheet(false)}
          title="Preview Worksheet"
        >
          This is the view for worksheet
        </Drawer>
      )}
      <Modal
        show={deleteModal}
        onHide={() => setDeleteModal(false)}
        size="w-full max-w-125"
      >
        <div className="flex flex-col gap-8">
          <h5>Are you sure you want to delete this worksheet?</h5>
          <Button width="full" onClick={() => {}}>
            Yes
          </Button>
          <button
            onClick={() => setDeleteModal(false)}
            className="block w-full rounded-full text-meta-1 border border-meta-1 bg-white p-3 text-center font-medium hover:text-white transition hover:bg-meta-1"
          >
            No
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default Feedbacks;
