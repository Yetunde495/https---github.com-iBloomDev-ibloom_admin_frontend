import ReactPaginate from "react-paginate";
import { TableLoader } from "../../../components/Loader";
import Table from "../../../components/table";
import DefaultLayout from "../../../layout/DefaultLayout";
import formatDateToString from "../../../utils/convertDateStampToString";
import { useCallback, useEffect, useState } from "react";
import { GradesData, classes, subjects } from "../../../data/mockData";
import { Select3 } from "../../../components/form/Select";
import Delete from "../../../components/modal/Delete";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { StatusPill } from "../../../components/Pills";

const TeacherDetail: React.FC = () => {
  const navigate = useNavigate();
  const [allClasses, _setAllClasses] = useState<any>(classes);
  const data = {
    plan: "Free",
  };
  const [deleteModal, setDeleteModal] = useState(false);
  const [isLoading] = useState(false);
  const itemsPerPage = 8;
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const [paginatedData, setPaginatedData] = useState<any>([]);

  const PaginatedItems = useCallback(() => {
    const endOffset = itemOffset + itemsPerPage;
    setPaginatedData(allClasses.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(allClasses.length / itemsPerPage));
  }, [itemOffset, allClasses]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % allClasses.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    PaginatedItems();
  }, [itemOffset, itemsPerPage]);
  return (
    <DefaultLayout>
      <section>
        <div className=" flex gap-8 items-center mb-10">
          <span
            className="flex items-center gap-2 text-xl text-black/90 hover:text-primary cursor-pointer max-w-16"
            onClick={() => navigate(-1)}
          >
            <IoIosArrowBack />
          </span>

          <h1 className="text-2xl">Haylie Dorwat</h1>
          <div>
            <StatusPill variant={data?.plan === "Free" ? "warning" : "success"}>
              {data?.plan} Plan
            </StatusPill>{" "}
          </div>
        </div>
        <div className="flex justify-between gap-3 items-center relative mb-3 flex-wrap">
          <div className="flex gap-4 md:w-[60%] w-full">
            <Select3>
              <option>Grade: All</option>
              {GradesData.map((val, index) => (
                <option key={index}>{val}</option>
              ))}
            </Select3>

            <Select3>
              <option>Class: Assigned</option>
              <option>Class: Unassigned</option>
            </Select3>

            <Select3>
              <option>Newest to Oldest</option>
              <option>Oldest to Newest</option>
            </Select3>
          </div>
          <div>
            <button
              className="border border-meta-1 text-meta-1 bg-white py-2 px-4.5 hover:bg-meta-1 hover:text-white font-medium rounded-full"
              onClick={() => setDeleteModal(true)}
            >
              Remove Teacher
            </button>
          </div>
        </div>

        <div className="mt-10">
          {isLoading ? (
            <TableLoader />
          ) : allClasses?.length > 0 ? (
            <>
              <Table show>
                <Table.TableRow>
                  <Table.Row>Class name</Table.Row>
                  <Table.Row>Grade</Table.Row>
                  <Table.Row>Subjects</Table.Row>
                 
                 
                  <Table.Row>Total Students</Table.Row>
                  <Table.Row>Date created</Table.Row>
                  <Table.Row>Class Performance</Table.Row>
                </Table.TableRow>

                <Table.TableItems>
                  {paginatedData?.map((item: any, index: number) => (
                    <Table.CellRows
                      useSelectOption={false}
                      onClick={() => {}}
                      key={item?._id + "-" + index}
                    >
                      <Table.Cell>{item?.name} classroom</Table.Cell>
                      <Table.Cell>{item?.grade}</Table.Cell>
                      <Table.Cell isAction>
                        <div className="flex gap-1 text-zinc-500">
                          {subjects.map(
                            (subject: string, subjectIndex: number) => (
                              <span key={subjectIndex}>
                                {subject}
                                {subjects.length !== subjectIndex + 1 && ","}
                              </span>
                            )
                          )}
                        </div>
                      </Table.Cell>
                      <Table.Cell>{item?.no_of_students || "0"}</Table.Cell>
                      <Table.Cell>
                        {formatDateToString(item?.date_created)}
                      </Table.Cell>
                     
                      
                      <Table.StatusCell
                        variant={
                          item?.performance === "Excellent"
                            ? "success"
                            : "warning"
                        }
                      >
                        {item?.performance}
                      </Table.StatusCell>
                    </Table.CellRows>
                  ))}
                </Table.TableItems>
              </Table>

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
              hideButton={true}
              show={
                allClasses === undefined ||
                allClasses === null ||
                allClasses?.length === 0
              }
            >
              No Class found
            </Table.NoData>
          )}
        </div>
        <Delete
          show={deleteModal}
          onHide={() => setDeleteModal(false)}
          onProceed={() => {}}
          isLoading={false}
          isLoadingText="Loading"
          cancelText="No"
          okText="Yes, remove teacher"
          size="md:w-[500px] w-[350px]"
          title={`Are you sure you want to delete this Teacher?`}
          desc={`Kindly note that all students under this teacher will also be deleted.`}
        ></Delete>
      </section>
    </DefaultLayout>
  );
};

export default TeacherDetail;
