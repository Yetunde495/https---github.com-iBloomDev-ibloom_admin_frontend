import { FormProvider, useForm } from "react-hook-form";

import Button from "../../components/button";
import React, { useState } from "react";
import { PasswordInput } from "../../components/form/PasswordInput";
import { BsCheckCircleFill, BsPatchCheckFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ResetPassword } from "../../services/authServices";
import Img1 from "../../assets/logo/ibloom5-final 1.png";
import bgImg from "../../assets/images/Rectangle 3.png";
import bgShape1 from "../../assets/images/IMAGE.png";
import bgShape2 from "../../assets/images/IMAGE-2.png";


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
    <section className="w-full min-h-screen flex justify-center items-center relative bg-white">
      <span className="absolute right-0 top-0 w-[250px] h-[300px]"  style={{backgroundImage: `url(${bgShape1})`}}></span>
      <div className="flex flex-col justify-center items-center z-9999 rounded-3xl py-8 px-6 relative max-w-[40rem] bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${bgImg})`}}>
        <img src={Img1} alt="logo-img" className="" />
        {!isSuccess && (
          <h1 className="mb-3 font-bold text-center dark:text-white leading-[1.4]">
            Set a new Password
          </h1>
        )}

        {isSuccess && (
          <div className="flex flex-col justify-center items-center pt-6">
            <BsPatchCheckFill size={58} className="mb-4 text-primary text-lg" />
            <h1 className="text-2xl text-center">
              Password changed <br /> Successfully!
            </h1>
            <p className="text-zinc-400 font-normal text-center mb-8">
              Your password has been changed successfully
            </p>
          </div>
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
                        {isLoading ? "Loading..." : "Submit"}
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </FormProvider>
          </div>
        ) : (
          <div className="lg:min-w-[350px] pt-4 pb-6">
            <Button
              onClick={() => {
                navigate("/signin", { replace: true });
              }}
              width="full"
              // height="20"
            >
              Continue to Login
            </Button>
          </div>
        )}
      </div>
      <span className="absolute bottom-0 left-0 w-[350px] h-[400px]" style={{backgroundImage: `url(${bgShape2})`}}></span>
    </section>
  );
}

export default ResetPasswordForm;
