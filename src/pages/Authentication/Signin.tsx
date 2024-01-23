import GoogleLogo from "../../assets/google-logo.svg";
import Img1 from "../../images/auth/auth-img-1.jpg";
import Img2 from "../../images/auth/auth-img-3.jpg";
import Img3 from "../../images/auth/auth-img-2.jpg";
import { AutoInput } from "../../components/form/customInput";
import React, { useState } from "react";
import ImageCarousel from "../../components/ImageSlider";
import Button from "../../components/button";
import { Link, useNavigate} from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { PasswordInput } from "../../components/form/PasswordInput";
import { Checkbox } from "../../components/form";
import { useApp } from "../../context/AppContext";
import { toast } from "react-toastify";
import { signInUser, verifyEmail } from "../../services/authServices";

type signinData = {
  email: string;
  password: string
};

const Signin: React.FC = () => {
  const { signIn } = useApp();
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);

  const images = [Img1, Img2, Img3];
  const overlayText = [
    "Lorem ipsum dolor sit amet end world",
    "Lorem ipsum dolor sit amet end world artificial intelligence feature",
    "Ipsum dolor sit amet end world from your online solutions",
  ];

  const methods = useForm<userSignupData>();
  const [togglePassword, setTogglePassword] = React.useState(false);
  
  const sendOTP = async (email:string) => {
    try {
    const response = await verifyEmail({
        email: email
      })
      toast.success(response.message)
      navigate("/email-verification");

    } catch (err:any) {
     toast.error(err.message)
    }
  };

  const onSubmit = async (data: signinData) => {
    setIsLoading(true)
    const { errors } = methods.formState;

    // Check if there are any validation errors
    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
      return;
    }
   

    try {
      const response = await signInUser(data);
      if (response?.account_setup === false) {
        toast.warning("Account Setup is not complete")
        signIn({
          category: response?.category,
          user_id: response?.user_id,
          email: data?.email
        })
        navigate(`/account-setup/${response.category}`)
      } else if (response?.data?.email_verified === false) {
        signIn(response.data);
        sendOTP(response?.data.email)
      } else {
        toast.success(response.message)
        signIn(response.data);
        navigate(`/app/${response?.data?.category}s/dashboard`)
      }
      // console.log(response.data)
    } catch (err:any) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };
 



  return (
    <section className="w-full">
      <h4 className="fixed left-6 lg:left-[53%] font-semibold text-[15px] top-4 w-30 text-primary">ByteDegree</h4>
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
          <div className="lg:min-w-[420px]">
            <div className="mb-14 text-center">
              <h1 className="lg:text-3xl font-bold mb-3 sm:text-[30px] text-[25px] dark:text-white leading-[1.4]">
                Sign In
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
                {isLoading ? "Signing in..." : "Sign in With Google"}
              </Button>
            </div>

            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="max-w-[450px]"
              >
                <div>
                  <div>
                    <div className="grid gap-6">
                   

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
                      <div>
                      <PasswordInput
                        label="Password"
                        name="password"
                        placeholder="Password"
                        togglePassword={togglePassword}
                        onTogglePassword={setTogglePassword}
                        rules={{ required: "Password is required" }}
                      />
                      <div className="flex justify-between items-center gap-3">
                      <Checkbox
                       label="Remember Password"
                       name="remember_password"
                       rules={{required: false}}
                      />
                        
                      <Link className="text-primary text-sm font-cabin" to="/forgot-password">Forgot password?</Link>
                    </div> 
                      </div>
                     
                    </div>

                    <div className="mt-6">
                      <Button
                        type="submit"
                        width="full"
                        disabled={isLoading}
                        onClick={() => {}}
                      >
                        {isLoading ? "Loading..." : "Sign in"}
                      </Button>
                   

                      

                      <p className="text-center text-slate-400 mt-4 dark:text-slate-100">
                        Don't have an account?{" "}
                        <span>
                          <Link to="/signup">Create account</Link>
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

export default Signin;
