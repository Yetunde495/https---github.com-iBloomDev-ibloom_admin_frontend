import { useCallback, useEffect, useState } from "react";
import { GradesData, WorksheetsData } from "../../../data/mockData";
import ReactPaginate from "react-paginate";
import { WorksheetCard } from "../../../components/card";
import { DashboardCard2 } from "../../../components/card/dashboardCards";
import { MdCancel, MdPending, MdSubscriptions } from "react-icons/md";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { Select3 } from "../../../components/form/Select";
import { TableLoader } from "../../../components/Loader";
import Table from "../../../components/table";
import Modal from "../../../components/modal";
import Button from "../../../components/button";
import Drawer from "../../../components/Drawer";
import DefaultLayout from "../../../layout/DefaultLayout";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ValidatorDetails: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading] = useState(false);
  const [data] = useState<any>();
  const [_selectedItem, setSelectedItem] = useState<any>(null);
  const [feedbackModal, setFeedbackModal] = useState(false);
  const [rejectModal, setRejectModal] = useState(false);
  const [previewWorksheet, setPreviewWorksheet] = useState(false);

  const itemsPerPage = 12;
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const [paginatedData, setPaginatedData] = useState<any>([]);

  const PaginatedItems = useCallback(() => {
    const endOffset = itemOffset + itemsPerPage;
    setPaginatedData(WorksheetsData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(WorksheetsData.length / itemsPerPage));
  }, [itemOffset, WorksheetsData]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % WorksheetsData.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    PaginatedItems();
  }, [itemOffset, itemsPerPage]);
  return (
    <DefaultLayout>
      <section>
        <div className="flex gap-8 items-center mb-10">
          <span
            className="flex text-xl items-center gap-2 text-black/90 hover:text-primary cursor-pointer max-w-16"
            onClick={() => navigate(-1)}
          >
            <IoIosArrowBack />
          </span>

          <h1 className="text-2xl">Haylie Dorwat</h1>
        </div>
        <div className="pt-1 pb-12 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 w-full">
          <DashboardCard2
            title="Total Worksheets"
            number={data?.totalClassrooms || "200"}
            icon={
              <div className="p-2 rounded-full bg-[#C3A5EA1A] text-xl">
                <MdSubscriptions className="text-[#4C117B]" />
              </div>
            }
          />

          <DashboardCard2
            title="Approved Worksheets"
            number={60}
            icon={
              <div className="p-2 rounded-full bg-[#4CAF500D] text-xl">
                <BsFillPatchCheckFill className="text-[#1B9620]" />
              </div>
            }
          />

          <DashboardCard2
            title="Pending Worksheets"
            number={57}
            icon={
              <div className="p-2 rounded-full bg-[#BD6A080D] text-xl">
                <MdPending className="text-[#DB7B07]" />
              </div>
            }
          />

          <DashboardCard2
            title="Rejected Worksheets"
            number={`${data?.totalStudent || 50}`}
            icon={
              <div className="p-2 rounded-full bg-[#ED23230D]/10 text-xl">
                <MdCancel className="text-[#AE0317]" />
              </div>
            }
          />
        </div>
        <div className="flex gap-5 items-center">
          <Select3 label="" name="" onChange={() => {}}>
            <option>Show: All Worksheets</option>
            <option>Show: Pending Worksheets</option>
            <option>Show: Approved Worksheets</option>
            <option>Show: Rejected Worksheets</option>
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
          ) : WorksheetsData?.length > 0 ? (
            <>
              <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-6">
                {paginatedData.map((val: any, index: number) => (
                  <WorksheetCard
                    key={index}
                    data={val}
                    onApprove={() => {}}
                    onPreview={() => setPreviewWorksheet(true)}
                    onReject={() => setRejectModal(true)}
                    viewFeedback={() => setFeedbackModal(true)}
                    onClick={() => setSelectedItem(val)}
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
            </>
          ) : (
            <Table.NoData
              onAdd={() => {}}
              hideButton={true}
              show={
                WorksheetsData === undefined ||
                WorksheetsData === null ||
                WorksheetsData?.length === 0
              }
            >
              No Worksheet found
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
              <div className="mb-6">
                <p className="mb-2">Feedback</p>
                <div className="px-3 py-2 h-[150px] custom scrollbar overflow-y-auto border border-stroke rounded-md">
                  <p>Not well structured</p>
                </div>
              </div>

              <Button width="full" onClick={() => setFeedbackModal(false)}>
                Close
              </Button>
            </div>
          </Modal>
        )}
        {rejectModal && (
          <Modal
            show={rejectModal}
            onHide={() => setRejectModal(false)}
            title="Why are you rejecting this worksheet?"
            size="w-full max-w-142.5"
          >
            <div className="">
              <p className="text-sm -mt-6">
                In order to successfully reject a worksheet you must provide a
                feedback
              </p>

              <div className="my-6 flex flex-col gap-2">
                <label>Your Valid Feedback</label>
                <textarea
                  className="px-3 py-2 custom scrollbar border border-stroke focus:border-primary rounded-md focus:outline-none"
                  placeholder="write here"
                  rows={3}
                />
              </div>
              <Button
                width="full"
                onClick={() => {
                  setRejectModal(false);
                }}
              >
                Submit Feedback
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
      </section>
    </DefaultLayout>
  );
};

export default ValidatorDetails;
