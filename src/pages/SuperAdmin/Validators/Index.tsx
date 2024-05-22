import Table from "../../../components/table";
import ReactPaginate from "react-paginate";
import { Select3 } from "../../../components/form/Select";
import { TableLoader } from "../../../components/Loader";
import { TbLayoutDistributeHorizontal } from "react-icons/tb";
import Dropdown from "../../../components/Dropdown2";
import { BsPlusCircle, BsThreeDots } from "react-icons/bs";
import { CiEdit, CiTrash } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import formatDateToString from "../../../utils/convertDateStampToString";
import Delete from "../../../components/modal/Delete";
import { BiSearch } from "react-icons/bi";
import DefaultLayout from "../../../layout/DefaultLayout";
import CreateValidator from "./CreateValidator";
import EditValidator from "./EditValidator";

const AllValidators: React.FC = () => {
  const navigate = useNavigate();
  const sampleData = {
    _id: 1,
    first_name: "John",
    last_name: "Doe",
    email: "sampleuser@sample.com",
    username: "JohnDoe125",
    phone_number: "+93452638836",
    country: "United States",
    total_classrooms: 20,
    approved_worksheets: 10,
    plan: "Tier 1",
    date_added: "2024-01-10T08:15:30+00:00",
  };
  const AllParents = Array.from({ length: 10 }, () => sampleData);
  const [deleteModal, setDeleteModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
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
    <DefaultLayout>
      <section>
        <div className="flex justify-between gap-3 items-center relative mb-3 flex-wrap">
          <div className="flex gap-4 md:w-[50%] w-full">
            <div className="block mt-2">
              <form
                action="https://formbold.com/s/unique_form_id"
                method="POST"
              >
                <div className="relative">
                  <button className="absolute top-1/2 left-0 -translate-y-1/2 pl-3">
                    <BiSearch />
                  </button>

                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full lg:w-65 border  border-stroke py-3.5 rounded-md bg-transparent text-sm pr-3 pl-8 focus:outline-none focus:border-1 focus:border-primary"
                  />
                </div>
              </form>
            </div>

            <Select3>
              <option>Newest to Oldest</option>
              <option>Oldest to Newest</option>
            </Select3>
          </div>

          <div>
            <button
              className="bg-primary text-white rounded-full py-2 px-4 flex items-center gap-2 hover:opacity-95"
              onClick={() => setCreateModal(true)}
            >
              <BsPlusCircle /> Add New Validator
            </button>
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
                  <Table.Row>Email Address</Table.Row>
                  <Table.Row>Username</Table.Row>
                  <Table.Row>Phone Number</Table.Row>
                  <Table.Row>Date Added</Table.Row>

                  <Table.Row>Approved Worksheets</Table.Row>

                  <Table.Row>Action</Table.Row>
                </Table.TableRow>

                <Table.TableItems>
                  {paginatedData?.map((item: any, index: number) => (
                    <Table.CellRows
                      useSelectOption={false}
                      onClick={() => setSelectedUser(item)}
                      key={item?._id + "-" + index}
                    >
                      <Table.Cell>
                        {item?.first_name + " " + item?.last_name}
                      </Table.Cell>
                      <Table.Cell>{item?.email}</Table.Cell>
                      <Table.Cell>{item?.username}</Table.Cell>
                      <Table.Cell>{item?.phone_number}</Table.Cell>
                      <Table.Cell>
                        {formatDateToString(item?.date_added)}
                      </Table.Cell>

                      <Table.Cell>
                        {item?.approved_worksheets || "0"}
                      </Table.Cell>

                      <Table.Cell isAction>
                        {" "}
                        <Dropdown icon={<BsThreeDots />} bg={false}>
                          <span
                            onClick={() => setEditModal(true)}
                            className="py-3 px-4 flex items-center gap-2 text-[14px] cursor-pointer text-black/90 dark:hover:text-primary hover:text-primary hover:bg-slate-200/60 dark:hover:bg-primary/10 dark:text-slate-100"
                          >
                            <CiEdit /> Edit Validator
                          </span>
                          <span
                            onClick={() => navigate(`${item._id}`)}
                            className="py-4 flex items-center gap-3 text-black/90 px-4 text-[14px] cursor-pointer hover:text-primary hover:bg-slate-200/60 dark:hover:bg-primary/10"
                          >
                            <TbLayoutDistributeHorizontal /> View More Details
                          </span>

                          <span
                            onClick={() => setDeleteModal(true)}
                            className="py-4 px-4 text-[14px] flex items-center gap-2 text-danger cursor-pointer dark:hover:text-red-500 hover:text-red-600 hover:bg-slate-200/60 dark:hover:bg-primary/10 dark:text-slate-100"
                          >
                            <CiTrash /> Delete Validator
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
              No Validator found! Create one by clicking on the Add new
              validator button
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
          okText="Yes, delete validator"
          size="md:w-[500px] w-[350px]"
          title={`Are you sure you want to delete  ${
            selectedUser?.first_name + " " + selectedUser?.last_name
          }?`}
          desc={`Kindly note that all worksheets under this validator will also be deleted.`}
        ></Delete>

        {createModal && (
          <CreateValidator
            show={createModal}
            setShow={() => setCreateModal(false)}
          />
        )}
        <EditValidator
          show={editModal}
          setShow={() => setEditModal(false)}
          userData={selectedUser}
        />
      </section>
    </DefaultLayout>
  );
};

export default AllValidators;
