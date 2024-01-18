// import React from 'react';
import { useApp } from "../../context/AppContext";
import classNames from "classnames";
import lockImg from "../../images/auth/lock.svg";
import { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function EmailVerification() {
  const { user, updateUser } = useApp();
  const navigate = useNavigate();

  const inputRefs = Array.from({ length: 6 }, () =>
    useRef<HTMLInputElement | null>(null)
  );

  const [otpValue, setOtpValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [loading, setLoading] = useState(false);

  const ResendOTP = async () => {
    try {
      const response: any = await axios
        .post("/emailverify", user?.email)
        .catch((e) => ({ error: e }));

      //when API respond with an error
      if (response && response?.error) {
        toast.error(response?.error?.response?.data?.message);
        return;
      }

      //when account is created successfully
      if (response?.status === 200) {
        toast(
          `OTP has been resent to your email ${user?.email}. Check your spam folder if it doesn't show up in your inbox`
        );
      } else {
        //when an unknown error occurs
        toast.error(
          "An error occurred while processing this request! This may be an issue with our service, or your network. Please, try again"
        );
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleVerifyOTP = async () => {
    setLoading(true);
    const data = {
      otp: otpValue,
      user_id: user?.user_id,
    };

    try {
      const response: any = await axios
        .post("/veriy-token", data)
        .catch((e) => ({ error: e }));

      //when API respond with an error
      if (response && response?.error) {
        toast.error(response?.error?.response?.data?.message);
        setIsValid(false);
        return;
      }

      //when account is verified successfully
      if (response?.status === 200) {
        setIsValid(true);
        updateUser({
          ...user,
          email_verified: true,
        });
        //toast account verified
        toast.success("Account verification Successfull!");
        navigate(`/email-return`);
      } else {
        //when an unknown error occurs
        toast.error(
          "Could not create the account! This may be an issue with our service, or your network. Please, try again"
        );
        return;
      }
    } catch (err) {
      console.log(err);
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
      "border-slate-300",
      "p-2",
      "w-12 rounded focus:border-slate-400 outline-none",
      "text-center",
      {
        "border-red-500": !isValid,
        "border-primary": isValid,
      }
    );
  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <h4 className="fixed left-6 font-semibold text-[15px] top-4 w-30 text-primary">
        ByteDegree
      </h4>
      <div className="flex flex-col justify-center bg-white rounded-2xl items-center py-8 px-20 relative max-w-[35rem]">
        <img src={lockImg} alt="lock-img" className="mb-4" />
        <div className="mb-4 text-center">
          <h1 className="text-[25px] text-black/90 text-center font-semibold dark:text-white leading-[1.4]">
            Enter OTP
          </h1>
          <p className="text-base dark:text-white">
            An OTP code was sent to your email. Enter the code to verify your
            email.
          </p>
        </div>
        <small
          className={`${
            !isValid ? "text-red-500" : "text-slate-400"
          } text-left my-2`}
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
            Resend OTP
          </span>
        </p>
      </div>
    </section>
  );
}

export default EmailVerification;
