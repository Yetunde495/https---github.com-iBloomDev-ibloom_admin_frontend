/* eslint-disable @typescript-eslint/no-explicit-any */
import DefaultLayout from "../../../layout/DefaultLayout";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import PreviewVideo from "../../../assets/images/Video.png";
import PreviewImg from "../../../assets/images/Image.png";
import { ProgressCourseCard } from "../../../components/card";
import CourseAccordion from "./CourseAccordion";
import Assessment from "./Assessment";
import Transcription from "./Transcription";
import { Link } from "react-router-dom";

const data = {
  title: "Intro to Product Design",
  tutor_name: "Tutor Name",
  points: 50,
  preview_video_url: PreviewVideo,
  total_points: "100",
};

const data2 = [
  {
    title: "Intro to Product Design",
    progress: 60,
    progress_url: "",
    preview_img_url: PreviewImg,
    progress_bookmark: "6-8 weeks",
  },
  {
    title: "Intro to Product Design",
    progress: 40,
    progress_url: "",
    preview_img_url: PreviewImg,
    progress_bookmark: "8-10 weeks",
  },
  {
    title: "Intro to Product Design",
    progress: 30,
    progress_url: "",
    preview_img_url: PreviewImg,
    progress_bookmark: "22 hours",
  },
];

const CourseProgress = ({ embedId = "rokGy0huYEA" }) => {
  return (
    <DefaultLayout>
      <section>
        <div className="flex gap-1 items-center mb-10 dark:text-slate-200">
          <IoIosArrowRoundBack />
          <Link
            to="/app/students/courses"
            style={{ color: "#000" }}
            className="font-bold"
          >
            Back
          </Link>
        </div>
        <div className="flex justify-between gap-25">
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold dark:text-slate-200">
                {data.title}
              </h1>

              <p className="text-slate-500 text-xs font-bold">
                {data.points}
                <span className="text-primary">/{data.total_points}</span>
              </p>
            </div>

            <div>
              <p className="text-xs text-indigo-300">By {data.tutor_name}</p>
            </div>
            <div className="mt-10">
              <div className="w-full">
                {/* <img src={data.preview_video_url} width="100%" /> */}

                <iframe
                  width="100%"
                  height="480"
                  src={`https://www.youtube.com/embed/${embedId}`}
                  style={{ borderRadius: "8px" }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              </div>

              <div className="mt-15">
                <h4 className="font-bold dark:text-slate-200">Transcript</h4>
                <Transcription />

                <div className="flex justify-end">
                  <button className="flex items-center gap-1 bg-primary text-white py-1 px-2 rounded-md">
                    Next <IoIosArrowRoundForward />
                  </button>
                </div>
              </div>

              <div className="">
                <CourseAccordion />
              </div>

              <div>
                <Assessment />
              </div>
            </div>
          </div>

          <div>
            <p className="font-bold dark:text-slate-200">
              Pick up where you left off
            </p>
            <div className="flex gap-3 lg:gap-6 flex-wrap py-4 w-full">
              {data2.map((val, index) => (
                <ProgressCourseCard
                  key={index}
                  title={val.title}
                  progress={val.progress}
                  progress_url={val.progress_url}
                  preview_img_url={val.preview_img_url}
                  progress_bookmark={val.progress_bookmark}
                />
              ))}
            </div>

            <div className="flex justify-end w-2/3">
              <button className="font-bold">See all</button>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default CourseProgress;
