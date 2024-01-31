import { AutoInput } from "../../components/form/customInput";
import React, {useState } from "react";
import Button from "../../components/button";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Modal from "../../components/modal";

import { FormGroup } from "../../components/form";
import { BsArrowRight } from "react-icons/bs";
import Select from "../../components/form/customSelect";
import EduLevels from "../../data/eduLevels.json";
import Categories from "../../data/courseCategories.json";
import { useApp } from "../../context/AppContext";
import CourseCategories from "./categorySelection";
import { useNavigate } from "react-router-dom";
import { updateStudent, verifyEmail } from "../../services/authServices";
import UploadProfilePhoto from "./uploadProfilephoto";

const StudentAccountSetup: React.FC<any> = () => {
  const { user, updateUser } = useApp();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [categoryModal, setCategoryModal] = useState(false);
  const [url, setUrl] = useState('');

  const [data, setData] = useState<any>(null);
  const [stage, setStage] = useState<number>(1);

  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

  const handleCategoryChange = (selectedCategories: string[]) => {
    setSelectedCourses(selectedCategories);
  };

 

  const methods = useForm<Student>();

  const onSubmit = (data: Student) => {
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
      interested_fields: selectedCourses,
      photo_url: url
    };
    setData(updatedData);
    setStage(2);
  };

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

  const updateData = async () => {
    setIsLoading(true);
    const completeData = {
      ...data,
      interested_fields: selectedCourses,
    };

    try {
      const response = await updateStudent(completeData);
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
 

  return (
    <section className="flex w-full relative min-h-screen justify-center items-center">
      <h4 className="fixed left-6 font-semibold text-[15px] top-4 w-30 text-primary" >
        ByteDegree
      </h4>
      <div className="flex flex-col justify-center md:mx-0 mx-6 bg-white my-24 py-5 rounded-2xl max-w-[45rem]">
        <div className="">
          <div className="flex justify-center text-center items-center border-b-4 border-[#EBECFA]">
            <h3 className="pb-2 text-xl font-bold text-center text-black dark:text-white sm:text-2xl">
              {stage === 1
                ? "Complete your profile"
                : "What courses are you interested in?"}
            </h3>
          </div>

          <div className="px-12 py-6">
            <div className="mb-8">
              <h4 className="text-2xl font-semibold">
                {stage === 1
                  ? "Personal Details"
                  : "What courses are you interested in?"}
              </h4>
              <p className="text-sm">
                {stage === 2
                  ? "Choose your preferred courses to personalize your experience and align our offerings with your academic interests"
                  : "Please complete the following personal details to enhance your user experience and facilitate seamless communication. Your information is used solely for account management and communication purposes"}
              </p>
            </div>

            {stage === 1 ? (
              <>
              <UploadProfilePhoto user={user} setUrl={setUrl} />
              <FormProvider {...methods}>              
                <form
                  onSubmit={methods.handleSubmit(onSubmit)}
                  // className="max-w-[480px]"
                >
                  <div>
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
                            <option>Others</option>
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
                        <Button type="submit" onClick={() => {}}>
                          <span className="flex items-center gap-3">
                            Next <BsArrowRight />
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </FormProvider>
              </>
            ) : (
              <div>
                <CourseCategories
                  categories={Categories}
                  onSelectChange={handleCategoryChange}
                />
                <div className="mt-10 flex gap-4 justify-between">
                  <Button type="button" onClick={() => setStage(1)}>
                    Back
                  </Button>
                  <Button
                    type="button"
                    disabled={isLoading || selectedCourses.length < 5}
                    onClick={() => updateData()}
                  >
                    <span className="flex items-center gap-3">
                      {isLoading ? "Loading..." : "Complete Profile"}
                    </span>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Modal
        show={categoryModal}
        onHide={() => setCategoryModal(false)}
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

        <div className="flex justify-end">
          <Button type="button" onClick={() => {}}>
            Next
          </Button>
        </div>
      </Modal>
    </section>
  );
};

export default StudentAccountSetup;
