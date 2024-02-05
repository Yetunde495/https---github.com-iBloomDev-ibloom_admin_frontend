import { AutoInput } from "../../components/form/customInput";
import React, { useState } from "react";
import Button from "../../components/button";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FormGroup } from "../../components/form";
// import { BsArrowRight } from "react-icons/bs";
import Select from "../../components/form/customSelect";
import EduLevels from "../../data/eduLevels.json";
import { useApp } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { updateTutor, verifyEmail } from "../../services/authServices";
import UploadProfilePhoto from "./uploadProfilephoto";

const TutorAccountSetup: React.FC<any> = () => {
  const { user, updateUser } = useApp();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState("");

  // const [user1] = useState({
  //   photo: "",
  //   user_name: "Test",
  // });

  const methods = useForm<Tutor>();

  const sendOTP = async () => {
    try {
      const response = await verifyEmail({
        email: user?.email,
      });
      toast.success(response.message);
      navigate("/email-verification");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const onSubmit = async (data: Tutor) => {
    setIsLoading(true);
    const { errors } = methods.formState;
    // Check if there are any validation errors
    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
      return;
    }
    const updatedData = {
      ...data,
      category: user?.category,
      email: user?.email,
      user_id: user?.user_id,
      email_verified: false,
      photo_url: url,
      programs: [],
      courses: [],
    };

    try {
      const response = await updateTutor(updatedData);
      toast.success(response?.message);
      updateUser(response?.data);
      sendOTP();
    } catch (err: any) {
      toast.error(
        err.message ||
          "Could not finish setting up the account! This may be an issue with our service, or your network. Please, try again"
      );
    } finally {
      setIsLoading(false);
    }
  };

  // console.log(user)

  return (
    <section className="flex w-full relative min-h-screen justify-center items-center">
      <h4 className="fixed left-6 font-semibold text-[15px] top-4 w-30 text-primary">
        ByteDegree
      </h4>
      <div className="flex flex-col justify-center md:mx-0 mx-6 bg-white my-24 py-5 rounded-2xl max-w-[45rem]">
        <div className="">
          <div className="flex justify-center text-center items-center border-b-4 border-[#EBECFA]">
            <h3 className="pb-2 text-xl font-bold text-center text-black dark:text-white sm:text-2xl">
              Complete your profile
            </h3>
          </div>

          <div className="px-12 py-6">
            <div className="mb-8">
              <h4 className="text-2xl font-semibold">Personal Details</h4>
              <p className="text-sm">
                Please complete the following personal details to enhance your
                user experience and facilitate seamless communication. Your
                information is used solely for account management and
                communication purposes
              </p>
            </div>

            <UploadProfilePhoto user={user} setUrl={setUrl} />
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(onSubmit)}
                // className="max-w-[480px]"
              >
                <div>
                  <div className="grid gap-6">
                    <FormGroup>
                      <Select
                        label="Gender"
                        name="gender"
                        rules={{ required: false }}
                      >
                        <option value="">Select a gender...</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option value="Others">Others</option>
                      </Select>

                      <Select
                        label="Title"
                        name="title"
                        rules={{ required: false }}
                      >
                        <option value="">Mr/Mrs/Miss</option>
                        <option>Mr</option>
                        <option>Mrs</option>
                        <option>Miss</option>
                        <option>Others</option>
                      </Select>
                    </FormGroup>

                    <FormGroup>
                      <AutoInput
                        label="First Name"
                        name="first_name"
                        placeholder="Enter first name"
                        rules={{
                          required: "Username is required",
                        }}
                      />

                      <AutoInput
                        label="Last Name"
                        name="last_name"
                        placeholder="Enter last name"
                        rules={{
                          required: "Username is required",
                        }}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Select
                        label="Level of Education"
                        name="highest_edu"
                        rules={{ required: "This field is required" }}
                      >
                        <option value="">Select...</option>
                        {EduLevels.map((val: string, index: number) => (
                          <option key={index}>{val}</option>
                        ))}
                      </Select>

                      <AutoInput
                        type="date"
                        label="Date of Birth"
                        name="dob"
                        // placeholder="Enter a preferred username"
                        rules={{
                          required: "This field is required",
                        }}
                      />
                    </FormGroup>
                  </div>

                  <div className="mt-10 flex justify-end">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      onClick={() => {}}
                    >
                      <span className="flex items-center gap-3">
                        {/* Next <BsArrowRight /> */}
                        {isLoading ? "Loading" : "Submit"}
                      </span>
                    </Button>
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

export default TutorAccountSetup;
