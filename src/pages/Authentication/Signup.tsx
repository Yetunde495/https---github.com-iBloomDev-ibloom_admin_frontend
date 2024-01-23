import GoogleLogo from "../../assets/google-logo.svg";
import Img1 from "../../images/auth/auth-img-1.jpg";
import Img2 from "../../images/auth/auth-img-3.jpg";
import Img3 from "../../images/auth/auth-img-2.jpg";
import { AutoInput } from "../../components/form/customInput";
import React, { useState } from "react";
import ImageCarousel from "../../components/ImageSlider";
import Button from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { PasswordInput } from "../../components/form/PasswordInput";
import { toast } from "react-toastify";
import Modal from "../../components/modal";
import { useApp } from "../../context/AppContext";
import { registerUser } from "../../services/authServices";

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const { signIn } = useApp();
  const [isLoading, setIsLoading] = useState(false);
  const [categoryModal, setCategoryModal] = useState(true);
  const [category, setCategory] = useState("");

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

    const updatedData = {
      ...data,
      account_setup: false,
      email_verified: false,
      category: category,
    };

    try {
      const response = await registerUser(updatedData);
      //  console.log(response)
      signIn({
        email: data?.email,
        category: category,
        user_name: data?.user_name,
        user_id: response?.data,
        token: response?.token,
      });
      //toast account created
      toast.success("Successfull!");
      navigate(`/account-setup/${category}`);
    } catch (err: any) {
      toast.error(
        err ||
          "Could not create the account! This may be an issue with our service, or your network. Please, try again"
      );
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
              <h1 className="text-2xl mb-4 font-semibold dark:text-white">
                Sign Up{" "}
                <span className="text-success text-base font-normal bg-success/10 px-3 py-1.5 rounded-xl">
                  as a {category}
                </span>
              </h1>
              <p className="mb-4 ml-3">
                Want to change what you are Signing up as?{" "}
                <span
                  className="text-primary/90 hover:text-primary cursor-pointer"
                  onClick={() => setCategoryModal(true)}
                >
                  Click here
                </span>{" "}
              </p>
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
                      <AutoInput
                        label="Username"
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
      <Modal
        show={categoryModal}
        onHide={() => {
          if (category !== "") {
            setCategoryModal(false);
          }
        }}
        onProceed={() => {}}
        closeButton={false}
        title={`Get Started`}
      >
        <div className="mb-8">
          <h4 className="text-2xl font-semibold">
            Why are you joining ByteDegree?
          </h4>
          <p>
            Select an answer that best describes why you wan to join ByteDegree
            to get the best experience.
          </p>
        </div>

        <div className="flex flex-col gap-3 mb-6">
          {/* Student Category */}
          <div
            className={`flex gap-2 items-start ${
              category === "student"
                ? "border-primary bg-primary/10"
                : "border-slate-300"
            } border  px-4 py-2 rounded-xl`}
          >
            <input
              type="radio"
              className="mt-[5.5px]"
              id="studentCategory"
              value="student"
              onChange={(e: any) => setCategory(e.target.value)}
              checked={category === "student"}
            />
            <div>
              <label
                htmlFor={"studentCategory"}
                className="dark:text-slate-100 font-semibold"
              >
                Student
              </label>
              <p className="text-sm">I’m here to learn and grow my career</p>
            </div>
          </div>

          {/* Tutor Category */}
          <div
            className={`flex gap-2 items-start ${
              category === "tutor"
                ? "border-primary bg-primary/10"
                : "border-slate-300"
            } border  px-4 py-2 rounded-xl`}
          >
            <input
              type="radio"
              className="mt-[5.5px]"
              id="tutorCategory"
              value="tutor"
              onChange={(e: any) => setCategory(e.target.value)}
              checked={category === "tutor"}
            />
            <div>
              <label
                htmlFor={"tutorCategory"}
                className="dark:text-slate-100 font-semibold"
              >
                Tutor
              </label>
              <p className="text-sm">
                Join ByteDegree as a Tutor, Instructor etc
              </p>
            </div>
          </div>

          {/* Organization Category */}
          <div
            className={`flex gap-2 items-start ${
              category === "organization"
                ? "border-primary bg-primary/10"
                : "border-slate-300"
            } border  px-4 py-2 rounded-xl`}
          >
            <input
              type="radio"
              className="mt-[5.5px]"
              id="organisationCategory"
              value="organisation"
              onChange={(e: any) => setCategory(e.target.value)}
              checked={category === "organisation"}
            />
            <div>
              <label
                htmlFor={"organisationCategory"}
                className="dark:text-slate-100 font-semibold"
              >
                Organization
              </label>
              <p className="text-sm">
                Join ByteDegree as a School, College, Company, etc
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            type="button"
            disabled={category === ""}
            onClick={() => setCategoryModal(false)}
          >
            Continue
          </Button>
        </div>
      </Modal>
    </section>
  );
};

export default Signup;
