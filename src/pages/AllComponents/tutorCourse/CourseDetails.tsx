import { BsCurrencyDollar } from "react-icons/bs";
import Button from "../../../components/button";
import { FormGroup, InputWithIcon, Textarea } from "../../../components/form";
import { FormProvider, useForm } from "react-hook-form";
import { AutoInput } from "../../../components/form/customInput";
import Select from "../../../components/form/customSelect";
import CreatableSelect from "react-select/creatable";
import { CourseImageUpload, CourseVideoUpload } from "./FileUpload";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { createCourse } from "../../../services/tutorCourseServices";
import { useApp } from "../../../context/AppContext";
import SuccessModal from "../../../components/modal/Success";
import { useNavigate } from "react-router-dom";

type Props = {
  courseData: any;
  setCourseData: any;
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
};

const CourseDetails: React.FC<Props> = ({
  courseData,
  setCourseData,
  activeStep,
  setActiveStep,
}) => {
  const { user } = useApp();
  const navigate = useNavigate();
  const methods = useForm<FormData>();
  // const selectRef = useRef<string>();
  const [selected, setSelected] = useState<any[]>([]);
  const [imgUrl, setImgUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [tags, setTags] = useState<any[]>([
    { label: "UI", value: "UI" },
    { label: "Development", value: "Development" },
  ]);

  const [show, setShow] = useState(false);

  //customizing the select component data
  const handleChange = (selectedOptions: any, actionMeta: any) => {
    // Check if the user is creating a new option
    if (actionMeta.action === "create-option") {
      // Create a new option object using the selected value
      const newOption = {
        value: selectedOptions[selectedOptions.length - 1].value,
        label: selectedOptions[selectedOptions.length - 1].value,
      };

      // Add the new option object to the options array
      const newOptions = [...tags, newOption];

      // Update the options prop to include the new option
      setTags(newOptions);
    }
    // Map over the selected options and return an array of their values

    const selectedValues = selectedOptions.map((tag: any) => tag.value);
    setSelected(selectedValues);
    // let acc = data;
    // acc.skills = selectedValues;
    // setData(acc);
  };

  const onSubmit = async (data: any) => {
    //   setIsLoading(true)
    const { errors } = methods.formState;

    // Check if there are any validation errors
    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
      return; // Exit the function if there are errors
    }

    try {
      const resp = await createCourse({
        tags: selected,
        cover_image: imgUrl,
        preview_video: videoUrl,
        published: false,
        tutors: [user?.user_id],
        visibility: "public",
        curriculum_id: "",
        ...data,
      });

      if (resp) {
        setShow(true);
        setCourseData(resp);
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err.message);
    }
  };

  useEffect(() => {
    setSelected(courseData?.tags);
  }, [courseData?.tags]);

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <FormGroup>
            <AutoInput
              label="Course Name"
              name="name"
              defaultValue={courseData.title}
              placeholder="Enter Course Name"
              rules={{ required: "This field is required" }}
            />

            <InputWithIcon
              label="Price"
              name="price"
              placeholder="0"
              defaultValue={courseData.course_price}
              leftIcon
              icon={<BsCurrencyDollar />}
              rules={{ required: "Please, enter a price for this course" }}
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

          <FormGroup>
            <div className="w-full flex flex-col">
              <label className="mb-[0.4rem] block text-black dark:text-white">
                Course Tags
              </label>
              <CreatableSelect
                isMulti
                isClearable
                options={tags}
                value={selected.map((value) =>
                  tags.find((option) => option.value === value)
                )}
                onChange={handleChange}
                className="w-full"
              />
            </div>

            <Select
              label="Language"
              name="language"
              rules={{ required: "Please select a language" }}
            >
              <option value="">English</option>
              <option>Spanish</option>
              <option>French</option>
            </Select>
          </FormGroup>

          <div className="py-6">
            <label className="mb-2 text-[#344054] dark:text-slate-100">
              Course Cover Image
            </label>
            <CourseImageUpload setImgUrl={setImgUrl} />
          </div>

          <div className="py-6">
            <label className="mb-2 text-[#344054] dark:text-slate-100">
              Course Trailer/ Preview Video
            </label>
            <CourseVideoUpload setVideoUrl={setVideoUrl} />
          </div>

          <div className="flex justify-end gap-x-5 mt-10">
            <button className="text-zinc-500">Cancel</button>
            <Button type="submit" onClick={() => {}} text="Next" />
          </div>
        </form>
      </FormProvider>

      <SuccessModal
        show={show}
        size="md:w-[450px] w-[400px]"
        title="Course created successfully!"
        desc="Course has been saved to your drafts. Go back to all courses page, or proceed to next step to create curriculum"
        onProceed={() => {
          setActiveStep(activeStep + 1);
        }}
        cancelBtn={true}
        onCancel={() => navigate(-1)}
      ></SuccessModal>
    </div>
  );
};

export default CourseDetails;
