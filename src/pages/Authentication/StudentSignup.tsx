import GoogleLogo from "../../assets/google-logo.svg";
import Img1 from "../../images/auth/auth-img-1.jpg";
import Img2 from "../../images/auth/auth-img-3.jpg";
import Img3 from "../../images/auth/auth-img-2.jpg";
import { AutoInput } from "../../components/form/customInput";
import React, { useEffect, useState } from "react";
import ImageCarousel from "../../components/ImageSlider";
import Button from "../../components/button";
import { Link } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { PasswordInput } from "../../components/form/PasswordInput";

type userSignupData = {
  full_name: string;
  email: string;
  password: string;
};

const Signup: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const images = [Img1, Img2, Img3];
  const overlayText = [
    "Lorem ipsum dolor sit amet end world",
    "Lorem ipsum dolor sit amet end world artificial intelligence feature",
    "Ipsum dolor sit amet end world from your online solutions",
  ];

  const methods = useForm<userSignupData>();
  const [togglePassword, setTogglePassword] = React.useState(false);

  const onSubmit = async (data: userSignupData) => {
    const { errors } = methods.formState;

    // Check if there are any validation errors
    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
      return;
    }
    console.log(data);
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
    <section className="w-full">
      <h4 className="fixed lg:left-[53%] left-6 font-semibold text-[15px] top-4 w-30 text-primary">ByteDegree</h4>
      <div className="flex relative lg:justify-normal justify-center items-center px-4 md:px-10 lg:px-0">
      <div className="lg:w-2/4 text-black pl-9 lg:block hidden h-screen relative">
          <div className="fixed top-0 left-0 w-1/2 h-screen">
            <ImageCarousel
              images={images}
              showControls={false}
              overlayText={overlayText}
            />
          </div>
        </div>
        <div className="lg:w-1/2 grid justify-center pt-18 pb-14">
          <div className="max-w-[450px] lg:max-w-[425px] xl:max-w-[450px]">
            <div className="mb-14 text-center">
              <h1 className="lg:text-3xl font-bold  sm:text-[30px] text-[25px] dark:text-white leading-[1.4]">
                Sign Up
              </h1>
              <div className="flex items-center mb-3 mt-1">
                <hr className="border-t-2  w-[80%] border-zinc-300" />
                <span className="mx-2 text-lg text-center rounded-md py-1 px-2 text-slate-400">
                  or
                </span>
                <hr className="border-t-2  w-[80%] border-zinc-300" />
              </div>

              <Button
                variant="transparent"
                onClick={() => {}}
                width="full"
                disabled={isLoading}
              >
                <img src={GoogleLogo} className="w-6" />{" "}
                {isLoading ? "Signing in..." : "Sign up With Google"}
              </Button>
            </div>

            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="max-w-[480px]"
              >
                <div>
                  <div>
                    <div className="grid gap-6">
                      <AutoInput
                        label="Full Name"
                        name="full_name"
                        placeholder="Enter your full name"
                        rules={{ required: "Full Name is required" }}
                      />

                      <AutoInput
                        label="Email address"
                        name="email"
                        placeholder="Email"
                        rules={{
                          required: "Email is required",
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email address",
                          },
                        }}
                      />
                      <PasswordInput
                        label="Password"
                        name="password"
                        placeholder="Password"
                        togglePassword={togglePassword}
                        onTogglePassword={setTogglePassword}
                        rules={{ required: "Password is required" }}
                      />
                    </div>

                    <div className="mt-10">
                      <Button
                        type="submit"
                        width="full"
                        disabled={isLoading}
                        onClick={() => {}}
                      >
                        {isLoading ? "Loading..." : "Create account"}
                      </Button>

                      <div className="text-center mt-4 mb-4 text-sm font-light">
                        By signing up, you agree to our 
                        <span>
                          <Link to="#"> terms and conditions</Link>
                        </span>
                      </div>

                      <p className="text-center text-slate-400 dark:text-slate-100">
                        Already have an account?{" "}
                        <span>
                          <Link to="/signin">Log in</Link>
                        </span>
                      </p>
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
};

export default Signup;
