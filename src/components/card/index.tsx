import { Link, useNavigate, useNavigation } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaCircle } from "react-icons/fa";

export const ProgressCourseCard: React.FC<InProgressCourseCardData> = ({
  title,
  preview_img_url,
  progress,
  progress_bookmark,
  progress_url,
  customBackgroundColor,
  textColor,
}) => {
  const navigate = useNavigate();
  return (
    <div className="mx-2 sm:mx-0 w-auto relative rounded-md h-full p-2 border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="w-full">
        <img src={preview_img_url} className="w-full h-30" />
      </div>
      <div>
        <div className="flex sm:justify-between  px-1 sm:py-2 lg:mb-1">
          <div className="">
            <h4 className="lg:text-lg text-base font-bold ">{title}</h4>
            <p className="text-primary lg:text-base md:text-sm text-xs">
              {progress_bookmark}
            </p>
          </div>

          <div className="sm:block hidden">
            <ProgressBar percent={progress} />
          </div>
        </div>

        <div className="mt-4 px-1 md:py-4 py-2 w-full">
          <button
            onClick={() => navigate(progress_url)}
            className="w-full py-2.5 sm:px-4 sm:text-base text-sm bg-primary/90 rounded-md  text-white hover:bg-primary"
          >
            Continue Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export const CourseCard: React.FC<CourseData> = ({
  title,
  preview_img_url,
  duration,
  creator,
  course_url,
  tag,
}) => {
  const navigate = useNavigate();
  const cardStyle = {
    backgroundImage: `url("${preview_img_url}")`,
    backgroundSize: "cover", // Adjust this according to your needs
  };
  return (
    <div className="mx-2 md:mx-[15px] cursor-pointer md:w-auto flex md:flex-row flex-col md:h-full lg:h-[180px] rounded-md border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div
        className={`md:w-[40%] w-full sm:h-[150px] lg:h-full h-[120px]  `}
        style={cardStyle}
      ></div>

      <div className="px-3 py-3 relative">
        <div className="">
          <h4 className="text-lg font-bold">{title}</h4>
          <p className="text-primary ">Duration: {duration}</p>
        </div>

        <div className="px-1 py-2">
          <div className="flex gap-2 items-center">
            <span className="h-8 w-8 rounded-full">
              <img
                src={creator.photo}
                className="rounded-full object-cover h-full w-full "
              />
            </span>
            <small className="text-sm font-medium">{creator.name}</small>
          </div>
        </div>

        <div className="px-1 md:absolute  bottom-2 py-2">
          <span className={`text-sm py-1 px-4 rounded-sm bg-[#F8A33F]`}>
            {tag}
          </span>
        </div>
      </div>
    </div>
  );
};

export const CourseCard2: React.FC<CourseData> = ({
  title,
  preview_img_url,
  duration,
  creator,
  course_url,
  tag,
}) => {
  const navigate = useNavigate();
  const cardStyle = {
    backgroundImage: `url("${preview_img_url}")`,
    backgroundSize: "cover", // Adjust this according to your needs
  };
  return (
    <div className=" cursor-pointer w-full flex flex-col md:h-full">
      <div className={`w-full sm:h-[150px] h-[120px]`} style={cardStyle}></div>

      <div className="px-3 py-3 relative">
        <div className="mb-2">
          <h4 className="text-lg font-bold">{title}</h4>
          {/* <small className="text-sm font-medium">{creator.name}</small> */}
          <div className="flex gap-2 items-center">
            <span className="h-8 w-8 rounded-full">
              <img
                src={creator.photo}
                className="rounded-full object-cover h-full w-full "
              />
            </span>
            <small className="text-sm font-medium">{creator.name}</small>
          </div>
        </div>

        <div className="mb-3 pb-2 flex justify-between items-center">
          <p className={`text-lg font-semibold`}>$45.00</p>
          <p
            className={`text-sm font-medium text-danger bg-danger/10 rounded-xl px-3 py-1 `}
          >
            -15%
          </p>
        </div>

        {/* <div className="px-1">
          <span className={`text-sm py-1 px-4 rounded-sm bg-[#F8A33F]`}>
            {tag}
          </span>
        </div> */}
      </div>
    </div>
  );
};

export const LiveClassCard: React.FC<LiveClassCardData> = ({
  stateBtnText,
  card_action_text,
  preview_img_url,
  title,
  date,
  course_url,
  creator,
  time,
  liveDuration,
  showIcon,
  stateBtnTextCustomBgColor,
}) => {
  const navigate = useNavigate();
  return (
    <div className="mx-2 sm:mx-0 w-auto relative rounded-md h-full pb-2 ">
      <div className="w-full relative">
        <img src={preview_img_url} className="w-full h-30 rounded-md" />
        {liveDuration ? (
          <div className="absolute right-5 bottom-4 text-zinc-400 text-xs rounded-md bg-white px-2 py-1">
            <p>Started: {liveDuration}</p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="">
        <div className="flex sm:justify-between flex-col px-1 sm:pt-2">
          <div>
            <button
              className="rounded-full gap-1  py-2 px-3 text-white h-5 text-xs items-center text-center flex justify-center"
              style={{ backgroundColor: stateBtnTextCustomBgColor }}
            >
              {showIcon ? <FaCircle className="text-white" /> : ""}

              {stateBtnText}
            </button>
          </div>

          <div className="mt-2">
            <h4 className="lg:text-lg text-base font-bold ">{title}</h4>
            <div className="flex w-full">
              {/* First loop for images */}
              <div className="flex ">
                {creator.map((creatorItem, index) => (
                  <div
                    key={index}
                    className={`flex items-center my-1 ${
                      index > 0 ? "-ml-3" : ""
                    }`}
                  >
                    <img src={creatorItem?.photo} className="w-8 h-8" />
                  </div>
                ))}
              </div>

              {/* Second loop for names */}
              <div className="ml-3 flex gap-1">
                {creator.map((creatorItem, index) => (
                  <div key={index} className="flex items-center gap-2 my-2 ">
                    <p className="text-zinc-400 text-xs">
                      {creatorItem?.name}
                      {index < creator.length - 1 && ","}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="divide-x flex text-xs text-zinc-400">
              <p className="mr-1">{date} </p>
              <p className="pl-1">{time} </p>
            </div>
          </div>
        </div>

        <div className="px-1 w-full">
          <button
            onClick={() => navigate(course_url)}
            className="sm:text-base text-sm  flex items-center gap-2  text-primary"
          >
            {card_action_text}
            <IoIosArrowRoundForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export const TestimonialCard: React.FC<TestimonialCardData> = ({
  text,
  name,
  role,
  image,
}) => {
  return (
    <figure className="md:flex bg-white/90 rounded-xl p-8 md:p-0 ">
      <img
        className="w-24 h-24 md:w-48 md:h-auto md:rounded-xl rounded-full mx-auto object-cover"
        src={image}
        alt=""
        width="384"
        height="512"
      />
      <div className="lg:pt-1 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg">{text}</p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">{name}</div>
          <div className="text-slate-700 dark:text-slate-500">{role}</div>
        </figcaption>
      </div>
    </figure>
  );
};

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  link,
  bgColor,
}) => {
  const navigate = useNavigate();
  return (
    <figure
      className="rounded-xl w-64 h-40 "
      onClick={() => navigate(`${link}`)}
    >
      <div className={`w-full  h-2/3 mx-auto object-cover ${bgColor}`}></div>

      <div className="p-3  text-center bg-white flex justify-center items-center">
        <p>{title}</p>
      </div>
    </figure>
  );
};
