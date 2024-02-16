/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { BsCurrencyDollar } from "react-icons/bs";
import Button from "../../components/button";
import { FormGroup, InputWithIcon, Textarea } from "../../components/form";
import { FormProvider, useForm } from "react-hook-form";
import { AutoInput } from "../../components/form/customInput";
import Select from "../../components/form/customSelect";
import ReactDatePicker from "react-datepicker";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import Modal from "../../components/modal";
import Search from "../../components/Search";
import { IoSearchOutline } from "react-icons/io5";
import Avatar from "../../assets/images/Avatar.png";
import { RxCross2 } from "react-icons/rx";
import SuccessModal from "../../components/modal/Success";

const setHours = (date: string | number | Date, hours: number) => {
  const newDate = new Date(date);
  newDate.setHours(hours);
  return newDate;
};

const setMinutes = (date: string | number | Date, minutes: number) => {
  const newDate = new Date(date);
  newDate.setMinutes(minutes);
  return newDate;
};

type Instructor = {
  instructor_name: string;
  instructor_img: string;
};

const LiveClassDetails = () => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 9)
  );

  const [selectedInstructors, setSelectedInstructors] = useState<Instructor[]>(
    []
  );

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [showInstructorModal, setShowInstructorModal] = useState(false);
  const filterPassedTime = (time: any) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };
  const methods = useForm<FormData>();

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

  const data = [
    {
      instructor_name: "Tina Jones",
      instructor_img: Avatar,
    },
    {
      instructor_name: "Adeyemi Jones",
      instructor_img: Avatar,
    },
    {
      instructor_name: "Mary Jones",
      instructor_img: Avatar,
    },
    {
      instructor_name: "Yetunde Jones",
      instructor_img: Avatar,
    },
    {
      instructor_name: "Angela Jones",
      instructor_img: Avatar,
    },
    {
      instructor_name: "Deborah Jones",
      instructor_img: Avatar,
    },
    {
      instructor_name: "Ife Jones",
      instructor_img: Avatar,
    },
  ];

  const toggleSelection = (index: any) => {
    const instructor = data[index];
    const isSelected = selectedInstructors.some(
      (selected: { instructor_name: string }) =>
        selected.instructor_name === instructor.instructor_name
    );
    if (isSelected) {
      setSelectedInstructors(
        selectedInstructors.filter(
          (selected: { instructor_name: string }) =>
            selected.instructor_name !== instructor.instructor_name
        )
      );
    } else {
      setSelectedInstructors([...selectedInstructors, instructor]);
    }
  };

  const removeSelectedInstructor = (instructorToRemove: {
    instructor_name: string;
    instructor_img: string;
  }) => {
    setSelectedInstructors(
      selectedInstructors.filter(
        (instructor) => instructor !== instructorToRemove
      )
    );
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <FormGroup>
            <AutoInput
              label="Live Class Topic"
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
              label="Class Description"
              name="description"
              placeholder="Enter course description"
              rules={{
                required: "Course Description is required",
              }}
            />
          </FormGroup>

          <FormGroup>
            <div className="w-full">
              <div className="flex flex-col gap-6 md:flex-row">
                <div className="w-full">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Date
                  </label>
                  <ReactDatePicker
                    isClearable
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                    minDate={new Date()}
                    peekNextMonth
                    dateFormat="MMMM d, yyyy"
                    showMonthDropdown
                    showYearDropdown
                    placeholderText="Select a date"
                    dropdownMode="select"
                    className={`z-999999 w-full rounded border border-stroke bg-gray py-3 px-4.5 
             text-black focus:border-primary focus-visible:outline-none dark:border-strokedark 
             dark:bg-meta-4 dark:text-white dark:focus:border-primary`}
                  />
                </div>
                <div className="w-full">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Time
                  </label>
                  <ReactDatePicker
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                    showTimeSelect
                    placeholderText="Select a time"
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    filterTime={filterPassedTime}
                    className={`z-999999 w-full rounded border border-stroke bg-gray py-3 px-4.5
                     text-black focus:border-primary focus-visible:outline-none dark:border-strokedark
                     dark:bg-meta-4 dark:text-white dark:focus:border-primary`}
                  />
                </div>
              </div>
            </div>
          </FormGroup>

          <FormGroup>
            <Select
              label="Language"
              name="duration"
              rules={{ required: "Please select a duration" }}
            >
              <option value="">Select language...</option>
              <option>English</option>
              <option>French</option>
            </Select>
            <AutoInput
              label="Category"
              name="category"
              placeholder="Enter Class Category"
              rules={{ required: "This field is required" }}
            />
          </FormGroup>
          <div className=" pb-30 border-b border-zinc-200  pt-15">
            <h1 className="font-bold dark:text-slate-200 mt-5">
              Other Settings
            </h1>
            <div className="flex flex-col gap-8 mt-8">
              <div className="flex justify-between items-center">
                <div>
                  <h4>Add an Instructor</h4>
                  <p className="text-zinc-400">
                    Add a co-instructor to your live class
                  </p>
                </div>
                <Button
                  onClick={() => {
                    setShowInstructorModal(true);
                  }}
                >
                  <div className="flex gap-x-2 items-center">
                    <IoMdAdd /> Add Instructor
                  </div>
                </Button>
              </div>
              {selectedInstructors ? (
                <div className="mt-4">
                  <ul className="flex gap-5 flex-wrap">
                    {selectedInstructors.map((selected, index) => (
                      <li key={index}>
                        <div className="flex gap-3 items-center bg-[#F5F6FD] py-2 px-3 rounded">
                          <img src={selected.instructor_img} />
                          <p>{selected.instructor_name}</p>{" "}
                          <div
                            onClick={() => removeSelectedInstructor(selected)}
                          >
                            <RxCross2 />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                ""
              )}

              <div className="flex justify-between items-center">
                <div>
                  <h4>Live Class Visibility</h4>
                  <p className="text-zinc-400">
                    I want this class to be visible to only student enrolled in
                    this course
                  </p>
                </div>
                <label className="relative flex justify-between items-center group p-2 text-xl">
                  <input
                    type="checkbox"
                    className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
                  />
                  <span className="w-25 h-10 flex items-center flex-shrink-0 ml-4 p-1 bg-zinc-300 rounded-full duration-300 ease-in-out peer-checked:bg-primary after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-14 group-hover:after:translate-x-1"></span>
                </label>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h4>Send Notification</h4>
                  <p className="text-zinc-400">
                    Notify when the class is about to start
                  </p>
                </div>
                <label className="relative flex justify-between items-center group p-2 text-xl">
                  <input
                    type="checkbox"
                    className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
                  />
                  <span className="w-25 h-10 flex items-center flex-shrink-0 ml-4 p-1 bg-zinc-300 rounded-full duration-300 ease-in-out peer-checked:bg-primary after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-14 group-hover:after:translate-x-1"></span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-x-5 mt-10">
            <button className="text-zinc-500">Cancel</button>
            <Button
              type="submit"
              onClick={() => {
                setShowSuccessModal(true);
              }}
              text="Finish"
            />
          </div>
        </form>
      </FormProvider>

      <Modal
        title="Add Instructor"
        onHide={() => {
          setShowInstructorModal(false);
        }}
        show={showInstructorModal}
        children={
          <div>
            <div className="flex gap-7 w-full">
              <div className="w-3/4">
                <Search
                  onSearch={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                  onChange={function (value: any): void {
                    throw new Error("Function not implemented.");
                  }}
                  search={undefined}
                />
              </div>
              <button
                className="flex justify-center transition disabled:opacity-65 opacity-95 hover:opacity-100 bg-primary  text-white rounded-md pt-2 px-3 font-medium "
                type="button"
                onClick={undefined}
              >
                <div className="flex gap-x-2 items-center">
                  <IoSearchOutline />
                  Search
                </div>
              </button>
            </div>

            <div className="mt-10 h-80 overflow-y-auto custom-scrollbar pr-5">
              {data.map((instructorData, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mt-5"
                >
                  <div className="flex gap-8">
                    <img src={instructorData.instructor_img} />
                    <p>{instructorData.instructor_name}</p>
                  </div>
                  <Button onClick={() => toggleSelection(index)}>
                    <div className="flex gap-x-2 items-center">
                      <IoMdAdd />
                      {selectedInstructors.some(
                        (selected) =>
                          selected.instructor_name ===
                          instructorData.instructor_name
                      )
                        ? "Remove"
                        : "Add"}{" "}
                      Instructor
                    </div>
                  </Button>
                </div>
              ))}
            </div>

            <div>
              <div className="flex mt-8 border-t-2 border-zinc-300">
                <div className="flex justify-end gap-x-5 w-full items-center pt-5">
                  <button className="text-zinc-500">Cancel</button>
                  <Button type="submit" onClick={() => {}} text="Finish" />
                </div>
              </div>
            </div>
          </div>
        }
      />

      <SuccessModal
        show={showSuccessModal}
        desc="You've successfully created a live class titled "
        title="Live class Created"
        onProceed={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};

export default LiveClassDetails;
