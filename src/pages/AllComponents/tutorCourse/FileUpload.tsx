/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaCircleCheck } from "react-icons/fa6";
import Button from "../../../components/button";
import { BsCloudArrowDown } from "react-icons/bs";

export interface SingleFileUploadWithProgressProps {
  file?: File;
  onDelete?: (file: File) => void;
  onUpload?: (file: File, url: string) => void;
  progress?: number;
}

export function SingleFileUploadWithProgress() {
  const [fileName, setFileName] = useState("");
  const [percent, setPercent] = useState(0);
  const [fileSize, setFileSize] = useState(0);

  const onFileDrop = async (e: any) => {
    e.preventDefault();
    const newFile = e.target.files[0];

    if (newFile) {
      setPercent(0);
      setFileName(newFile.name);
      setFileSize(newFile.size);

      const simulateProgress = () => {
        const totalSteps = 100;
        let currentStep = 0;

        const interval = setInterval(() => {
          currentStep += 1;
          setPercent((currentStep / totalSteps) * 100);

          if (currentStep === totalSteps) {
            clearInterval(interval);
          }
        }, 50);
      };
      simulateProgress();
    }
  };

  return (
    <div className="mt-4">
      <div className="mt-5 border border-dashed border-zinc-300 h-40">
        {percent === 100 ? (
          <div className="px-10 py-8">
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2 items-center">
                <FaCircleCheck className="text-xl font-bold text-[#2CB84A]" />
                <p className="text-zinc-400 text-lg">{fileName}</p>
              </div>
              <div className="flex gap-x-8 items-center">
                <p className="text-zinc-400">
                  {(fileSize / 1024 / 1024).toFixed(2)} MB
                </p>
                <RiDeleteBin5Line
                  className="text-xl font-bold text-[#FF4343] pointer"
                  onClick={() => setPercent(0)}
                />
              </div>
            </div>

            <div className="relative pt-5">
              <div className="flex mb-2 items-center justify-between">
                <div className="flex w-full rounded-full bg-zinc-300 h-3">
                  <div className="w-full rounded-full">
                    <div
                      style={{ width: `${percent}%` }}
                      className="text-xs leading-none text-center text-white bg-primary rounded-full h-3"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : percent > 0 ? (
          <div className="px-10 py-8">
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2 items-center">
                <HiOutlineDocumentText className="text-xl font-bold" />
                <p className="text-zinc-400 text-lg">{fileName}</p>
              </div>
              <div className="flex gap-x-8 items-center">
                <p className="text-zinc-400">
                  {(fileSize / 1024 / 1024).toFixed(2)} MB
                </p>
                <RxCross2 className="text-xl font-bold pointer" />
              </div>
            </div>

            <div className="relative pt-5">
              <div className="flex mb-2 items-center justify-between">
                <div className="flex w-full rounded-full bg-zinc-300 h-3">
                  <div className="w-full rounded-full">
                    <div
                      style={{ width: `${percent}%` }}
                      className="text-xs leading-none text-center text-white bg-[#F8A33F] rounded-full h-3"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full w-full relative pointer">
            <p
              className="absolute text-2xl text-zinc-400"
              style={{ left: "40%", top: "40%" }}
            >
              Click to upload
            </p>
            <input
              className="h-full w-full opacity-0 absolute top-0"
              type="file"
              onChange={onFileDrop}
            />
          </div>
        )}
      </div>
    </div>
  );
}


export function CourseImageUpload() {
  const [fileName, setFileName] = useState("");
  const [percent, setPercent] = useState(0);
  const [fileSize, setFileSize] = useState(0);
  const [logoUrl, setLogoUrl] = useState<string>("");

  const onFileDrop = async (e: any) => {
    e.preventDefault();
    const newFile = e.target.files[0];

    if (newFile) {
      setPercent(0);
      setFileName(newFile.name);
      setFileSize(newFile.size);
      setLogoUrl(URL.createObjectURL(newFile) || "");

      const simulateProgress = () => {
        const totalSteps = 100;
        let currentStep = 0;

        const interval = setInterval(() => {
          currentStep += 1;
          setPercent((currentStep / totalSteps) * 100);

          if (currentStep === totalSteps) {
            clearInterval(interval);
          }
        }, 50);
      };
      simulateProgress();
    }
  };

  return (
    <div className="mt-4">
      <div className="mt-5 border rounded-lg border-zinc-300 min-h-48">
        {percent === 100 ? (
          <div className="px-10 py-8">
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2 items-center">
                <FaCircleCheck className="text-xl font-bold text-[#2CB84A]" />
                <p className="text-zinc-400 text-lg">{fileName}</p>
              </div>
              <div className="flex gap-x-8 items-center">
                <p className="text-zinc-400">
                  {(fileSize / 1024 / 1024).toFixed(2)} MB
                </p>
                <RiDeleteBin5Line
                  className="text-xl cursor-pointer font-bold text-[#FF4343] pointer"
                  onClick={() => setPercent(0)}
                />
              </div>
            </div>



            <div className="relative pt-5">

              <div className="flex mb-2 items-center justify-between">
                <div className="flex w-full rounded-full bg-zinc-300 h-3">
                  <div className="w-full rounded-full">
                    <div
                      style={{ width: `${percent}%` }}
                      className="text-xs leading-none text-center text-white bg-primary rounded-full h-3"
                    >{percent}%</div>
                  </div>

                </div>
              </div>
              <img src={logoUrl} className="w-40 h-40 rounded"/>

            </div>
          </div>
        ) : percent > 0 ? (
          <div className="px-10 py-8">
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2 items-center">
                <HiOutlineDocumentText className="text-xl font-bold" />
                <p className="text-zinc-400 text-lg">{fileName}</p>
              </div>
              <div className="flex gap-x-8 items-center">
                <p className="text-zinc-400">
                  {(fileSize / 1024 / 1024).toFixed(2)} MB
                </p>
                <RxCross2 className="text-xl font-bold pointer" />
              </div>
            </div>

            <div className="relative pt-5">
              <div className="flex mb-2 items-center justify-between">
                <div className="flex w-full rounded-full bg-zinc-300 h-3">
                  <div className="w-full rounded-full">
                    <div
                      style={{ width: `${percent}%` }}
                      className="text-xs leading-none text-center text-white bg-[#F8A33F] rounded-full h-3"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full w-full relative pointer flex justify-center items-center">
            <div className="flex flex-col justify-center gap-5 items-center py-4">
            <BsCloudArrowDown size={30} className='' />
            <p className="text-lg text-slate-600">
             "Drag and Drop" your image here or "Click" to upload your image
            </p>

            <Button onClick={onFileDrop} text="Upload Image" width="60"/>

            <input
              className="h-full w-full opacity-0 absolute top-0"
              type="file"
              onChange={onFileDrop}
            />
            </div>
            
            
          </div>
        )}
      </div>
    </div>
  );
}

export function CourseVideoUpload() {
  const [fileName, setFileName] = useState("");
  const [percent, setPercent] = useState(0);
  const [fileSize, setFileSize] = useState(0);

  const onFileDrop = async (e: any) => {
    e.preventDefault();
    const newFile = e.target.files[0];

    if (newFile) {
      setPercent(0);
      setFileName(newFile.name);
      setFileSize(newFile.size);

      const simulateProgress = () => {
        const totalSteps = 100;
        let currentStep = 0;

        const interval = setInterval(() => {
          currentStep += 1;
          setPercent((currentStep / totalSteps) * 100);

          if (currentStep === totalSteps) {
            clearInterval(interval);
          }
        }, 50);
      };
      simulateProgress();
    }
  };

  return (
    <div className="mt-4">
      <div className="mt-5 border rounded-lg border-zinc-300 h-48">
        {percent === 100 ? (
          <div className="px-10 py-8">
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2 items-center">
                <FaCircleCheck className="text-xl font-bold text-[#2CB84A]" />
                <p className="text-zinc-400 text-lg">{fileName}</p>
              </div>
              <div className="flex gap-x-8 items-center">
                <p className="text-zinc-400">
                  {(fileSize / 1024 / 1024).toFixed(2)} MB
                </p>
                <RiDeleteBin5Line
                  className="text-xl font-bold text-[#FF4343] pointer"
                  onClick={() => setPercent(0)}
                />
              </div>
            </div>

            <div className="relative pt-5">
              <div className="flex mb-2 items-center justify-between">
                <div className="flex w-full rounded-full bg-zinc-300 h-3">
                  <div className="w-full rounded-full">
                    <div
                      style={{ width: `${percent}%` }}
                      className="text-xs leading-none text-center text-white bg-primary rounded-full h-3"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : percent > 0 ? (
          <div className="px-10 py-8">
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2 items-center">
                <HiOutlineDocumentText className="text-xl font-bold" />
                <p className="text-zinc-400 text-lg">{fileName}</p>
              </div>
              <div className="flex gap-x-8 items-center">
                <p className="text-zinc-400">
                  {(fileSize / 1024 / 1024).toFixed(2)} MB
                </p>
                <RxCross2 className="text-xl font-bold pointer" />
              </div>
            </div>

            <div className="relative pt-5">
              <div className="flex mb-2 items-center justify-between">
                <div className="flex w-full rounded-full bg-zinc-300 h-3">
                  <div className="w-full rounded-full">
                    <div
                      style={{ width: `${percent}%` }}
                      className="text-xs leading-none text-center text-white bg-[#F8A33F] rounded-full h-3"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full w-full relative pointer flex justify-center items-center">
            <div className="flex flex-col justify-center gap-5 items-center py-4">
            <BsCloudArrowDown size={30} className='' />
            <p className="text-lg text-slate-600">
              Click to upload your video
            </p>

            <Button onClick={onFileDrop} text="Upload Video" width="60"/>

            <input
              className="h-full w-full opacity-0 absolute top-0"
              type="file"
              onChange={onFileDrop}
            />
            </div>
            
            
          </div>
        )}
      </div>
    </div>
  );
}
