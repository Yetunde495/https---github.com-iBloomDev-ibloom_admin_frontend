import { FaChalkboardTeacher } from "react-icons/fa";
import { DashboardCard2 } from "../../../components/card/dashboardCards";
import { SiGoogleclassroom } from "react-icons/si";
import { HiUserGroup } from "react-icons/hi2";
import Table from "../../../components/table";
import ReactPaginate from "react-paginate";
import { Select3 } from "../../../components/form/Select";
import { TableLoader } from "../../../components/Loader";
import { TbLayoutDistributeHorizontal } from "react-icons/tb";
import Dropdown from "../../../components/Dropdown2";
import { BsThreeDots } from "react-icons/bs";
import { CiTrash } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import formatDateToString from "../../../utils/convertDateStampToString";
import Delete from "../../../components/modal/Delete";
import { BiSearch } from "react-icons/bi";

const AllTeachers: React.FC = () => {
  const navigate = useNavigate();
  const sampleData = {
    _id: 1,
    first_name: "John",
    last_name: "Doe",
    email: "sampleuser@sample.com",
    phone_number: "+93452638836",
    country: "United States",
    total_classrooms: 20,
    total_students: 15,
    plan: "Tier 1",
    date_joined: "2024-01-10T08:15:30+00:00",
  };
  const AllTeachers = Array.from({ length: 10 }, () => sampleData);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState<any>(null);
  const [isLoading] = useState(false);
  const itemsPerPage = 8;
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const [paginatedData, setPaginatedData] = useState<any>([]);

  const PaginatedItems = useCallback(() => {
    const endOffset = itemOffset + itemsPerPage;
    setPaginatedData(AllTeachers.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(AllTeachers.length / itemsPerPage));
  }, [itemOffset, AllTeachers]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % AllTeachers.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    PaginatedItems();
  }, [itemOffset, itemsPerPage]);
  return (
    <section>
      <div className="pb-9 grid md:grid-cols-3 grid-cols-2 gap-6 w-full">
        <DashboardCard2
          title="Total Teachers"
          number={57}
          icon={
            <div className="p-2 rounded-full bg-[#104AC80D] text-2xl">
              <FaChalkboardTeacher className="text-[#0720A8]" />
            </div>
          }
        />

        <DashboardCard2
          title="Total Students"
          number={`${80}`}
          icon={
            <div className="p-2 rounded-full bg-[#58104F0D] text-2xl">
              <HiUserGroup className="text-[#8D33AA]" />
            </div>
          }
        />
        <DashboardCard2
          title="Total Classrooms"
          number={30}
          icon={
            <div className="p-2 rounded-full bg-[#95E1D31A] text-2xl">
              <SiGoogleclassroom className="text-[#23769E]" />
            </div>
          }
        />
      </div>
      <div className="flex justify-between gap-3 items-center relative mb-3 flex-wrap">
        <div className="flex gap-4 md:w-[60%] w-full">
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

          <Select3>
            <option>Plan: All</option>
          </Select3>

          <Select3>
            <option>Newest to Oldest</option>
            <option>Oldest to Newest</option>
          </Select3>
        </div>
      </div>

      <div className="mt-6">
        {isLoading ? (
          <TableLoader />
        ) : AllTeachers?.length > 0 ? (
          <>
            <Table show>
              <Table.TableRow>
                <Table.Row>Name</Table.Row>
                <Table.Row>Email</Table.Row>
                <Table.Row>Phone Number</Table.Row>
                <Table.Row>Location</Table.Row>
                <Table.Row>Date Joined</Table.Row>

                <Table.Row>Total Students</Table.Row>

                <Table.Row>Total Classrooms</Table.Row>
                <Table.Row>Plan</Table.Row>
                <Table.Row>Action</Table.Row>
              </Table.TableRow>

              <Table.TableItems>
                {paginatedData?.map((item: any, index: number) => (
                  <Table.CellRows
                    useSelectOption={false}
                    onClick={() => setSelectedTeacher(item)}
                    key={item?._id + "-" + index}
                  >
                    <Table.Cell>
                      {item?.first_name + " " + item?.last_name}
                    </Table.Cell>
                    <Table.Cell>{item?.email}</Table.Cell>
                    <Table.Cell>{item?.phone_number}</Table.Cell>
                    <Table.Cell>{item?.country}</Table.Cell>
                    <Table.Cell>
                      {formatDateToString(item?.date_joined)}
                    </Table.Cell>

                    <Table.Cell>{item?.total_students || "0"}</Table.Cell>
                    <Table.Cell>{item?.total_classrooms || "0"}</Table.Cell>
                    <Table.StatusCell
                      variant={item?.plan === "Free" ? "warning" : "success"}
                    >
                      {item?.plan + " " + "Plan"}
                    </Table.StatusCell>

                    <Table.Cell isAction>
                      {" "}
                      <Dropdown icon={<BsThreeDots />} bg={false}>
                        <span
                          onClick={() => navigate(`teacher/${item._id}`)}
                          className="py-4 flex items-center gap-3 text-black/90 px-4 text-[14px] cursor-pointer hover:text-primary hover:bg-slate-200/60 dark:hover:bg-primary/10"
                        >
                          <TbLayoutDistributeHorizontal /> View More Details
                        </span>

                        <span
                          onClick={() => setDeleteModal(true)}
                          className="py-4 px-4 text-[14px] flex items-center gap-2 text-danger cursor-pointer dark:hover:text-red-500 hover:text-red-600 hover:bg-slate-200/60 dark:hover:bg-primary/10 dark:text-slate-100"
                        >
                          <CiTrash /> Remove Teacher
                        </span>
                      </Dropdown>
                    </Table.Cell>
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
            onAdd={() => navigate(`/app/tutors/courses/courseupload`)}
            hideButton={true}
            show={
              AllTeachers === undefined ||
              AllTeachers === null ||
              AllTeachers?.length === 0
            }
          >
            No Teacher found
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
        title={`Are you sure you want to delete  ${
          selectedTeacher?.first_name + " " + selectedTeacher?.last_name
        }?`}
        desc={`Kindly note that all students under this teacher will also be deleted.`}
      ></Delete>
    </section>
  );
};

export default AllTeachers;
