import { FormProvider, useForm } from "react-hook-form";
import ProfilePicture from "../../PageComponents/ProfilePhoto";
import { AutoInput } from "../../../components/form/customInput";
import PhoneInput from "react-phone-number-input";
import { useEffect, useRef, useState } from "react";
// import { toast } from "react-toastify";
import { Switch } from "../../../components/form/Switch";
import Collapsible from "../../../components/Collapsible";
import Button from "../../../components/button";
import { toast } from "react-toastify";
import { FormGroup } from "../../../components/form";
import { findChangedFields } from "../../../utils/findChangedFields";
import Modal from "../../../components/modal";
import classNames from "classnames";
import UpdatePassword from "../../Authentication/UpdatePassword";

const Profile: React.FC = () => {
  const methods = useForm<any>();
  const emailmethods = useForm<any>();
  const user = {
    photo: "",
    first_name: "Ada",
    last_name: "Ujunwa",
    username: "User01",
    email: "user01@gmail.com",
    country: "AS",
    phone_number: "+2349091137894",
  };
  const [value, setValue] = useState<any>(user?.phone_number);

  const [active, setActive] = useState(false);
  const [emailOpen, setEmailOpen] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);

  const [loading, setLoading] = useState(false);

  const [otpModal, setOtpModal] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [isValid, _setIsValid] = useState(true);
  const [countdown, setCountdown] = useState(120); // 2 minutes in seconds
  const [isCounting, setIsCounting] = useState(true);
  const [otpLoading, _setOtpLoading] = useState(true);
  const inputRefs = Array.from({ length: 4 }, () =>
    useRef<HTMLInputElement | null>(null)
  );

 

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
      "w-12 rounded focus:border-primary outline-none shadow-md",
      "text-center",
      {
        "border-red-500": !isValid,
        "border-slate-100": isValid,
      }
    );
  const updateProfile = async (data: any) => {
    const { errors } = emailmethods.formState;
    // Check if there are any validation errors
    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
      return;
    }
    try {
      setLoading(true);
      const finalData = findChangedFields(user, {
        ...data,
        phone_number: value.toString(),
      });
      console.log(finalData);
    } catch (err: any) {
      toast.error(
        err?.message ||
          "An error occurred while processing this request. Please try again"
      );
    } finally {
      setLoading(false);
    }
  };
  const changeEmail = async (data: any) => {
    const { errors } = emailmethods.formState;
    // Check if there are any validation errors
    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
      return;
    }
    try {
      setEmailLoading(true);
      console.log(data);
      setOtpModal(true);
    } catch (err: any) {
      toast.error(
        err?.message ||
          "An error occurred while processing this request. Please try again"
      );
    } finally {
      setEmailLoading(false);
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
    <section className="py-3 md:px-8 px-1 dark:bg-boxdark">
      <div className="flex items-center justify-center gap-3 w-full">
        <ProfilePicture user={user} />
      </div>

      <div className="w-full my-14 flex justify-center">
        <FormProvider {...methods}>
          <form
            className="flex flex-col gap-7 w-full"
            onSubmit={methods.handleSubmit(updateProfile)}
          >
            <FormGroup>
              <AutoInput
                label="First Name"
                name="first_name"
                defaultValue={user?.first_name}
                rules={{
                  required: "First name is required",
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message:
                      "Invalid! name must contain only alphabetical characters",
                  },
                }}
              />

              <AutoInput
                label="Last Name"
                name="last_name"
                defaultValue={user?.last_name}
                placeholder="Enter a preferred username"
                rules={{
                  required: "First name is required",
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message:
                      "Invalid! name must contain only alphabetical characters",
                  },
                }}
              />
            </FormGroup>

            <FormGroup>
              <div className="w-[48%]">
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
                  onChange={setValue}
                />
              </div>
            </FormGroup>

            <Button rounded={false} onClick={() => {}} width="64">
              {loading ? "Loading" : "Update Profile"}
            </Button>
          </form>
        </FormProvider>
      </div>

      <div className="border border-stroke rounded-md py-3 px-4">
        <Collapsible
          isOpen={emailOpen}
          onToggle={() => setEmailOpen(!emailOpen)}
          title="Update Email"
          desc="click here to change your email"
        >
          <FormProvider {...emailmethods}>
            <form
              className="w-2/3 flex flex-col gap-7"
              onSubmit={emailmethods.handleSubmit(changeEmail)}
            >
              <AutoInput
                label="Email"
                name="current_email"
                placeholder="Email"
                defaultValue={user?.email}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                }}
              />

              <AutoInput
                label="Email"
                name="new_email"
                placeholder="Enter new email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                }}
              />

              <Button onClick={() => {}} type="submit">
                {emailLoading ? "Loading..." : "Update Email"}
              </Button>
            </form>
          </FormProvider>
        </Collapsible>
      </div>

      <div className="flex xl:flex-row flex-col gap-5 items-center my-20 ">
        <div className="xl:w-1/2">
          <p className="text-lg mb-2">Password</p>
          <div className="flex gap-3 justify-between items-center rounded-lg border border-[#D9D9D980] px-5 py-6">
            <div className="w-3/5">
              <h4 className="text-lg mb-2">Password has been set</h4>
              <p className="">
                Choose a unique password, at least 8 characters long{" "}
              </p>
            </div>
            <div className="">
              <UpdatePassword />
            </div>
          </div>
        </div>
        <div className="xl:w-1/2">
          <p className="text-lg mb-2">Notification</p>
          <div className="flex gap-3 justify-between items-center rounded-lg border border-[#D9D9D980] px-5 py-6 w-full">
            <div className="">
              <h4 className="text-lg mb-2">Notification Pop up</h4>
              <p className="">
                Get in-app notification pop up to find out <br /> whats
                happening when online
              </p>
            </div>
            <div className="">
              <Switch
                value={active}
                onChange={() => {
                  if (active === true) {
                    setActive(false);
                  } else {
                    setActive(true);
                  }
                }}
                checked={active}
                className="switch-color"
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={otpModal}
        onHide={() => setOtpModal(false)}
        title="OTP Verification"
      >
        <h3 className="text-center mb-5 font-medium">
          An OTP has be sent to your new email address. Enter the code <br /> to verify
          your email
        </h3>
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
                  // ResendOTP();
                }
              }}
            >
              {otpLoading ? "Resending" : isCounting ? "Resend in" : "Resend"}{" "}
              {isCounting && (
                <span>
                  ({Math.floor(countdown / 60)}:
                  {(countdown % 60).toString().padStart(2, "0")})
                </span>
              )}
            </span>
          </p>
          <button
            onClick={() => {}}
            disabled={loading || otpValue.length !== 4}
            className="border-none rounded-full py-2 max-w-[80%] px-6 w-full text-white opacity-95 hover:opacity-100 bg-primary disabled:bg-primary/70"
          >
            {loading ? "Loading..." : "Confirm"}
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default Profile;
