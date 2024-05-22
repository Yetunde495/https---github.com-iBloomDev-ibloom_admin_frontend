import { Fragment, useState } from "react";
import Modal from "../../../components/modal";
import { FormProvider, useForm } from "react-hook-form";
import { AutoInput } from "../../../components/form/customInput";
import Select2 from "../../../components/form/customSelect";
import DatePicker from "react-datepicker";
import { FcCalendar } from "react-icons/fc";
import { FormGroup } from "../../../components/form";
import { TbCopy } from "react-icons/tb";

type CreateAdminProps = {
  show: boolean;
  setShow: () => void;
};
const GenerateCoupon: React.FC<CreateAdminProps> = ({ show, setShow }) => {
  const methods = useForm<any>();

  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [formView, setFormView] = useState(true);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  const onSubmit = async (data: any) => {
    setLoading(true);
    const { errors } = methods.formState;

    // Check if there are any validation errors
    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
      return;
    }

    try {
      setLoading(true);

      console.log({
        ...data,
      });
      setFormView(false);
    } catch (error) {
      console.log("add alert error", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <Modal
        show={show}
        onHide={() => {
          setShow()
          setFormView(true)
        }}
        title="Generate Coupon"
        size="w-full max-w-[600px]"
        margin={`${formView && "mt-[45rem] md:mt-[16rem]"}`}
      >
        {formView && <p className="-mt-4 mb-5">
          This voucher will give the user permission to use the app for the
          duration set for it.
        </p>}
        {formView && (
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              onKeyDown={handleKeyDown}
            >
              <div>
                <div className="flex flex-col gap-7.5">
                  <AutoInput
                    label="Coupon name"
                    placeholder="Enter name"
                    name="name"
                    rules={{ required: "This field is required" }}
                  />

                  <Select2
                    name="discount_value"
                    label="Discount Value"
                    rules={{ required: "This field is required" }}
                  >
                    <option>Select...</option>
                    <option value={10}>10%</option>
                    <option value={20}>20%</option>
                    <option value={30}>30%</option>
                    <option value={40}>40%</option>
                    <option value={50}>50%</option>
                    <option value={60}>60%</option>
                    <option value={70}>70%</option>
                    <option value={80}>80%</option>
                    <option value={90}>90%</option>
                    <option value={100}>100%</option>
                  </Select2>

                  <Select2
                    name="category"
                    label="Category Selection"
                    rules={{ required: "This field is required" }}
                  >
                    <option>Select...</option>
                    <option>Parents</option>
                    <option>Teachers</option>
                  </Select2>

                  <FormGroup>
                    <div className="w-full">
                      <p className="mb-2 text-black">Start Date</p>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        icon={<FcCalendar />}
                        showIcon
                        showPopperArrow={false}
                      />
                    </div>

                    <div className="w-full">
                      <p className="mb-2 text-black">Expiration Date</p>
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        icon={<FcCalendar />}
                        showIcon
                        showPopperArrow={false}
                      />
                    </div>
                  </FormGroup>

                  <AutoInput
                    name="user_limit"
                    label="User Limit"
                    defaultValue="0"
                    type="number"
                    placeholder="Enter number of users allowed to access this coupon"
                    rules={{ required: false }}
                  />

                  <button
                    type="submit"
                    className="w-full rounded-full mt-4 mb-3 bg-primary/95 focus:ring-2 focus:ring-[#84caff]  py-3 px-6 font-medium text-white hover:bg-primary hover:shadow-1"
                    onClick={() => {}}
                  >
                    {loading ? "Loading..." : "Generate Coupon Code"}
                  </button>
                </div>
              </div>
            </form>
          </FormProvider>
        )}
        {!formView && (
          <div className="flex justify-center flex-col items-center py-9">
            <h1 className="text-xl mb-3">Here is your generated code:</h1>
            <p className="flex items-center gap-2 text-xl">
              67890032{" "}
              <span
                className="text-primary cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText("67890032");
                  alert("code copied!");
                }}
              >
                <TbCopy size={26} />
              </span>
            </p>
          </div>
        )}
      </Modal>
    </Fragment>
  );
};

export default GenerateCoupon;
