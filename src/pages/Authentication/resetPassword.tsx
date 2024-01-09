import { FormProvider, useForm } from "react-hook-form";
import Button from "../../components/button";
import { AutoInput } from "../../components/form/customInput";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

type resetPasswordData = {
  email: string;
};
function ResetPassword() {
  const methods = useForm<resetPasswordData>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
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
    <section className="w-full min-h-screen form-bg bg-no-repeat">
      <h4 className="fixed left-6 font-semibold text-[15px] top-4 w-30 text-primary">
        ByteDegree
      </h4>
      <div className="flex justify-center items-center relative min-h-screen px-4 md:px-10">
        <div className="max-w-[450px]">
          <div className="mb-16 text-center">
            <h1 className="sm:text-[35px] mb-3 text-[25px] text-center font-cabin dark:text-white text-primary leading-[1.4]">
              Time to reset your password!
            </h1>
            <p className="text-[18px] font-bold dark:text-white">
              A link will be sent to your email to help you reset your password
            </p>
          </div>

          <div>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)} className="max-w-[450px]">
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

                    <div className="py-2">
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
        </div>
      </div>
    </section>
  );
}

export default ResetPassword;
