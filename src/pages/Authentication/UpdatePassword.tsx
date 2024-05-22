import React, { Fragment, useState } from "react";
import Modal from "../../components/modal";
import { BsPatchCheckFill} from "react-icons/bs";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { PasswordInput } from "../../components/form";
import Button from "../../components/button";

type updatePasswordData = {
  password: string;
  confirm_password: string;
};

const UpdatePassword: React.FC = () => {
  const [show, setShow] = useState(false);

  const methods = useForm<updatePasswordData>();
  const [isLoading, setIsLoading] = useState(false);

  const [togglePassword, setTogglePassword] = React.useState(false);
  const [confirmPassword, setConfirmPassword] = React.useState(false);
  const [isConfirmed, setIsConfirmed] = React.useState<boolean | null>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);

  const onSubmit = async (data: updatePasswordData) => {
    if (data.password === data.confirm_password) {
      setConfirmPassword(true);
      setIsConfirmed(true);
    } else if (!confirmPassword) {
      setIsConfirmed(false);
    }

    const { errors } = methods.formState;

    // Check if there are any validation errors
    if (Object.keys(errors).length > 0 || !confirmPassword) {
      return;
    }
    setIsLoading(true);
    try {
      console.log(data);
      setIsSuccess(true);
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Fragment>
      <button
        onClick={() => setShow(true)}
        className="border-primary border text-primary hover:text-white hover:bg-primary bg-transparent rounded-md py-2 px-2"
      >
        Update Password
      </button>

      <Modal
        show={show}
        onHide={() => {
            setShow(false)
            setIsSuccess(false)
        }}
        title="Update Password"
        size="w-full max-w-[600px]"
        // margin="mt-[37rem] xl:mt-[22rem] lg:mt-[25rem] md:mt-[10rem]"
      >

        {!isSuccess && (
          <div>
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="p-4"
                onKeyDown={handleKeyDown}
              >
                <div >
                  <div className="grid grid-cols-1 gap-4">
                    <PasswordInput
                      label="Current Password"
                      name="current_password"
                      placeholder="Enter current password"
                      togglePassword={togglePassword}
                      onTogglePassword={setTogglePassword}
                      rules={{ required: "Current Password is required" }}
                    />
                    <PasswordInput
                      label="New Password"
                      name="password"
                      placeholder="Enter Password"
                      togglePassword={togglePassword}
                      onTogglePassword={setTogglePassword}
                      rules={{
                        required: "Password is required",
                        pattern: {
                          value: /^(?=.*[A-Z]).{8,}$/,
                          message:
                            "Invalid password! password must contain at least one uppercase character, and a minimum of 8 characters",
                        },
                      }}
                    />
                     
                     <div>
                     <PasswordInput
                      label="Confirm Password"
                      name="confirm_password"
                      placeholder="Enter Password"
                      togglePassword={togglePassword}
                      onTogglePassword={setTogglePassword}
                      rules={{ required: "Confirm Password is required" }}
                    />
                    {isConfirmed === false && (
                      <small className="text-red-500">
                        Passwords do not match. Please check again.
                      </small>
                    )}
                     </div>
                    

                    <div className="py-4">
                      <Button
                        type="submit"
                        width="full"
                        onClick={() => {}}
                        disabled={isLoading}
                      >
                        {isLoading ? "Loading..." : "Update Password"}
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </FormProvider>
          </div>
        )}

        {isSuccess && (
          <div className="flex flex-col justify-center items-center pt-6">
            <BsPatchCheckFill size={58} className="mb-4 text-primary text-lg" />
            <h1 className="text-2xl text-center">
              Password updated <br /> Successfully!
            </h1>
            <p className="text-zinc-400 font-normal text-center mb-8">
              Your password has been updated successfully
            </p>
          </div>
        )}
      </Modal>
    </Fragment>
  );
};

export default UpdatePassword;
