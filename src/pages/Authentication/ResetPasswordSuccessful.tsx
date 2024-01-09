import { useNavigate } from "react-router-dom";
import CheckmarkLogo from "../../assets/images/Ok.svg";
import Button from "../../components/button";

function ResetPasswordSuccessful() {
  const navigate = useNavigate();

  return (
    <section className="w-full min-h-screen form-bg bg-no-repeat">
      <h4 className="fixed left-6 font-semibold text-[15px] top-4 w-30 text-primary">
        ByteDegree
      </h4>
      <div className="flex flex-col justify-center items-center relative min-h-screen">
        <div className="mb-4 text-center">
          <h1 className="sm:text-[35px] mb-3 text-[25px] text-center font-cabin dark:text-white text-primary leading-[1.4]">
            Password reset successful
          </h1>
          <p className="text-[18px] font-bold dark:text-white">
            Your password has been changed successfully! Click on 'continue' to proceed to the login page.
          </p>
        </div>

        <div>
          <img src={CheckmarkLogo} className="" />
          {/* <p className="text-center font-semibold mb-5">
            Didn't get any email?
          </p> */}
          <Button onClick={() => {navigate("/login", {replace: true})}} width="full" height="12">
            Continue
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ResetPasswordSuccessful;
