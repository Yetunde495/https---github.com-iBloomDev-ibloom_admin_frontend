import { FormProvider, useForm } from "react-hook-form";
import Button from "../../components/button";
import { AutoInput } from "../../components/form/customInput";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import lockImg from "../../images/auth/lock.svg";
import { IoMdMail } from "react-icons/io";


type resetPasswordData = {
  email: string;
};
function ResetPassword() {
  const methods = useForm<resetPasswordData>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess] = useState<boolean>(false);
  const onSubmit = async (data: resetPasswordData) => {
    
    const { errors } = methods.formState;

    // Check if there are any validation errors
    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
      return;
    }

    // if (res) {
      navigate(`/reset-verification?email=${data.email}`, {replace: true});
    // }

  };

  useEffect(() => {

    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
    //
  }, [isLoading]);
  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <h4 className="fixed left-6 font-semibold text-[15px] top-4 w-30 text-primary">
        ByteDegree
      </h4>
      <div className="flex flex-col justify-center items-center bg-white rounded-2xl py-8 px-6 relative max-w-[40rem]">
        {isSuccess ? <IoMdMail size={62} className="text-primary mb-4" />
:         <img src={lockImg} alt="lock-img" className="mb-3" />
}

      <h1 className="mb-3 text-[25px] text-center font-semibold dark:text-white leading-[1.4]">
          {isSuccess ? 'Password Reset' : 'Reset Password' }
        </h1>

       <p className="text-[16px] text-center mb-8 w-[80%]">{isSuccess ? 'A reset link has been sent to your mail. Click on the link to reset your password' : 'Enter your email, and a link will be sent to your email to help you reset your password'}</p>

        
      

        {!isSuccess ? (
          <div className="w-[80%]">
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)} className="max-w-[450px] p-4">
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
            <Button
              onClick={() => {
                navigate("/signin", { replace: true });
              }}
              width="full"
              height="20"
            >
              I didn't get a mail
            </Button> 
       )}
      </div>
    </section>
  );
}

export default ResetPassword;
