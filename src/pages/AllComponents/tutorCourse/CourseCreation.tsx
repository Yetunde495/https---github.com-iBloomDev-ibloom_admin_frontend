/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "../../../components/button";
import EmptyStateImage from "../../../assets/images/empty-courses.png";
import Accordion from "../../../components/Accordion";
import { InputField } from "../../../components/form";
// import { HiOutlineDocumentText } from "react-icons/hi2";
// import { RxCross2 } from "react-icons/rx";
import { SingleFileUploadWithProgress } from "./FileUpload";

const CourseCreation = () => {
  return (
    <div>
      <Button onClick={undefined} text="Creat a Section" width="full" />
      <div className="mt-10">
        <Accordion
          initialOpenIndex={0}
          items={[
            {
              title: "Introduction to UX Design",
              content: (
                <div className="pb-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-15 mt-10 pb-10">
                    <InputField
                      onChange={function (): void {
                        throw new Error("Function not implemented.");
                      }}
                      label="Video Name"
                      id=""
                      placeholder="Video Name"
                    />

                    <InputField
                      onChange={function (): void {
                        throw new Error("Function not implemented.");
                      }}
                      label="Duration"
                      id=""
                      placeholder="10 mins"
                    />
                  </div>
                  <div>
                    <p className="text-lg">Upload Video</p>

                    <SingleFileUploadWithProgress />
                    <div className="flex justify-end gap-x-5 mt-10">
                      <button className="text-zinc-500">Cancel</button>
                      <Button onClick={undefined} text="Save" />
                    </div>
                  </div>
                </div>
              ),
            },
            {
              title: "Introduction to UX Design",
              content: (
                <div className="pb-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-15 mt-10 pb-10">
                    <InputField
                      onChange={function (): void {
                        throw new Error("Function not implemented.");
                      }}
                      label="Video Name"
                      id=""
                      placeholder="Video Name"
                    />

                    <InputField
                      onChange={function (): void {
                        throw new Error("Function not implemented.");
                      }}
                      label="Duration"
                      id=""
                      placeholder="10 mins"
                    />
                  </div>
                  <div>
                    <p className="text-lg">Upload Video</p>
                    <SingleFileUploadWithProgress />
                    <div className="flex justify-end gap-x-5 mt-10">
                      <button className="text-zinc-500">Cancel</button>
                      <Button onClick={undefined} text="Save" />
                    </div>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>

      <div
        className="flex justify-center items-center"
        style={{ height: "60vh" }}
      >
        <div>
          <img src={EmptyStateImage} className="m-auto" />
          <div className="my-8">
            <p>You currently have no course on your dashboard.</p>

            <button
              onClick={undefined}
              className="w-full py-2.5 px-4 bg-primary/90 rounded-md  text-white hover:bg-primary mt-8"
            >
              Buy Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCreation;
