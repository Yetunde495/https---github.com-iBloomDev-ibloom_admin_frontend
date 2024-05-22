import React, { Fragment, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Modal from "../../../components/modal";
import { AutoInput } from "../../../components/form/customInput";
import PhoneInput from "react-phone-number-input";
import Select2 from "../../../components/form/customSelect";

const EditAdmin: React.FC<{
  userData: any;
  show: boolean;
  setShow: () => void;
}> = ({ userData, show, setShow }) => {
  const methods = useForm<any>();

  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<any>();

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

  useEffect(() => {
   setValue(userData?.phone_number)
  }, [userData])

  return (
    <Fragment>
      <Modal
        show={show}
        onHide={setShow}
        title="Update Admin Details"
        size="w-full max-w-[600px]"
        margin="mt-[45rem] md:mt-[16rem]"
      >
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            onKeyDown={handleKeyDown}
          >
            <div className="flex flex-col gap-7.5">
              <AutoInput
                label="Full Name"
                placeholder="Enter full name"
                name="name"
                defaultValue={userData?.name || ""}
                rules={{ required: "This field is required" }}
              />

                <AutoInput
                  label="Email address"
                  name="email"
                  placeholder="Email"
                  defaultValue={userData?.email}
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
                    placeholder="Enter phone number"
                    value={value}
                    onChange={(val) => {
                      methods.setValue("phone_number", val);
                      setValue;
                    }}
                  />
                </div>

                <Select2
                  name="role"
                  defaultValue={userData?.role}
                  label="Role"
                  rules={{ required: "This role is required" }}
                >
                  <option>Admin</option>
                  <option>Superadmin</option>
                  <option>Validator</option>
                </Select2>

                <button
                  type="submit"
                  className="w-full rounded-md mt-4 mb-3 bg-primary/95 focus:ring-2 focus:ring-[#84caff]  py-3 px-6 font-medium text-white hover:bg-primary hover:shadow-1"
                  onClick={() => {}}
                >
                  {loading ? "Loading..." : "Update Admin"}
                </button>
              </div>
           
          </form>
        </FormProvider>
      </Modal>
    </Fragment>
  );
};

export default EditAdmin;