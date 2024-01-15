// import React from 'react';
import { IoMdMail } from "react-icons/io";

function EmailVerification() {
  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <h4 className="fixed left-6 font-semibold text-[15px] top-4 w-30 text-primary">
        ByteDegree
      </h4>
      <div className="flex flex-col justify-center bg-white rounded-2xl items-center py-8 px-6 relative max-w-[35rem]">
        <IoMdMail size={62} className="text-primary mb-4" />
        <div className="mb-6 text-center">
          <h1 className="mb-3 text-[25px] text-black/90 text-center font-semibold dark:text-white leading-[1.4]">
            Confirm your email address
          </h1>
          <p className="text-lg dark:text-white">
            A verification link was sent to your email. Click on the link in the
            mail sent, to verify your email.
          </p>
        </div>
        <button className="border-primary border rounded py-2 px-6 text-white opacity-95 hover:opacity-100 bg-primary">
          I didn’t get a mail
        </button>
      </div>
    </section>
  );
}

export default EmailVerification;
