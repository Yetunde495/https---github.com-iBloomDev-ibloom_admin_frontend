import { FormProvider, useForm } from "react-hook-form";
import Button from "../../components/button";
import { AutoInput } from "../../components/form/customInput";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import lockImg from "../../images/auth/lock.svg";
import classNames from "classnames";
import { toast } from "react-toastify";
import { sendResetOtp, verifyResetOtp } from "../../services/authServices";

type resetPasswordData = {
  email: string;
};
function ResetPassword() {
  const methods = useForm<resetPasswordData>();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setSuccess] = useState<boolean>(false);

  const inputRefs = Array.from({ length: 6 }, () =>
    useRef<HTMLInputElement | null>(null)
  );

  const [otpValue, setOtpValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [loading, setLoading] = useState(false);

  const ResendOTP = async () => {
    setIsLoading(true);
    try {
      const response = await sendResetOtp({
        email: email,
      });
      toast.success(response.message);
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    setLoading(true);
    const data = {
      otp: otpValue,
    };
    try {
       await verifyResetOtp(data);
      toast.success("Account verification Successfull!");
      navigate(`/reset-password/${email}`);
    } catch (err: any) {
      setIsValid(false);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const inputValue = e.target.value;

    if (/^\d{0,1}$/.test(inputValue)) {
      // Update only the specific digit at the given index
      setOtpValue((prevOtpValue) => {
        const newOtpValue = prevOtpValue.split("");
        newOtpValue[index] = inputValue;
        return newOtpValue.join("");
      });

      // Move focus to the next input
      if (inputValue && index < inputRefs.length - 1) {
        inputRefs[index + 1]?.current?.focus();
      }
    }
  };

  const inputClasses = () =>
    classNames(
      "border",
      "p-2",
      "w-12 rounded focus:border-primary outline-none",
      "text-center",
      {
        "border-red-500": !isValid,
        "border-slate-300": isValid,
      }
    );
  const onSubmit = async (data: resetPasswordData) => {
    setIsLoading(true);
    const { errors } = methods.formState;
    // Check if there are any validation errors
    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
      return;
    }
    setEmail(data.email);
    try {
      const response = await sendResetOtp(data);
      toast.success(response.message);
      setSuccess(true);
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <h4 className="fixed left-6 font-semibold text-[15px] top-4 w-30 text-primary">
        ByteDegree
      </h4>
      <div className="flex flex-col justify-center items-center bg-white rounded-2xl py-8 px-6 relative max-w-[40rem]">
        <img src={lockImg} alt="lock-img" className="mb-3" />

        <h1 className="mb-3 text-[25px] text-center font-semibold dark:text-white leading-[1.4]">
          {isSuccess ? "Enter OTP" : "Reset Password"}
        </h1>

        <p className="text-[16px] text-center mb-8 w-[80%]">
          {isSuccess
            ? "Enter the OTP code sent to your email to reset your password"
            : "Enter your email, and an OTP will be sent to your email to help you reset your password"}
        </p>

        {!isSuccess ? (
          <div className="w-[80%]">
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="max-w-[450px] p-4"
              >
                <div>
                  <div>
                    <AutoInput
                      label="Email address"
                      name="email"
                      type="email"
                      placeholder="Enter Email Address"
                      rules={{
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address",
                        },
                      }}
                    />

                    <div className="pb-2 pt-6">
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
          <div className="">
            <small
              className={`${
                !isValid ? "text-red-500" : "text-slate-400"
              } text-left my-3`}
            >
              {!isValid ? "Wrong code! Try again" : "OTP code"}
            </small>
            <div className="flex gap-2 mb-6 pb-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <input
                  key={index}
                  type="text"
                  value={otpValue[index] || ""}
                  onChange={(e) => handleChange(e, index)}
                  className={inputClasses()}
                  maxLength={1}
                  ref={inputRefs[index]}
                />
              ))}
            </div>
            <button
              onClick={() => handleVerifyOTP()}
              disabled={loading || otpValue.length !== 6}
              className="border-none rounded-lg py-2 px-6 w-full text-white opacity-95 hover:opacity-100 bg-primary disabled:bg-primary/70"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
            <p className="text-center text-slate-400 dark:text-slate-100 py-2">
              Didn't get an OTP?{" "}
              <span
                className="text-primary/95 hover:text-primary cursor-pointer"
                onClick={() => ResendOTP()}
              >
                {isLoading ? "Resending" : "Resend"} OTP
              </span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ResetPassword;
