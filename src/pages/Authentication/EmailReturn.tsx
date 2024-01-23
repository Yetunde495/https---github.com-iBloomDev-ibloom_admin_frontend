import { useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import MailCheckmark from "../../images/auth/mail-checkmark.svg";

function EmailReturn() {
  const { user } = useApp();
  const navigate = useNavigate();
  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <h4 className="fixed left-6 font-semibold text-[15px] top-4 w-30 text-primary">
        ByteDegree
      </h4>
      <div className="flex flex-col gap-4 justify-center items-center bg-white rounded-2xl py-8 px-9 relative w-[35rem]">
        <img src={MailCheckmark} className="" />
        <div className="mb-4 text-center">
          <h1 className="mb-3 text-[25px] text-center font-semibold dark:text-white text-black/90 leading-[1.4]">
            Email Confirmed
          </h1>
          <p className="text-lg dark:text-white">
            You’ve successfully confirmed your email address. You can now access
            your dashboard
          </p>
        </div>

        <button
          className="border-primary border w-full rounded-lg py-2 px-6 text-white opacity-95 hover:opacity-100 bg-primary"
          onClick={() => {
            if (user?.category === ("organisation" || "tutor")) {
              navigate(`/app/tutors/dashboard`);
            } else {
              navigate(`/app/students/dashboard`);
            }
          }}
        >
          Go to Dashboard
        </button>
      </div>
    </section>
  );
}

export default EmailReturn;
