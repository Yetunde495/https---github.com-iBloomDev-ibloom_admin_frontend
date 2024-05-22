import { Fragment, useState } from "react";
import Modal from "../../../components/modal";
import { FormProvider, useForm } from "react-hook-form";
import { AutoInput } from "../../../components/form/customInput";
import PhoneInput from "react-phone-number-input";

type CreateValidatorProps = {
    show: boolean;
    setShow: () => void;
}
const CreateValidator: React.FC<CreateValidatorProps> = ({show, setShow}) => {
  const methods = useForm<any>();
  const [value, setValue] = useState<any>("");

  const [loading, setLoading] = useState(false);

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
        phone: value,
      });
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
        onHide={setShow}
        title="Create New Validator"
        size="w-full max-w-[600px]"
        margin="mt-[45rem] md:mt-[16rem]"
      >
        <p className="-mt-4 mb-5">Enter the validator details</p>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            onKeyDown={handleKeyDown}
          >
            <div>
              <div className="flex flex-col gap-7.5">
              
                  <AutoInput
                    label="Validator's Full Name"
                    placeholder="Enter full name"
                    name="name"
                    rules={{ required: "This field is required" }}
                  />

                  <AutoInput
                    label="Username"
                    placeholder="Enter username"
                    name="username"
                    rules={{ required: "This field is required" }}
                  />
               

                <AutoInput
                  label="Email address"
                  name="guardian_email"
                  placeholder="Email"
                  defaultValue={""}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  }}
                />

                <div className="">
                  <label
                    htmlFor="state"
                    className="mb-2.5 block text-black dark:text-white"
                  >
                    phone Number
                  </label>
                  <PhoneInput
                    international
                    defaultCountry="US"
                    placeholder="Enter phone number"
                    value={value}
                    onChange={(val) => {
                      methods.setValue("phone_number", val);
                      setValue;
                    }}
                  />
                </div>

                <div>
                  <p className="mb-3 text-black">Generate Passcode</p>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="click the button"
                      className="w-full py-3 px-3 bg-gray-200 focus:border-primary border border-stroke dark:bg-gray-700 rounded-md text-white focus:outline-none"
                    />
                    <button className="absolute right-0 top-1/2 -translate-y-1/2 disabled:bg-primary/60 bg-transparent dark:bg-slate-100 hover:bg-primary text-primary border-primary border p-3 rounded-md hover:text-white focus:outline-none">
                      Generate code
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md mt-4 mb-3 bg-primary/95 focus:ring-2 focus:ring-[#84caff]  py-3 px-6 font-medium text-white hover:bg-primary hover:shadow-1"
                  onClick={() => {}}
                >
                  {loading ? "Loading..." : "Create Validator"}
                </button>
              </div>
            </div>
          </form>
        </FormProvider>
      </Modal>
    </Fragment>
  );
};

export default CreateValidator;
