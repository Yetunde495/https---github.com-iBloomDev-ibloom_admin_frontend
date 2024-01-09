import { useNavigate, useSearchParams } from "react-router-dom";
import CheckmarkLogo from "../../assets/images/Ok.svg";
import Button from "../../components/button";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

function ResetVerification() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const [isLoading, setIsLoading] = useState(false);

  const resendVerificationMail = async () => {
    if (!email) {
      toast.error("Email not found");
      
      setTimeout(() => {
        toast.warn("Navigating to forgot password page");
      }, 500)

      setTimeout(() => {
        navigate("/forgot-password", {replace: true});
      }, 2000)
    } else {
      // if (res) {
        toast.success("Mail sent successfully. Please check your mail")
      // }
    }
  }
  useEffect(() => {

    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
    //
  }, [isLoading]);
  return (
    <section className="w-full min-h-screen form-bg bg-no-repeat">
      <h4 className="fixed left-6 font-semibold text-[15px] top-4 w-30 text-primary">
        ByteDegree
      </h4>
      <div className="flex flex-col justify-center items-center relative min-h-screen">
        <div className="mb-4 text-center">
          <h1 className="sm:text-[35px] mb-3 text-[25px] text-center font-cabin dark:text-white text-primary leading-[1.4]">
            Time to reset your password
          </h1>
          <p className="text-[18px] font-bold dark:text-white">
            Check your email, a link was sent
          </p>
        </div>

        <div>
          <img src={CheckmarkLogo} className="" />
          <p className="text-center font-semibold mb-5">
            Didn't get any email?
          </p>
          <Button onClick={resendVerificationMail} width="full" height="12">
          {isLoading ? "Loading..." : "Resend"}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ResetVerification;
