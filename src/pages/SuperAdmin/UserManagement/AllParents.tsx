
import { DashboardCard2 } from "../../../components/card/dashboardCards";
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
import icon1 from "../../../assets/svgs/raphael_parent.svg"
import { IoLocationSharp } from "react-icons/io5";

const AllParents: React.FC = () => {
    const navigate = useNavigate();
    const sampleData = {
      _id: 1,
      first_name: "John",
      last_name: "Doe",
      email: "sampleuser@sample.com",
      phone_number: "+93452638836",
      country: "United States",
      total_classrooms: 20,
      total_children: 15,
      plan: "Tier 1",
      date_joined: "2024-01-10T08:15:30+00:00",
    };
    const AllParents = Array.from({ length: 10 }, () => sampleData);
    const [deleteModal, setDeleteModal] = useState(false);
    const [selectedParent, setSelectedParent] = useState<any>(null);
    const [isLoading] = useState(false);
    const itemsPerPage = 8;
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
  
    const [paginatedData, setPaginatedData] = useState<any>([]);
  
    const PaginatedItems = useCallback(() => {
      const endOffset = itemOffset + itemsPerPage;
      setPaginatedData(AllParents.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(AllParents.length / itemsPerPage));
    }, [itemOffset, AllParents]);
  
    const handlePageClick = (event: any) => {
      const newOffset = (event.selected * itemsPerPage) % AllParents.length;
      setItemOffset(newOffset);
    };
  
    useEffect(() => {
      PaginatedItems();
    }, [itemOffset, itemsPerPage]);
    return (
      <section>
        <div className="pb-9 grid md:grid-cols-3 grid-cols-2 gap-6 w-full">
          <DashboardCard2
            title="Total Parents"
            number={57}
            icon={
              <div className="p-2 rounded-full bg-[#104AC80D] text-2xl">
                <img src={icon1} />
              </div>
            }
          />
  
          <DashboardCard2
            title="Total Children"
            number={`${80}`}
            icon={
              <div className="p-2 rounded-full bg-[#58104F0D] text-2xl">
                <HiUserGroup className="text-[#8D33AA]" />
              </div>
            }
          />
          <DashboardCard2
            title="Top Country"
            number={"United States"}
            icon={
              <div className="p-2 rounded-full bg-[#95E1D31A] text-2xl">
                <IoLocationSharp className="text-[#23769E]" />
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
          ) : AllParents?.length > 0 ? (
            <>
              <Table show>
                <Table.TableRow>
                  <Table.Row>Name</Table.Row>
                  <Table.Row>Email</Table.Row>
                  <Table.Row>Phone Number</Table.Row>
                  <Table.Row>Location</Table.Row>
                  <Table.Row>Date Joined</Table.Row>
  
                  <Table.Row>Total Children</Table.Row>
  
                  <Table.Row>Plan</Table.Row>
                  <Table.Row>Action</Table.Row>
                </Table.TableRow>
  
                <Table.TableItems>
                  {paginatedData?.map((item: any, index: number) => (
                    <Table.CellRows
                      useSelectOption={false}
                      onClick={() => setSelectedParent(item)}
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
  
                      <Table.Cell>{item?.total_children || "0"}</Table.Cell>
                      <Table.StatusCell
                        variant={item?.plan === "Free" ? "warning" : "success"}
                      >
                        {item?.plan + " " + "Plan"}
                      </Table.StatusCell>
  
                      <Table.Cell isAction>
                        {" "}
                        <Dropdown icon={<BsThreeDots />} bg={false}>
                          <span
                            onClick={() => navigate(`parent/${item._id}`)}
                            className="py-4 flex items-center gap-3 text-black/90 px-4 text-[14px] cursor-pointer hover:text-primary hover:bg-slate-200/60 dark:hover:bg-primary/10"
                          >
                            <TbLayoutDistributeHorizontal /> View More Details
                          </span>
  
                          <span
                            onClick={() => setDeleteModal(true)}
                            className="py-4 px-4 text-[14px] flex items-center gap-2 text-danger cursor-pointer dark:hover:text-red-500 hover:text-red-600 hover:bg-slate-200/60 dark:hover:bg-primary/10 dark:text-slate-100"
                          >
                            <CiTrash /> Remove Parent
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
                AllParents === undefined ||
                AllParents === null ||
                AllParents?.length === 0
              }
            >
              No Parent found
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
            selectedParent?.first_name + " " + selectedParent?.last_name
          }?`}
          desc={`Kindly note that all students under this parent will also be deleted.`}
        ></Delete>
      </section>
    );
}

export default AllParents;