/* eslint-disable @typescript-eslint/no-explicit-any */
import DefaultLayout from "../../../layout/DefaultLayout";
import { IoIosArrowRoundBack } from "react-icons/io";
import PreviewVideo from "../../../assets/images/Video.png";
import PreviewImg from "../../../assets/images/Image.png";
import { LiveClassCard } from "../../../components/card";
import { Link } from "react-router-dom";
import Transcription from "../courses/Transcription";
import Avatar from "../../../assets/images/Avatar.png";
import LiveCommentAccordion from "./LiveCommentAccordion";

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
    progress_url: "",
    preview_img_url: PreviewImg,
    progress_bookmark: "2. Basics of Product Design",
    stateBtnText: "Live",
    card_action_text: "Join Class",
    course_url: "",
    liveDuration: "15 mins",
    showIcon: true,
    creator: [
      { name: "Angela", photo: Avatar },
      { name: "Angela", photo: Avatar },
    ],
  },
  {
    title: "Intro to Product Design",
    progress_url: "",
    preview_img_url: PreviewImg,
    progress_bookmark: "2. Basics of Product Design",
    stateBtnText: "Live",
    card_action_text: "Join Class",
    course_url: "",
    liveDuration: "15 mins",
    showIcon: true,
    creator: [{ name: "Angela", photo: Avatar }],
  },
  {
    title: "Intro to Product Design",
    progress_url: "",
    preview_img_url: PreviewImg,
    progress_bookmark: "2. Basics of Product Design",
    stateBtnText: "Live",
    card_action_text: "Join Class",
    course_url: "",
    liveDuration: "15 mins",
    showIcon: true,
    creator: [
      { name: "Angela", photo: Avatar },
      { name: "John", photo: Avatar },
    ],
  },
];

const LiveComment = ({ embedId = "rokGy0huYEA" }) => {
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
            <h1 className="text-xl font-bold dark:text-slate-200">
              {data.title}
            </h1>

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
              </div>

              <div className="">
                <LiveCommentAccordion />
              </div>
            </div>
          </div>

          <div>
            <p className="font-bold dark:text-slate-200">Live Classes</p>
            <div className="flex gap-3 lg:gap-6 flex-wrap py-4 w-full">
              {data2.map((val, index) => (
                <LiveClassCard
                  key={index}
                  title={val.title}
                  preview_img_url={val.preview_img_url}
                  stateBtnText={val.stateBtnText}
                  card_action_text={val.card_action_text}
                  course_url={`ongoing-class/${index}`}
                  liveDuration={val.liveDuration}
                  showIcon={val.showIcon}
                  creator={val.creator}
                  stateBtnTextCustomBgColor="#ff4343"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default LiveComment;
