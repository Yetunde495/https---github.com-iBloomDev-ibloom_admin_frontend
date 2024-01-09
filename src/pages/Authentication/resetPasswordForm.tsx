import { FormProvider, useForm } from "react-hook-form";
import CheckmarkLogo from "../../assets/images/Ok.svg";

import Button from "../../components/button";
import React, { useEffect, useState } from "react";
import { PasswordInput } from "../../components/form/PasswordInput";
import { BsCheckCircleFill } from "react-icons/bs";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

type resetPasswordData = {
  password: string;
  confirm_password: string;
};

function ResetPasswordForm() {
  const navigate = useNavigate();
  const methods = useForm<resetPasswordData>();
  const [isLoading, setIsLoading] = useState(false);
  const [togglePassword, setTogglePassword] = React.useState(false);
  const [hasUppercase, setHasUppercase] = React.useState(false);
  const [hasNumeric, setHasNumeric] = React.useState(false);
  const [hasMinLength, setHasMinLength] = React.useState(false);
  const [confirmPassword, setConfirmPassword] = React.useState(false);
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const [isConfirmed, setIsConfirmed] = React.useState<boolean|null>(null);

  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const hasUppercaseLetter = /[A-Z]/.test(value);
    const hasNumericCharacter = /[0-9]/.test(value);
    const hasMinLength = value.length >= 8;
    setHasUppercase(hasUppercaseLetter);
    setHasNumeric(hasNumericCharacter);
    setHasMinLength(hasMinLength);
    methods.setValue("password", value);
  };

  const onSubmit = async (data: resetPasswordData) => {
    if (data.password === data.confirm_password) {
      setConfirmPassword(true);
      setIsConfirmed(true);
    } else if (!confirmPassword) {
      setIsConfirmed(false);
    }
    
    const { errors } = methods.formState;

    // Check if there are any validation errors
    if (
      Object.keys(errors).length > 0 ||
      !hasMinLength ||
      !hasNumeric ||
      !hasUppercase ||
      !confirmPassword
    ) {
      console.log("Validation errors:", errors);
      return;
    }

    if (!code) {
      toast.error("Reset code not found");

      setTimeout(() => {
        toast.warn("Navigating to forgot password page")
      }, 500);

      setTimeout(() => {
        navigate("/forgot-password");
      }, 2000)
    } else {
      // const res = await completePasswordReset({code, new_password: data.password});

      // if (res) {
        setIsSuccess(true)
      // }
    }

  };

  useEffect(() => {

    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
    //
  }, [isLoading]);

  return (
    <section className="w-full min-h-screen form-bg bg-no-repeat">
      <h4 className="fixed left-6 font-semibold text-[15px] top-4 w-30 text-primary">
        ByteDegree
      </h4>
      <div className="flex justify-center items-center relative min-h-screen px-4 md:px-10">
        <div className="max-w-[450px]">
          <div className="mb-16 text-center">
            <h1 className="sm:text-[35px] mb-3 text-[25px] text-center font-cabin dark:text-white text-primary leading-[1.4]">
              Time to reset your password!
            </h1>
            <p className="text-[18px] font-bold dark:text-white">
              {isSuccess
                ? "Your password has been changed successfully! Click on 'continue' to proceed to the login page."
                : "You are almost there, just a few steps to go. Welldone!"}
            </p>
          </div>

          {!isSuccess ? (
            <div>
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className="max-w-[450px]">
                  <div>
                    <div>
                      <PasswordInput
                        label="Password"
                        name="password"
                        placeholder="Enter Password"
                        togglePassword={togglePassword}
                        onTogglePassword={setTogglePassword}
                        onChange={handlePasswordChange}
                        rules={{ required: "Password is required" }}
                      />

                      <div className="flex flex-wrap gap-4 mb-10">
                        <div className="flex gap-2 items-center">
                          <BsCheckCircleFill
                            className={`${
                              hasUppercase ? "text-green-500" : "text-red-500"
                            }`}
                          />
                          <small>One uppercase character</small>
                        </div>
                        <div className="flex gap-2 items-center">
                          <BsCheckCircleFill
                            className={`${
                              hasMinLength ? "text-green-500" : "text-red-500"
                            }`}
                          />
                          <small>8 characters minimum</small>
                        </div>
                        <div className="flex gap-2 items-center">
                          <BsCheckCircleFill
                            className={`${
                              hasNumeric ? "text-green-500" : "text-red-500"
                            }`}
                          />
                          <small>At least one numeric character</small>
                        </div>
                      </div>

                      <PasswordInput
                        label="Password"
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

                      <div className="py-4">
                        <Button
                          type="submit"
                          width="full"
                          onClick={() => {}}
                          disabled={isLoading}
                        >
                          {isLoading ? "Loading..." : "Reset Password"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </FormProvider>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center">
              <img src={CheckmarkLogo} className="" />
              <Button onClick={() => {navigate("/login", {replace: true})}} width="full" height="12">
                Continue
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ResetPasswordForm;
