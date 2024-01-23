import { FormProvider, useForm } from "react-hook-form";

import Button from "../../components/button";
import React, { useState } from "react";
import { PasswordInput } from "../../components/form/PasswordInput";
import { BsCheckCircleFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import lockImg from "../../images/auth/lock.svg";
import { ResetPassword } from "../../services/authServices";

type resetPasswordData = {
  password: string;
  confirm_password: string;
};

function ResetPasswordForm() {
  const { email } = useParams();
  const navigate = useNavigate();
  const methods = useForm<resetPasswordData>();
  const [isLoading, setIsLoading] = useState(false);
  const [togglePassword, setTogglePassword] = React.useState(false);
  const [hasUppercase, setHasUppercase] = React.useState(false);
  const [hasNumeric, setHasNumeric] = React.useState(false);
  const [hasMinLength, setHasMinLength] = React.useState(false);
  const [confirmPassword, setConfirmPassword] = React.useState(false);
  const [isConfirmed, setIsConfirmed] = React.useState<boolean | null>(null);

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
      return;
    }
    setIsLoading(true);
    try {
      await ResetPassword({
        email: email,
        password: data.password,
      });
      setIsSuccess(true);
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen flex justify-center items-center overflow-y-auto">
      <h4 className="fixed left-6 font-semibold text-[15px] top-4 w-30 text-primary">
        ByteDegree
      </h4>
      <div className="flex flex-col justify-center items-center bg-white rounded-2xl py-8 px-6 relative max-w-[40rem]">
        <img src={lockImg} alt="lock-img" className="mb-3" />

        <h1 className="mb-3 text-[25px] text-center font-semibold dark:text-white leading-[1.4]">
          {isSuccess ? "Password Reset Successful" : "Create New Password"}
        </h1>

        {isSuccess && (
          <p className="text-[16px] text-center mb-8">
            You’ve successfully reset your password. You can now <br />
            login with your new password
          </p>
        )}

        {!isSuccess ? (
          <div>
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="max-w-[450px] p-4"
              >
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

                    <div className="py-4">
                      <Button
                        type="submit"
                        width="full"
                        onClick={() => {}}
                        disabled={isLoading}
                      >
                        {isLoading ? "Loading..." : "Create Password"}
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </FormProvider>
          </div>
        ) : (
          <Button
            onClick={() => {
              navigate("/signin", { replace: true });
            }}
            width="full"
            height="20"
          >
            Go to Login
          </Button>
        )}
      </div>
    </section>
  );
}

export default ResetPasswordForm;
