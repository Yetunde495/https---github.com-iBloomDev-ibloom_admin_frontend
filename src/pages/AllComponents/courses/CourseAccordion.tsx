/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { MdPlayCircleFilled } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";

const courseData = [
  {
    title: "Introduction",
    answer: "React with Tailwind CSS Faq Accordion 1",
  },
  {
    title: "How to create Accordion (FAQ) in React?",
    answer: "React with Tailwind CSS Faq Accordion 1",
  },
  {
    title: "How to use Tailwind CSS 3 in React?",
    answer: "React with Tailwind CSS Faq Accordion 2",
  },
  {
    title: "How to install Tailwind CSS 3?",
    answer: "React with Tailwind CSS Faq Accordion 3",
  },
  {
    title: "How to send feedback?",
    answer: "React with Tailwind CSS Faq Accordion 4",
  },
];

const CourseAccordion = () => {
  const [openStates, setOpenStates] = useState(courseData.map(() => false));

  const toggleContent = (index: any) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  return (
    <div className="mx-auto bg-[#fcfcfc] min-h-sceen w-full">
      <div className="grid divide-y w-full divide-neutral-200 mx-auto mt-8">
        <div className="py-5 px-8">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <div className="flex items-center gap-6">
                <span className="text-sm">Course Outline</span>
              </div>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            {courseData.map((data, index) => (
              <div
                className="py-3"
                key={index}
                onClick={() => toggleContent(index)}
              >
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <div className="flex items-center gap-6">
                      <MdPlayCircleFilled />
                      <span className="text-sm ">{data.title}</span>
                    </div>
                    {openStates[index] ? (
                      <IoIosArrowUp />
                    ) : (
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    )}
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    {data.answer}
                  </p>
                </details>
              </div>
            ))}
          </details>
        </div>
        {/* {courseData.map((data, index) => (
          <div className="py-5 px-8" key={index}>
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <div className="flex items-center gap-6">
                  {index > 0 && <MdPlayCircleFilled />}
                  <span
                    className={`text-sm ${
                      index === 0 ? "pl-9, text-base" : ""
                    }`}
                  >
                    {data.title}
                  </span>
                </div>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>

              <div
                className="py-5 px-8"
                key={index}
                onClick={() => toggleContent(index)}
              >
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <div className="flex items-center gap-6">
                      <MdPlayCircleFilled />
                      <span className="text-sm ">{data.title}</span>
                    </div>
                    {openStates[index] ? (
                      <IoIosArrowUp />
                    ) : (
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    )}
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    {data.answer}
                  </p>
                </details>
              </div>
            </details>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default CourseAccordion;
