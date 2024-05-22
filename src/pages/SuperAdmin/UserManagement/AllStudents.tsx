import ReactPaginate from "react-paginate";
import { TableLoader } from "../../../components/Loader";
import Table from "../../../components/table";
import formatDateToString from "../../../utils/convertDateStampToString";
import { useCallback, useEffect, useState } from "react";
import { GradesData, subjects } from "../../../data/mockData";
import { Select3 } from "../../../components/form/Select";
import Delete from "../../../components/modal/Delete";
import { BiSearch } from "react-icons/bi";

const AllStudents: React.FC = () => {
  const [guardian, setGuardian] = useState("Teachers");
  const data1 = {
    _id: 1,
    first_name: "John",
    last_name: "Doe",
    grade: "5",
    username: "Hayler123",
    guardian_email: "guardian-email@info.com",
    teacher_name: "Kaiya Dorwart",
    year_of_birth: "2020",
    class: "Premier",
    date_created: "2024-01-10T08:15:30+00:00",
  };
  const data2 = {
    _id: 1,
    first_name: "Anna",
    last_name: "Potter",
    grade: "5",
    username: "Hayler123",
    guardian_email: "guardian-email@info.com",
    year_of_birth: "2020",
    parent_name: "Harry Potter",
    class: "Premier",
    date_created: "2024-01-10T08:15:30+00:00",
  };
  const dataArray1 = Array.from({ length: 10 }, () => data1);

  const dataArray2 = Array.from({ length: 10 }, () => data2);
  const [allStudents, setAllClasses] = useState<any>(dataArray1);
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
  }, [itemOffset, itemsPerPage, allStudents]);
  return (
    <section>
      <div className="flex justify-between gap-3 items-center relative mb-3 flex-wrap">
        <div className="flex gap-4 md:w-[50%] w-full">
          <Select3
            onChange={(val: string) => {
              setGuardian(val);
              if (val === "Teachers") {
                setAllClasses(dataArray1);
              } else {
                setAllClasses(dataArray2);
              }
            }}
          >
            <option value="Teachers">Sort By: Teachers</option>
            <option value="Parents">Sort By: Parents</option>
          </Select3>
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
        <div className="block mt-2">
          <form action="https://formbold.com/s/unique_form_id" method="POST">
            <div className="relative">
              <button className="absolute top-1/2 left-0 -translate-y-1/2 pl-3">
                <BiSearch />
              </button>

              <input
                type="text"
                placeholder="Search"
                className="w-full lg:w-60 border  border-stroke py-3.5 rounded-md bg-transparent text-sm pr-3 pl-8 focus:outline-none focus:border-1 focus:border-primary"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="mt-10">
        {isLoading ? (
          <TableLoader />
        ) : allStudents?.length > 0 ? (
          <>
            <Table show>
              {guardian === "Teachers" ? (
                <Table.TableRow>
                  <Table.Row>Name</Table.Row>
                  <Table.Row>Username</Table.Row>
                  <Table.Row>Birth Year</Table.Row>
                  <Table.Row>Grade</Table.Row>
                  <Table.Row>Guardian's Email</Table.Row>
                  <Table.Row>Teacher's Name</Table.Row>
                  <Table.Row>Class</Table.Row>
                  <Table.Row>Date Created</Table.Row>
                </Table.TableRow>
              ) : (
                <Table.TableRow>
                  <Table.Row>Name</Table.Row>
                  <Table.Row>Username</Table.Row>
                  <Table.Row>Birth Year</Table.Row>
                  <Table.Row>Grade</Table.Row>
                  <Table.Row>Parent's Name</Table.Row>
                  <Table.Row>Subjects</Table.Row>
                  <Table.Row>Date Created</Table.Row>
                </Table.TableRow>
              )}
              {guardian === "Teachers" ? (
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
                      <Table.Cell>{item?.username}</Table.Cell>
                      <Table.Cell>{item?.year_of_birth}</Table.Cell>
                      <Table.Cell>{item?.grade}</Table.Cell>
                      <Table.Cell>{item?.guardian_email}</Table.Cell>
                      <Table.Cell>{item?.teacher_name}</Table.Cell>
                      <Table.Cell>{item?.class} Class</Table.Cell>

                      <Table.Cell>
                        {formatDateToString(item?.date_created)}
                      </Table.Cell>
                    </Table.CellRows>
                  ))}
                </Table.TableItems>
              ) : (
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
                      <Table.Cell>{item?.username}</Table.Cell>
                      <Table.Cell>{item?.year_of_birth}</Table.Cell>
                      <Table.Cell>{item?.grade}</Table.Cell>
                      <Table.Cell>{item?.parent_name}</Table.Cell>
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
                      <Table.Cell>
                        {formatDateToString(item?.date_created)}
                      </Table.Cell>
                    </Table.CellRows>
                  ))}
                </Table.TableItems>
              )}
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
  );
};

export default AllStudents;
