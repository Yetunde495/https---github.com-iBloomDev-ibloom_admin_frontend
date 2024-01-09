// import React from 'react';
import CheckmarkLogo from "../../assets/images/Ok.svg";

function EmailVerification() {
  return (
    <section className="w-full min-h-screen form-bg bg-no-repeat">
      <h4 className="fixed left-6 font-semibold text-[15px] top-4 w-30 text-primary">
        ByteDegree
      </h4>
      <div className="flex flex-col justify-center items-center relative min-h-screen">
        <div className="mb-4 text-center">
          <h1 className="sm:text-[35px] mb-3 text-[25px] text-center font-cabin dark:text-white text-primary leading-[1.4]">
            Let's verify your email
          </h1>
          <p className="text-[18px] font-bold dark:text-white">
            A verification link was sent to your email
          </p>
        </div>

        <img src={CheckmarkLogo} className="" />
      </div>
    </section>
  );
}

export default EmailVerification;
