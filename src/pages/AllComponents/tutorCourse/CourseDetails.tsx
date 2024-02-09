import { BsCurrencyDollar } from "react-icons/bs";
import Button from "../../../components/button";
import {
  FormGroup,
  InputWithIcon,
  Textarea,
} from "../../../components/form";
import { FormProvider, useForm } from "react-hook-form";
import { AutoInput } from "../../../components/form/customInput";
import Select from "../../../components/form/customSelect";
import ReactSelect from "react-select";
import { CourseImageUpload, CourseVideoUpload } from "./FileUpload";
import { useState } from "react";

const CourseDetails = () => {
  const methods = useForm<FormData>();
  const [selectedUsers, setSelectedUsers] = useState<any[]>([]);
  const [users] = useState<any[]>([
   {label: "UI",
    value: "UI"
  }, 
    {label:"Development",
     value: "Development"
  }
  ]);

  const onSubmit = (data: FormData) => {
    //   setIsLoading(true)
    const { errors } = methods.formState;

    // Check if there are any validation errors
    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
      return; // Exit the function if there are errors
    }
    console.log(data);
  };
  return (
    <div>
      <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>

        <FormGroup>
          <AutoInput
            label="Course Name"
            name="title"
            placeholder="Enter Course Name"
            rules={{ required: "This field is required" }}
          />

          <InputWithIcon
            label="Price"
            name="course_price"
            placeholder="0"
            leftIcon
            icon={<BsCurrencyDollar />}
          />
        </FormGroup>

        <FormGroup>
          <Textarea
            label="Course Description"
            name="description"
            placeholder="Enter course description"
            rules={{
              required: "Course Description is required",
            }}
          />
        </FormGroup>

        <FormGroup>
          <AutoInput
            label="Category"
            name="category"
            placeholder="Enter Course Category"
            rules={{ required: "This field is required" }}
          />

          <AutoInput
            label="Sub-Category"
            name="sub_category"
            placeholder="Enter Course Sub-Category"
            rules={{ required: "This field is required" }}
          />
        </FormGroup>

        <FormGroup>
          <Select
            label="Duration"
            name="duration"
            rules={{ required: "Please select a duration" }}
          >
            <option value="">Select duration...</option>
            <option>1-2 Weeks</option>
            <option>3-4 Weeks</option>
          </Select>

          <Select
            label="Level"
            name="level"
            rules={{ required: "Please select a level" }}
          >
            <option value="">Select a level...</option>
            <option>Beginner</option>
            <option>Intermediate</option>
          </Select>
        </FormGroup>

        <div className="py-6">
          <ReactSelect isMulti options={users} />
        </div>


        <div className="py-6">
        <label
          className="mb-2 text-[#344054] dark:text-slate-100"
        >
        Course Cover Image
        </label>
          <CourseImageUpload />
        </div>

        <div className="py-6">
        <label
          className="mb-2 text-[#344054] dark:text-slate-100"
        >
       Course Trailer/ Preview Video
        </label>
          <CourseVideoUpload />
        </div>

        <div className="flex justify-end gap-x-5 mt-10">
        <button className="text-zinc-500">Cancel</button>
        <Button type="submit" onClick={() => {}} text="Next" />
      </div>
       </form>
      </FormProvider>

      {/* <div className="flex justify-end gap-x-5 mt-10">
        <button className="text-zinc-500">Cancel</button>
        <Button type="submit" onClick={() => onSubmit(methods.getValues())} text="Save" />
      </div> */}
    </div>
  );
};

export default CourseDetails;
