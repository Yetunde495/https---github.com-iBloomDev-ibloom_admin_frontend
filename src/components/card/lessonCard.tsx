import classNames from "classnames";
import { ProgressBar3 } from "../ProgressBar";
import logo from "../../assets/logo/ibloom2 4.svg";
import icon1 from "../../assets/svgs/image-removebg-preview (16) 1.svg";
import icon2 from "../../assets/svgs/image 55.svg";
import icon3 from "../../assets/svgs/image 57.svg";
import icon4 from "../../assets/svgs/image 58.svg";
import { formatDate } from "../../utils/convertDateStampToString";

interface CardProps {
  progress: number | string;
  subject: string;
  topic?: string;
  subtopic: string;
  date?: string;
  noOfTopic?: string;
  noOfLessons?: string;
  onClick: () => void;
}
interface Card2Props {
    progress: number | string;
    subject: string | undefined;
    topic: string | undefined;
    date?: string;
    noOfTopic?: string;
    noOfLessons?: string;
    onClick: () => void;
  }
interface SubjectCardProps {
  progress: number | string;
  subject: string;
  topic: string;
  noOfLessons: string;
  noOfTopics: string;
  onClick: () => void;
}

const LessonCard: React.FC<CardProps> = ({
  progress,
  subject,
  topic,
  subtopic,
  onClick
}) => {
  const bg =
    subject === "Math"
      ? "bg-primary"
      : subject === "Reading"
      ? "bg-[#1B9620]"
      : subject === "Science"
      ? "bg-[#DDC64C]"
      : "bg-[#FE7427]";

  const tagClass = classNames("py-3 pr-3 h-1/2 rounded-t-xl text-white", bg);
  return (
    <div className="relative bg-white w-full h-65 rounded-xl shadow-2 cursor-pointer" onClick={onClick}>
      <div className={tagClass}>
        <div className="flex justify-between items-center mb-3">
          <div className="flex justify-between items-center border border-white/80 border-l-0 px-3 rounded-r-full  w-[60%]">
            <p className="">{subject}</p>
            <img
              src={
                subject === "Math"
                  ? icon1
                  : subject === "Reading"
                  ? icon2
                  : subject === "Science"
                  ? icon3
                  : icon4
              }
              alt="subject-logo"
              className="w-5"
            />
          </div>
          <img src={logo} alt="ibloom-logo" className="w-16" />
        </div>

        <h3 className="pl-3 text-xl">{topic}</h3>
      </div>

      <div className="p-3">
        <p className="text-lg">{subtopic}</p>
      </div>

      <div className="absolute bottom-0 w-full">
        <p className="mb-1 pl-3">{progress}% Complete</p>
        <ProgressBar3 percent={Number(progress)} />
      </div>
    </div>
  );
};

export const LessonCard2: React.FC<Card2Props> = ({
  progress,
  subject,
  topic,
  noOfTopic,
  noOfLessons,
  onClick
}) => {
  const bg =
    subject === "Math"
      ? "bg-primary"
      : subject === "Reading"
      ? "bg-[#1B9620]"
      : subject === "Science"
      ? "bg-[#DDC64C]"
      : "bg-[#FE7427]";

  const tagClass = classNames("py-3 pr-3 h-1/2 rounded-t-xl text-white", bg);
  return (
    <div className="relative bg-white w-full h-60 rounded-xl shadow-2 cursor-pointer" onClick={onClick}>
      <div className={tagClass}>
        <div className="flex justify-between items-center mb-3">
          <div className="flex justify-between items-center border border-white/80 border-l-0 px-3 rounded-r-full  w-[60%]">
            <p className="">{subject}</p>
            <img
              src={
                subject === "Math"
                  ? icon1
                  : subject === "Reading"
                  ? icon2
                  : subject === "Science"
                  ? icon3
                  : icon4
              }
              alt="subject-logo"
              className="w-5"
            />
          </div>
          <img src={logo} alt="ibloom-logo" className="w-16" />
        </div>

        <h3 className="pl-3 text-xl">{topic} <span>{noOfTopic && `(Topic ${noOfTopic})`}</span></h3>
      </div>

      <div className="p-3">
        <p className="text-lg">{noOfLessons} Lessons</p>
      </div>

      <div className="absolute bottom-0 w-full">
        {progress === "0" ? (
          <span className="text-slate-300 mb-1 pl-3">Not started</span>
        ) : (
          <p className="mb-1 pl-3">{progress}% Complete</p>
        )}

        <ProgressBar3 percent={Number(progress)} />
      </div>
    </div>
  );
};

export const WorksheetCard: React.FC<CardProps> = ({
  progress,
  subject,
  date,
  subtopic,
  onClick
}) => {
  const bg =
    subject === "Math"
      ? "bg-primary"
      : subject === "Reading"
      ? "bg-[#1B9620]"
      : subject === "Science"
      ? "bg-[#DDC64C]"
      : "bg-[#FE7427]";

  const tagClass = classNames("py-3 pr-3 h-1/2 rounded-t-xl text-white", bg);
  return (
    <div className="relative bg-white w-full h-50 rounded-xl shadow-2 cursor-pointer" onClick={onClick}>
      <div className={tagClass}>
        <div className="flex justify-between items-center mb-3">
          <div className="flex justify-between items-center border border-white/80 border-l-0 px-3 rounded-r-full  w-[60%]">
            <p className="">{subject}</p>
            <img
              src={
                subject === "Math"
                  ? icon1
                  : subject === "Reading"
                  ? icon2
                  : subject === "Science"
                  ? icon3
                  : icon4
              }
              alt="subject-logo"
              className="w-5"
            />
          </div>
          <img src={logo} alt="ibloom-logo" className="w-16" />
        </div>
      </div>

      <div className="p-3">
        <p className="text-lg">{subtopic}</p>
      </div>

      <div className="absolute bottom-0 w-full">
        <p className="mb-1 pl-3 text-sm">{date && formatDate(date)}</p>
        <ProgressBar3 percent={Number(progress)} />
      </div>
    </div>
  );
};

export const SubjectCard: React.FC<SubjectCardProps> = ({
  progress,
  subject,
  noOfTopics,
  noOfLessons,
  onClick
}) => {
  const bg =
    subject === "Math"
      ? "bg-primary"
      : subject === "Reading"
      ? "bg-[#1B9620]"
      : subject === "Science"
      ? "bg-[#DDC64C]"
      : "bg-[#FE7427]";

  const tagClass = classNames(
    "py-3 pr-3 h-1/2 relative overflow-hidden rounded-t-xl text-white",
    bg
  );
  return (
    <div className="relative bg-white w-full z-99 h-65 rounded-xl shadow-2 cursor-pointer" onClick={onClick}>
      <div className={tagClass}>
        <div className=" items-center my-5">
          <p className="px-6 text-2xl">{subject}</p>
        </div>

        <img
          src={
            subject === "Math"
              ? icon1
              : subject === "Reading"
              ? icon2
              : subject === "Science"
              ? icon3
              : icon4
          }
          alt="subject-logo"
          className="w-30 absolute translate-x-2 translate-y-5 transform rotate-12 -bottom-5 -right-3"
        />
      </div>

      <div className="bg-white z-999">
        <div className="p-3 flex justify-between">
          <p className="text-lg">{noOfTopics || 0} Topics</p>
          <p className="text-lg">{noOfLessons || 0} Lessons</p>
        </div>

        <div className="absolute bottom-0 w-full">
          <p className="mb-1 pl-3">{progress}% Complete</p>
          <ProgressBar3 percent={Number(progress)} />
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
