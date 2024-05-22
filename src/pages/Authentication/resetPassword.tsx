import { FormProvider, useForm } from "react-hook-form";
import Button from "../../components/button";
import { AutoInput } from "../../components/form/customInput";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { toast } from "react-toastify";
import { sendResetOtp, verifyResetOtp } from "../../services/authServices";
import Img1 from "../../assets/logo/ibloom5-final 1.png";
import bgShape3 from "../../assets/images/Rectangle 3.png";
import bgShape1 from "../../assets/images/IMAGE.png";
import bgShape2 from "../../assets/images/IMAGE-2.png";



type resetPasswordData = {
  email: string;
};
function ResetPassword() {
  const methods = useForm<resetPasswordData>();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setSuccess] = useState<boolean>(false);

  const inputRefs = Array.from({ length: 4 }, () =>
    useRef<HTMLInputElement | null>(null)
  );

  const [otpValue, setOtpValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [loading, setLoading] = useState(false);

  const [countdown, setCountdown] = useState(120); // 2 minutes in seconds
  const [isCounting, setIsCounting] = useState(true);

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
      "p-3",
      "w-12 rounded focus:border-primary outline-none shadow-sm",
      "text-center",
      {
        "border-red-500": !isValid,
        "border-slate-100": isValid,
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
      setIsCounting(true);
      setCountdown(120);
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let timer: any;

    // Start countdown when isCounting is true
    if (isCounting) {
      timer = setTimeout(() => {
        if (countdown > 0) {
          setCountdown(countdown - 1);
        } else {
          setIsCounting(false);
        }
      }, 1000);
    }

    // Clear the timer when component unmounts or when countdown reaches 0
    return () => clearTimeout(timer);
  }, [isCounting, countdown]);

  return (
    <section className="w-full min-h-screen flex justify-center items-center relative bg-white">
      <span className="absolute right-0 top-0 w-[250px] h-[300px]"  style={{backgroundImage: `url(${bgShape1})`}}></span>
      <div className="flex flex-col justify-center items-center z-9999 rounded-3xl py-8 px-6 relative max-w-[40rem]" style={{backgroundImage: `url(${bgShape3})`}}>
        <img src={Img1} alt="logo-img" className="" />

        <h1 className="mb-2 text-lg text-center font-bold dark:text-white leading-[1.4]">
          {isSuccess ? "OTP Verification" : "Forgot Password"}
        </h1>

        <p className="text-center font-medium mb-8 w-[80%]">
          {isSuccess
            ? "Enter the 4-digit code sent to your email address"
            : "An OTP will be sent to your registered email to help you reset your password"}
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

                    <div className="pb-2 pt-8">
                      <Button
                        type="submit"
                        width="full"
                        onClick={() => {}}
                        disabled={isLoading}
                      >
                        {isLoading ? "Loading..." : "Reset Password"}
                      </Button>

                      <div className="my-3 flex justify-center items-center">
                        <Link
                          to="/login"
                          className="text-lg text-center text-primary"
                        >
                          Back to Sign in
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </FormProvider>
          </div>
        ) : (
          <div className="lg:min-w-[480px] flex items-center flex-col -mt-5">
            <small
              className={`${
                !isValid ? "text-red-500" : "text-slate-400"
              } text-left my-3`}
            >
              {!isValid ? "Wrong code! Try again" : ""}
            </small>
            <div className="flex gap-3">
              {Array.from({ length: 4 }).map((_, index) => (
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
            <p className="text-center text-black/75 dark:text-slate-100 py-3.5 mb-4">
              Didn’t receive the code?{" "}
              <span
                className="text-primary/95 hover:text-primary cursor-pointer"
                onClick={() => {
                  if (isCounting) {
                    toast.info(
                      "The previous Otp must have expired before you can request for a new one"
                    );
                  } else {
                    ResendOTP();
                  }
                }}
              >
                {isLoading ? "Resending" : "Resend"}{" "}
                {isCounting && (
                  <span>
                    ({Math.floor(countdown / 60)}:
                    {(countdown % 60).toString().padStart(2, "0")})
                  </span>
                )}
              </span>
            </p>
            <button
              onClick={() => handleVerifyOTP()}
              disabled={loading || otpValue.length !== 4}
              className="border-none rounded-full py-2 max-w-[80%] px-6 w-full text-white opacity-95 hover:opacity-100 bg-primary disabled:bg-primary/70"
            >
              {loading ? "Loading..." : "Confirm"}
            </button>
            <hr className="h-2 w-full text-[#D7D7D7] mt-6 mb-3 text-lg" />
            <Link to="/login" className="text-center text-primary pb-4">
              Back to Sign in
            </Link>
          </div>
        )}
      </div>
      <span className="absolute bottom-0 left-0 w-[350px] h-[400px]" style={{backgroundImage: `url(${bgShape2})`}}></span>
    </section>
  );
}

export default ResetPassword;
