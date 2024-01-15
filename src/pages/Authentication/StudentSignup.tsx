import GoogleLogo from "../../assets/google-logo.svg";
import Img1 from "../../images/auth/auth-img-1.jpg";
import Img2 from "../../images/auth/auth-img-3.jpg";
import Img3 from "../../images/auth/auth-img-2.jpg";
import { AutoInput } from "../../components/form/customInput";
import React, { useState } from "react";
import ImageCarousel from "../../components/ImageSlider";
import Button from "../../components/button";
import { Link } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { PasswordInput } from "../../components/form/PasswordInput";
import { toast } from "react-toastify";
import axios from "axios";
import Select from "../../components/form/customSelect";

type userSignupData = {
  user_name: string;
  email: string;
  password: string;
  category: string;
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
    setIsLoading(true);
    const { errors } = methods.formState;
    // Check if there are any validation errors
    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
      return;
    }
    try {
      const response: any = await axios
        .post("/register", data)
        .catch((e) => ({ error: e }));


      console.log(response);

      //when API respond with an error
      if (response && response?.error) {
        toast.error(response?.error?.message);
        return;
      }

      //when account is created successfully
      if (response?.status === 200) {
        //toast account created
        toast.success(response?.data.message + "");

      // "You have successfully created an account. Check your email for the OTP to verify your email"


        // //navigate to email verification
        // navigate("/auth/steptwo");
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
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full">
      <h4 className="fixed lg:left-[53%] left-6 font-semibold text-[15px] top-4 w-30 text-primary">
        ByteDegree
      </h4>
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
          <div className="max-w-[450px] lg:max-w-[425px] xl:max-w-[450px] xl:min-w-[370px] 2xl:min-w-[450px]">
            <div className="mb-14 text-center">
              <h1 className="lg:text-3xl font-bold mb-3 sm:text-[30px] text-[25px] dark:text-white leading-[1.4]">
                Sign Up
              </h1>
              {/* <div className="flex items-center mb-3 mt-1">
                <hr className="border-t-2  w-[80%] border-zinc-300" />
                <span className="mx-2 text-lg text-center rounded-md py-1 px-2 text-slate-400">
                  or
                </span>
                <hr className="border-t-2  w-[80%] border-zinc-300" />
              </div> */}

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
                      <Select
                        label="Signup as a "
                        name="category"
                        defaultValue="student"
                        rules={{ required: "Please select a user type" }}
                      >
                        <option value="student" selected>
                          Student
                        </option>
                        <option value="tutor">Tutor</option>
                      </Select>
                      <AutoInput
                        label="Userame"
                        name="user_name"
                        placeholder="Enter a preferred username"
                        rules={{
                          required: "Username is required",
                        }}
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
                        rules={{
                          required: "Password is required",
                          pattern: {
                            value: /^(?=.*[A-Z]).{8,}$/,
                            message:
                              "Invalid password! password must contain at least one uppercase character, and a minimum of 8 characters",
                          },
                        }}
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
