import ReactPaginate from "react-paginate";
import { TableLoader } from "../../../components/Loader";
import Table from "../../../components/table";
import DefaultLayout from "../../../layout/DefaultLayout";
import formatDateToString from "../../../utils/convertDateStampToString";
import { useCallback, useEffect, useState } from "react";
import { GradesData, students, subjects } from "../../../data/mockData";
import { Select3 } from "../../../components/form/Select";
import Delete from "../../../components/modal/Delete";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { StatusPill } from "../../../components/Pills";

const ParentDetail: React.FC = () => {
  const navigate = useNavigate();
  const [allStudents, _setAllClasses] = useState<any>(students);
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
    setPaginatedData(allStudents.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(allStudents.length / itemsPerPage));
  }, [itemOffset, allStudents]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % allStudents.length;
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
          <div>
            <StatusPill variant={data?.plan === "Free" ? "warning" : "success"}>
              {data?.plan} Plan
            </StatusPill>{" "}
          </div>
        </div>
        <div className="flex justify-between gap-3 items-center relative mb-3 flex-wrap">
          <div className="flex gap-4 md:w-[50%] w-full">
            <Select3>
              <option>Grade: All</option>
              {GradesData.map((val, index) => (
                <option key={index}>{val}</option>
              ))}
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
              Remove Parent
            </button>
          </div>
        </div>

        <div className="mt-10">
          {isLoading ? (
            <TableLoader />
          ) : allStudents?.length > 0 ? (
            <>
              <Table show>
                <Table.TableRow>
                  <Table.Row>Child's name</Table.Row>
                  <Table.Row>Subjects</Table.Row>
                  <Table.Row>Grade</Table.Row>
                  <Table.Row>Date Joined</Table.Row>
                  <Table.Row>Performance</Table.Row>
                </Table.TableRow>

                <Table.TableItems>
                  {paginatedData?.map((item: any, index: number) => (
                    <Table.CellRows
                      useSelectOption={false}
                      onClick={() => {}}
                      key={item?._id + "-" + index}
                    >
                      <Table.Cell>
                        {item?.first_name + " " + item?.last_name}
                      </Table.Cell>
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

                      <Table.Cell>{item?.grade}</Table.Cell>
                      <Table.Cell>
                        {formatDateToString(item?.date_joined)}
                      </Table.Cell>
                      <Table.StatusCell
                        variant={
                          item?.performance === "Excellent"
                            ? "success"
                            : "warning"
                        }
                      >
                        {item?.performance || "Unspecified"}
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
                allStudents === undefined ||
                allStudents === null ||
                allStudents?.length === 0
              }
            >
              No Children found
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
          okText="Yes, remove parent"
          size="md:w-[500px] w-[350px]"
          title={`Are you sure you want to delete this Parent?`}
          desc={`Kindly note that all students under this parent will also be deleted.`}
        ></Delete>
      </section>
    </DefaultLayout>
  );
};

export default ParentDetail;
