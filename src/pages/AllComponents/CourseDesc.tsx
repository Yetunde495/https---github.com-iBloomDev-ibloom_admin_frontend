/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Breadcrumb from "../../components/BreadCrumb";
import Layout from "../../layout/Layout";
import { IoIosArrowRoundBack } from "react-icons/io";
import PreviewVideo from "../../assets/images/Video.png";
import PreviewImg from "../../assets/images/Image.png";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import Transcription from "./courses/Transcription";
import CourseAccordion from "./courses/CourseAccordion";
import { HiMiniDocument } from "react-icons/hi2";
import Accordion from "../../components/Accordion";
import ReviewStars from "./ReviewStars";
import Avatar from "../../assets/images/Avatar.png";
import Button from "../../components/button";
import { BiSolidBadgeCheck } from "react-icons/bi";

const data = {
  title: "Intro to Product Design",
  tutor_name: "Tutor Name",
  points: 50,
  preview_video_url: PreviewVideo,
  total_points: "100",
};



const AssessmentData = [
  {
    title: "2 min test on Introduction to UX",
    content: (
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <HiMiniDocument />
          <p>Preview</p>
        </div>
      </div>
    ),
  },
  {
    title: "How to create component in React",
    content: (
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <HiMiniDocument />
          <p>How to create component in React?</p>
        </div>
      </div>
    ),
  },
];
const reviewers = [
  { name: "Angela", photo: Avatar },
  { name: "Angela", photo: Avatar },
  { name: "Angela", photo: Avatar },
  { name: "Angela", photo: Avatar },
];

const items = [
  {
    title: "Assessment",
    content: (
      <div className="border-t border-zinc-200 pt-5">
        {AssessmentData.map((data, index) => {
          return (
            <div
              key={index}
              className={`mt-4 flex ${
                index !== AssessmentData.length - 1
                  ? "border-b border-zinc-200"
                  : ""
              }`}
            >
              <Accordion
                items={[
                  {
                    title: data.title,
                    content: data.content,
                    showIcon: true,
                    // icon: <HiMiniDocument />,
                  },
                ]}
              />
            </div>
          );
        })}
      </div>
    ),
  },
  {
    title: "Review Rating",
    content: (
      <div className="border-t border-zinc-200 pt-5 px-7 pb-5">
        <ReviewStars star={4} />
        <div className="flex w-full items-center gap-3">
          <div className="flex ">
            {reviewers.map((reviewer, index) => (
              <div
                key={index}
                className={`flex items-center my-1 ${index > 0 ? "-ml-3" : ""}`}
              >
                <img src={reviewer?.photo} className="w-8 h-8" />
              </div>
            ))}
          </div>
          <span className="text-zinc-400">1,0009 Reviews</span>
        </div>
      </div>
    ),
  },
];

const CourseDesc = ({ embedId = "rokGy0huYEA" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <Layout>
      <div>
        <div
          style={{
            height: "60vh",
            background:
              "linear-gradient(90deg, rgba(246,149,190,1) 0%, rgba(174,145,255,1) 64%, rgba(174,145,255,1) 100%)",
          }}
          className="px-16"
        >
          <div className="flex justify-start pt-6">
            <Breadcrumb
              routes={[
                { name: "Home", path: "/" },
                { name: "Courses", path: "Courses" },
                { name: "Introduction to UX Design", path: "" },
              ]}
              pageName={""}
              homeRoute={""}
              homeRouteName={""}
            />
          </div>
        </div>

        <section style={{ width: "75%", margin: "0 auto" }}>
          <div
            className="flex gap-1 items-center mb-5 text-white"
            style={{ marginTop: "-18em" }}
          >
            <IoIosArrowRoundBack />
            <Link to="/app/students/courses" className="font-bold  text-white">
              Back
            </Link>
          </div>
          <div className="flex justify-between gap-15">
            <div style={{ alignSelf: "flex-start" }}>
              <h1 className="text-xl font-bold text-white">{data.title}</h1>

              <div>
                <p className="text-xs text-white">By {data.tutor_name}</p>
              </div>
              <div className="mt-8">
                <div className="w-full">
                  <iframe
                    width="100%"
                    height="350"
                    src={`https://www.youtube.com/embed/${embedId}`}
                    style={{ borderRadius: "8px" }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                </div>

                <div className="mt-15">
                  <h4 className="font-bold dark:text-slate-200">
                    Course Description
                  </h4>
                  <Transcription />
                </div>

                <div className="">
                  <CourseAccordion />
                </div>

                <div>
                  <div className="mx-auto  mt-10 mb-15 min-h-sceen w-full">
                    <div className="w-full flex flex-col gap-15">
                      {items.map((item, index) => (
                        <div
                          key={index}
                          className="mb-2 pt-3 border-b border-stroke bg-[#fcfcfc]"
                        >
                          <button
                            onClick={() => toggleItem(index)}
                            className="w-full py-2 text-left bg-gray-200 flex justify-between items-center"
                          >
                            <span className="ml-10">{item.title}</span>
                            {openIndex === index ? (
                              <AiOutlineMinusCircle
                                className="text-primary mr-8"
                                size={22}
                              />
                            ) : (
                              <AiOutlinePlusCircle
                                className="text-primary mr-8"
                                size={22}
                              />
                            )}
                          </button>

                          <div className="p-2">{item.content}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-white rounded-lg py-5 px-5 mt-50 w-full"
              style={{ alignSelf: "baseline" }}
            >
              <img src={PreviewImg} className="m-auto w-full" />
              <div className="mt-6">
                <h3 className="text-lg font-bold">$500</h3>
                <p className="text-sm text-zinc-400">16% off all courses</p>
                <Button
                  onClick={undefined}
                  text="Buy Now"
                  width="full"
                  variant="secondary"
                  classNames="mt-5"
                />
                <p className="text-[#ff0000] mt-2 text-sm">
                  This offer ends in 12h : 34m : 00s
                </p>
                <div className="mt-10">
                  <p className="text-[#3843d0]">6 - 8 Weeks Course</p>
                  <div className="flex w-full items-center gap-3 mt-3 mb-5">
                    <div className="flex ">
                      {reviewers.map((reviewer, index) => (
                        <div
                          key={index}
                          className={`flex items-center my-1 ${
                            index > 0 ? "-ml-3" : ""
                          }`}
                        >
                          <img src={reviewer?.photo} className="w-8 h-8" />
                        </div>
                      ))}
                    </div>
                    <span className="text-zinc-400">Join 867+ Members</span>
                  </div>
                </div>
                <div className="mt-10">
                  <h3 className="text-lg font-bold">Benefits</h3>
                  <div className="flex items-center gap-2">
                    <BiSolidBadgeCheck />
                    <p>Accredited Certificate</p>
                  </div>{" "}
                  <div className="flex items-center gap-2">
                    <BiSolidBadgeCheck />
                    <p>Accredited Certificate</p>
                  </div>{" "}
                  <div className="flex items-center gap-2">
                    <BiSolidBadgeCheck />
                    <p>Accredited Certificate</p>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="font-bold text-sm">About the Tutor</h3>
                  <div className="flex mt-5 gap-3">
                    <img
                      src={Avatar}
                      className="m-auto"
                      style={{ width: "20%" }}
                    />
                    <div style={{ width: "80%" }}>
                      <p className="font-bold text-lg">John Abraham</p>
                      <p className="font-bold text-sm text-zinc-400">
                        UX Expert
                      </p>
                    </div>
                  </div>
                  <div className="text-sm mb-5">
                    <p>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </p>
                  </div>
                  <a>Read More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CourseDesc;
