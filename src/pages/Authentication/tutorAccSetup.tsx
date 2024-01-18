import { AutoInput } from "../../components/form/customInput";
import React, { useState } from "react";
import Button from "../../components/button";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import getUserInitials from "../../utils/getUserInitials";
import Avatar from "../../components/Avatar2";
import { FormGroup } from "../../components/form";
import { BsArrowRight } from "react-icons/bs";
import Select from "../../components/form/customSelect";
import EduLevels from "../../data/eduLevels.json";
import { useApp } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const TutorAccountSetup: React.FC<any> = () => {
  const { user, updateUser } = useApp();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [user1] = useState({
    photo: "",
    user_name: "Test",
  });

  const methods = useForm<Tutor>();

  const sendOTP = async () => {
    try {
      const response: any = await axios
        .post("/emailverify", user?.email)
        .catch((e) => ({ error: e }));

      //when API respond with an error
      if (response && response?.error) {
        toast.error(response?.error?.response?.data?.message);
        return;
      }

      //when account is created successfully
      if (response?.status === 200) {
        navigate("/email-verification");
      } else {
        //when an unknown error occurs
        toast.error(
          "An error occurred while processing this request! This may be an issue with our service, or your network. Please, try again"
        );
        return;
      }
    } catch (err) {
      console.log(err);
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
      programs: [],
      courses: [],
    };

    try {
      const response: any = await axios
        .post("/tutors", updatedData)
        .catch((e) => ({ error: e }));

      //when API respond with an error
      if (response && response?.error) {
        toast.error(response?.error?.response?.data?.message);
        return;
      }

      //when account is created successfully
      if (response?.status === 200) {
        toast.success(response?.data.message + "");
        updateUser(response?.data.data);
        sendOTP();
      } else {
        //when an unknown error occurs
        toast.error(
          "Could not finish setting up the account! This may be an issue with our service, or your network. Please, try again"
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

            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(onSubmit)}
                // className="max-w-[480px]"
              >
                <div>
                  <div>
                    <div className="mb-6 flex gap-9 items-center">
                      <Avatar
                        size="xl"
                        initials={
                          user1?.photo === ""
                            ? getUserInitials(user?.user_name || "User", "")
                            : undefined
                        }
                        src={user1?.photo === "" ? undefined : user1?.photo}
                      />
                    </div>
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
                          Next <BsArrowRight />
                        </span>
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
};

export default TutorAccountSetup;
