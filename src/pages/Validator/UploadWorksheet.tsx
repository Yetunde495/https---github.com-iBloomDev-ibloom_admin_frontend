import React, { Fragment, useRef, useState } from "react";
import Modal from "../../components/modal";
import { FormProvider, useForm } from "react-hook-form";
import Select2 from "../../components/form/customSelect";
import { FiUpload } from "react-icons/fi";
import { truncateFilename } from "../../utils/truncateFilename";

type UploadWorksheetProps = {
  data: any;
  show: boolean;
  setShow: () => void;
};

const UploadWorksheet: React.FC<UploadWorksheetProps> = ({ show, setShow }) => {
  const methods = useForm<any>();
  const [flow, setFlow] = useState(false);
  const [topic, setTopic] = useState("All Topics");
  const [fileName, setFileName] = useState<string>("");

  const [loading, setLoading] = useState(false);
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  const handleClick = () => {
    const input = (hiddenFileInput.current as HTMLInputElement) || null;
    if (input) {
      input.click();
    }
  };

  const photoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    if (target) {
      if (target.files?.length) {
        const file = target.files[0];
        setFileName(file.name);

        try {
          setLoading(true);

          const formData = new FormData();
          formData.append("media", file);

          // TODO: Handle the response data according to your needs
        } catch (error) {
          console.error("Error uploading file:", error);
          // TODO: Handle errors appropriately
        } finally {
          setLoading(false);
        }
      }
    }
  };

  const onSubmit = async (data: any) => {
    setLoading(true);
    const { errors } = methods.formState;

    // Check if there are any validation errors
    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
      return;
    }

    try {
      setLoading(true);

      console.log(data);
      setFlow(true);
    } catch (error) {
      console.log("add alert error", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <Modal
        show={show}
        onHide={setShow}
        title={`${flow ? "" : "Upload Worksheet"}`}
        size={`${flow ? "max-w-[500px]" : "max-w-[650px]"} w-full`}
        margin={`${flow ? "md:mt-8 mt-[4rem]" : "mt-[22rem]"} md:mx-6`}
      >
        <p className="-mt-6 mb-5">Minimum of 10 questions</p>
       
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              onKeyDown={handleKeyDown}
            >
              <div>
                <div className="flex flex-col gap-7">
                  <div className="mb-1.5">
                    <Select2
                      name="grade"
                      label="Grade"
                      rules={{ required: "This field is required" }}
                    >
                      <option value="">Select...</option>
                      <option>Grade 1</option>
                      <option>Grade 2</option>
                    </Select2>
                  </div>

                  <div className="mb-1.5">
                    <Select2
                      name="subject"
                      label="Subject"
                      rules={{ required: "This field is required" }}
                    >
                      <option value="">Select...</option>
                      <option>Math</option>
                      <option>Reading</option>
                      <option>Science</option>
                      <option>Social Studies</option>
                    </Select2>
                  </div>

                  <div className="mb-1.5">
                    <div className="flex items-center w-full gap-3 flex-wrap">
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="topicOption"
                          checked={topic === "All Topics"}
                          className="text-[#00112c] w-4 h-4"
                          onChange={() => setTopic("All Topics")}
                        />
                        <label className="">All Topics</label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="topicOption"
                          checked={topic === "Specific Topic"}
                          className="text-[#00112c] w-4 h-4"
                          onChange={() => setTopic("Specific Topic")}
                        />
                        <label className="">Specific Topic</label>
                      </div>
                    </div>
                  </div>

                  {topic === "Specific Topic" ? (
                    <div className="mb-1.5">
                      <Select2
                        name="topic"
                        label="Topic"
                        rules={{ required: "This field is required" }}
                      >
                        <option value="">Select...</option>
                        <option>Topic 1</option>
                        <option>Topic 2</option>
                      </Select2>
                    </div>
                  ) : (
                    <div className="mb-1.5">
                      <Select2
                        name="topic"
                        label="Topic"
                        disabled
                        defaultValue="All"
                        rules={{ required: "This field is required" }}
                      >
                        <option value="All">All Topics</option>
                      </Select2>
                    </div>
                  )}

                  {topic === "Specific Topic" ? (
                    <div className="mb-1.5">
                      <Select2
                        name="lesson"
                        label="Lesson"
                        rules={{ required: "This field is required" }}
                      >
                        <option value="">Select...</option>
                        <option>Lesson 1</option>
                        <option>Lesson 2</option>
                      </Select2>
                    </div>
                  ) : (
                    <div className="mb-1.5">
                      <Select2
                        name="lesson"
                        label="Lesson"
                        disabled
                        defaultValue="All"
                        rules={{ required: "This field is required" }}
                      >
                        <option value="All">All Lessons</option>
                      </Select2>
                    </div>
                  )}

                  <div className="mb-1.5 ">
                    <p className="mb-2.5">Upload PDF</p>
                    <label className="flex items-center w-full">
                      <button
                        type="button"
                        className="border-primary text-primary hover:bg-primary hover:text-white py-3 md:w-[40%] w-[55%] px-3 border rounded-md flex items-center gap-2.5"
                        onClick={handleClick}
                      >
                        <FiUpload />
                        Choose File
                      </button>
                      <div className="cursor-pointer w-full py-3 px-3 border border-l-0 border-stroke rounded-r-md">
                        {truncateFilename(fileName) ||
                          "Only pdf files are allowed"}
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        accept="application/pdf"
                        ref={hiddenFileInput}
                        onChange={photoUpload}
                      />
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full mt-4 mb-3 bg-primary/95 focus:ring-2 focus:ring-[#84caff]  py-3 px-6 font-medium text-white hover:bg-primary hover:shadow-1"
                    onClick={() => {}}
                  >
                    {loading ? "Loading..." : "Process"}
                  </button>
                </div>
              </div>
            </form>
          </FormProvider>
        
       
      </Modal>
    </Fragment>
  );
};

export default UploadWorksheet;
