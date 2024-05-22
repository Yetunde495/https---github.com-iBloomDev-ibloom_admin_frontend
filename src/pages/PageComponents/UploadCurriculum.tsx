import React, { Fragment, useRef, useState } from "react";
import Modal from "../../components/modal";
import { FiUpload } from "react-icons/fi";
import { truncateFilename } from "../../utils/truncateFilename";

type UploadProps = {
  data: any;
  show: boolean;
  setShow: () => void;
};

const UploadCurriculum: React.FC<UploadProps> = ({ show, setShow }) => {
  const [flow, setFlow] = useState(false);
  const [fileName, setFileName] = useState<string>("");

  const [loading, setLoading] = useState(false);
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    const input = (hiddenFileInput.current as HTMLInputElement) || null;
    if (input) {
      input.click();
    }
  };

  const fileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const onSubmit = async () => {
    setLoading(true);
    try {
      setLoading(true);
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
        title={`${flow ? "" : "Upload Curriculum"}`}
        size={`${flow ? "max-w-[500px]" : "max-w-[650px]"} w-full`}
        margin={`md:mx-6`}
      >
        <p className="-mt-6 mb-5">Upload the new curriculum</p>

        <div>
          <div className="flex flex-col gap-7 pt-6">
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
                  {truncateFilename(fileName) || "Only pdf files are allowed"}
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept="application/pdf"
                  ref={hiddenFileInput}
                  onChange={fileUpload}
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={fileName === ""}
              className="w-full rounded-full mt-4 mb-3 bg-primary/95 disabled:bg-primary/70 focus:ring-2 focus:ring-[#84caff]  py-3 px-6 font-medium text-white hover:bg-primary hover:shadow-1"
              onClick={() => onSubmit()}
            >
              {loading ? "Loading..." : "Process"}
            </button>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default UploadCurriculum;
