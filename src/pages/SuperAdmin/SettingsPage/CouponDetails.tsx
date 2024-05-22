import { Fragment } from "react";
import Modal from "../../../components/modal";
import formatDateToString from "../../../utils/convertDateStampToString";
import { TbCopy } from "react-icons/tb";

type CreateAdminProps = {
  show: boolean;
  setShow: () => void;
  couponData: any;
};
const CouponDetails: React.FC<CreateAdminProps> = ({
  show,
  setShow,
  couponData,
}) => {
  return (
    <Fragment>
      <Modal
        show={show}
        onHide={setShow}
        title="Coupon Summary Details"
        size="w-full max-w-[600px]"
        margin="mt-[22rem] xl:mt-[20rem] 2xl:mt-[18rem]"
      >
        <p className="-mt-4 mb-5 text-primary italic">
          2 weeks coupon duration
        </p>

        <div>
          <div className="flex flex-col gap-7.5">
            <div>
              <span>Coupon name</span>
              <p className="w-full border border-stroke rounded-md px-4 py-2.5 mt-2.5">
                {" "}
                {couponData?.name}
              </p>
            </div>

            <div>
              <span>Discount Value</span>
              <p className="w-full border border-stroke rounded-md px-4 py-2.5 mt-2.5">
                {" "}
                {couponData?.discount_value}
              </p>
            </div>

            <div>
              <span>User Category</span>
              <p className="w-full border border-stroke rounded-md px-4 py-2.5 mt-2.5">
                {couponData?.category}
              </p>
            </div>

            <div>
              <span>Start Date</span>
              <p className="w-full border border-stroke rounded-md px-4 py-2.5 mt-2.5">
                {formatDateToString(couponData?.start_date)}
              </p>
            </div>

            <div>
              <span>End Date</span>
              <p className="w-full border border-stroke rounded-md px-4 py-2.5 mt-2.5">
                {formatDateToString(couponData?.end_date)}
              </p>
            </div>

            <div>
              <span>User Limit</span>
              <p className="w-full border border-stroke rounded-md px-4 py-2.5 mt-2.5">
                {couponData?.user_limit || "Unspecified"}
              </p>
            </div>

            <div>
              <span>Coupon Code</span>
              <p className="w-full border flex justify-between items-center border-stroke rounded-md px-4 py-2.5 mt-2.5">
                {couponData?.coupon_code}{" "}
                <span
                  className="text-primary cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(couponData?.coupon_code);
                    alert("code copied!")
                  }}
                >
                  <TbCopy size={20} />
                </span>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default CouponDetails;
