import { AutoInput } from "../../components/form/customInput";
import React, { useState } from "react";
import Button from "../../components/button";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { PasswordInput } from "../../components/form/PasswordInput";
import { Checkbox } from "../../components/form";
import { useApp } from "../../context/AppContext";
import { toast } from "react-toastify";
// import { signInUser, verifyEmail } from "../../services/authServices";
import Img1 from "../../assets/logo/ibloom5-final 1.png";
import bgImg from "../../assets/images/Rectangle 3.png";
import bgShape1 from "../../assets/images/IMAGE.png";
import bgShape2 from "../../assets/images/IMAGE-2.png";



type signinData = {
  email: string;
  password: string
};

const Signin: React.FC = () => {
  const { signIn } = useApp();
  const navigate = useNavigate()
  const location = useLocation();
  const { pathname } = location;
  const [isLoading, setIsLoading] = useState(false);

 

  const methods = useForm<userSignupData>();
  const [togglePassword, setTogglePassword] = React.useState(false);
  
  // const sendOTP = async (email:string) => {
  //   try {
  //   const response = await verifyEmail({
  //       email: email
  //     })
  //     toast.success(response.message)
  //     navigate("/email-verification");

  //   } catch (err:any) {
  //    toast.error(err.message)
  //   }
  // };

  const onSubmit = async (data: signinData) => {
    setIsLoading(true)
    const { errors } = methods.formState;

    // Check if there are any validation errors
    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
      return;
    }
   

    try {
    signIn(data)
    if (pathname.includes('validator')) {
      navigate("/app/validator/dashboard");
    } else {
      navigate("/app/superadmin/dashboard");
    }
   
      // console.log(response.data)
    } catch (err:any) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };
 

  return (
    <section className="relative bg-white">
      <span className="absolute right-0 top-0 w-[250px] h-[300px]"  style={{backgroundImage: `url(${bgShape1})`}}></span>
      <section className="w-full flex justify-center items-center min-h-screen">
        <div className="lg:w-1/2 grid justify-center rounded-3xl py-8 md:px-0 px-4 mt-20 z-9999 bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${bgImg})`}}>
          <div className="max-w-[450px] lg:max-w-[425px] xl:max-w-[450px] xl:min-w-[370px] 2xl:min-w-[450px]">
            <div className="mb-8 text-center flex flex-col items-center">
            <img src={Img1} alt="logo-img" className="" />
              <h1 className="text-lg mb-4 font-semibold dark:text-white">
                Log into your account
              </h1>
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
      </section>
      <span className="absolute bottom-0 left-0 w-[350px] h-[400px]" style={{backgroundImage: `url(${bgShape2})`}}></span>
    </section>
  );
};

export default Signin;
