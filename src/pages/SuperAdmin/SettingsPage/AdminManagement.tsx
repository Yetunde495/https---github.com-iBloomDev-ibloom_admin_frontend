import ReactPaginate from "react-paginate";
import Table from "../../../components/table";
import { TableLoader } from "../../../components/Loader";
import { useCallback, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Button from "../../../components/button";
import { BsPlusCircle, BsThreeDots } from "react-icons/bs";
import formatDateToString from "../../../utils/convertDateStampToString";
import Dropdown from "../../../components/Dropdown2";
import { CiEdit, CiTrash } from "react-icons/ci";
import Delete from "../../../components/modal/Delete";
import CreateAdmin from "./AddAdmin";
import EditAdmin from "./EditAdmin";

const AdminManagement: React.FC = () => {
  const sampleData = {
    _id: 1,
    name: "John Doe",
    email: "sampleuser@sample.com",
    phone_number: "+2349090117795",
    role: "Admin",
    date_added: "2024-01-10T08:15:30+00:00",
  };
  const AllAdmins = Array.from({ length: 5 }, () => sampleData);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedAdmin, setselectedAdmin] = useState<any>(null);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [isLoading] = useState(false);
  const itemsPerPage = 8;
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const [paginatedData, setPaginatedData] = useState<any>([]);

  const PaginatedItems = useCallback(() => {
    const endOffset = itemOffset + itemsPerPage;
    setPaginatedData(AllAdmins.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(AllAdmins.length / itemsPerPage));
  }, [itemOffset, AllAdmins]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % AllAdmins.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    PaginatedItems();
  }, [itemOffset, itemsPerPage]);
  return (
    <section>
      <div className="flex justify-between gap-3 items-center relative mb-3 flex-wrap">
        <div className="block mt-2 ">
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
        <Button onClick={() => setAddModal(true)}>
          <BsPlusCircle /> Add New Admin
        </Button>
      </div>

      <div className="mt-6">
        {isLoading ? (
          <TableLoader />
        ) : AllAdmins?.length > 0 ? (
          <>
            <Table show>
              <Table.TableRow>
                <Table.Row>Name</Table.Row>
                <Table.Row>Email</Table.Row>
                <Table.Row>Phone</Table.Row>
                <Table.Row>Role</Table.Row>
                <Table.Row>Date Added</Table.Row>
                <Table.Row>More Actions</Table.Row>
              </Table.TableRow>

              <Table.TableItems>
                {paginatedData?.map((item: any, index: number) => (
                  <Table.CellRows
                    useSelectOption={false}
                    onClick={() => setselectedAdmin(item)}
                    key={item?._id + "-" + index}
                  >
                    <Table.Cell>
                      {item?.name}
                    </Table.Cell>
                    <Table.Cell>{item?.email}</Table.Cell>
                    <Table.Cell>{item?.phone_number}</Table.Cell>
                    <Table.Cell>{item?.role}</Table.Cell>
                    <Table.Cell>
                      {formatDateToString(item?.date_added)}
                    </Table.Cell>

                    <Table.Cell isAction>
                      {" "}
                      <Dropdown icon={<BsThreeDots />} bg={false}>
                        <span
                          onClick={() => setEditModal(true)}
                          className="py-4 flex items-center gap-3 text-black/90 px-4 text-[14px] cursor-pointer hover:text-primary hover:bg-slate-200/60 dark:hover:bg-primary/10"
                        >
                          <CiEdit /> Edit
                        </span>

                        <span
                          onClick={() => setDeleteModal(true)}
                          className="py-4 px-4 text-[14px] flex items-center gap-2 text-danger cursor-pointer dark:hover:text-red-500 hover:text-red-600 hover:bg-slate-200/60 dark:hover:bg-primary/10 dark:text-slate-100"
                        >
                          <CiTrash /> Delete
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
            onAdd={() => {}}
            hideButton={true}
            show={
              AllAdmins === undefined ||
              AllAdmins === null ||
              AllAdmins?.length === 0
            }
          >
            No Admin found
          </Table.NoData>
        )}
      </div>
      <CreateAdmin show={addModal} setShow={() => setAddModal(false)} />
      <EditAdmin show={editModal} setShow={() => setEditModal(false)} userData={selectedAdmin} />
      <Delete
        show={deleteModal}
        onHide={() => setDeleteModal(false)}
        onProceed={() => {}}
        isLoading={false}
        isLoadingText="Loading"
        cancelText="No"
        okText="Yes, delete admin"
        size="md:w-[500px] w-[350px]"
        title={`Are you sure you want to delete  ${
          selectedAdmin?.name
        }?`}
        desc={`This action is irreversible.`}
      ></Delete>
    </section>
  );
};

export default AdminManagement;
