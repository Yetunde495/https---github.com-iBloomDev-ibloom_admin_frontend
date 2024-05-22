import ReactPaginate from "react-paginate";
import Table from "../../../components/table";
import { TableLoader } from "../../../components/Loader";
import { useCallback, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Button from "../../../components/button";
import { BsPlusCircle, BsSlashCircle, BsThreeDots } from "react-icons/bs";
import formatDateToString from "../../../utils/convertDateStampToString";
import Dropdown from "../../../components/Dropdown2";
import { CiTrash } from "react-icons/ci";
import Delete from "../../../components/modal/Delete";
import { TbCopy, TbLayoutDistributeHorizontal } from "react-icons/tb";
import GenerateCoupon from "./GenerateCoupon";
import CouponDetails from "./CouponDetails";

const CouponManagement: React.FC = () => {
  const sampleData = {
    _id: 1,
    name: "Discount",
    discount_value: "20%",
    category: "Parent",
    duration: "20",
    start_date: "2024-01-10T08:15:30+00:00",
    end_date: "2024-06-10T08:12:30+00:00",
    coupon_code: "1245589",
  };
  const AllCoupons = Array.from({ length: 5 }, () => sampleData);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedCoupon, setselectedCoupon] = useState<any>(null);
  const [addModal, setAddModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [isLoading] = useState(false);
  const itemsPerPage = 8;
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const [paginatedData, setPaginatedData] = useState<any>([]);

  const PaginatedItems = useCallback(() => {
    const endOffset = itemOffset + itemsPerPage;
    setPaginatedData(AllCoupons.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(AllCoupons.length / itemsPerPage));
  }, [itemOffset, AllCoupons]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % AllCoupons.length;
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
          <BsPlusCircle /> Generate Coupon Code
        </Button>
      </div>

      <div className="mt-6">
        {isLoading ? (
          <TableLoader />
        ) : AllCoupons?.length > 0 ? (
          <>
            <Table show>
              <Table.TableRow>
                <Table.Row>Coupon Name</Table.Row>
                <Table.Row>Discount Value</Table.Row>
                <Table.Row>Duration</Table.Row>

                <Table.Row>Start Date</Table.Row>
                <Table.Row>Expiration Date</Table.Row>
                <Table.Row>Coupon Code</Table.Row>
                <Table.Row>Actions</Table.Row>
              </Table.TableRow>

              <Table.TableItems>
                {paginatedData?.map((item: any, index: number) => (
                  <Table.CellRows
                    useSelectOption={false}
                    onClick={() => setselectedCoupon(item)}
                    key={item?._id + "-" + index}
                  >
                    <Table.Cell>{item?.name}</Table.Cell>
                    <Table.Cell>{item?.discount_value}</Table.Cell>
                    <Table.Cell>{item?.duration} Days</Table.Cell>
                    <Table.Cell>
                      {formatDateToString(item?.start_date)}
                    </Table.Cell>
                    <Table.Cell>
                      {formatDateToString(item?.end_date)}
                    </Table.Cell>
                    <Table.Cell>{item?.coupon_code}</Table.Cell>
                    <Table.Cell isAction>
                      {" "}
                      <div className="flex gap-1 items-center">
                        <Dropdown icon={<BsThreeDots />} bg={false}>
                          <span
                            onClick={() => setViewModal(true)}
                            className="py-4 flex items-center gap-3 text-black/90 px-4 text-[14px] cursor-pointer hover:text-primary hover:bg-slate-200/60 dark:hover:bg-primary/10"
                          >
                            <TbLayoutDistributeHorizontal /> View more details
                          </span>

                          <span
                            onClick={() => {}}
                            className="py-4 flex items-center gap-3 text-black/90 px-4 text-[14px] cursor-pointer hover:text-primary hover:bg-slate-200/60 dark:hover:bg-primary/10"
                          >
                            <BsSlashCircle /> Revoke Access
                          </span>

                          <span
                            onClick={() => setDeleteModal(true)}
                            className="py-4 px-4 text-[14px] flex items-center gap-2 text-danger cursor-pointer dark:hover:text-red-500 hover:text-red-600 hover:bg-slate-200/60 dark:hover:bg-primary/10 dark:text-slate-100"
                          >
                            <CiTrash /> Delete Coupon
                          </span>
                        </Dropdown>
                        <span
                          className="text-primary cursor-pointer"
                          onClick={() => {
                            navigator.clipboard.writeText(item?.coupon_code);
                            alert("code copied!");
                          }}
                        >
                          <TbCopy size={20} />
                        </span>
                      </div>
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
              AllCoupons === undefined ||
              AllCoupons === null ||
              AllCoupons?.length === 0
            }
          >
            No Coupon found
          </Table.NoData>
        )}
      </div>
      <GenerateCoupon show={addModal} setShow={() => setAddModal(false)} />
      <CouponDetails
        show={viewModal}
        setShow={() => setViewModal(false)}
        couponData={selectedCoupon}
      />
      <Delete
        show={deleteModal}
        onHide={() => setDeleteModal(false)}
        onProceed={() => {}}
        isLoading={false}
        isLoadingText="Loading"
        cancelText="No"
        okText="Yes, delete coupon"
        size="md:w-[500px] w-[350px]"
        title={`Are you sure you want to delete this coupon`}
        desc={`This action is irreversible.`}
      ></Delete>
    </section>
  );
};

export default CouponManagement;
