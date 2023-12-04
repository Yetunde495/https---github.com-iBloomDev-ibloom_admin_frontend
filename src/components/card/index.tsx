import { Link, useNavigate, useNavigation } from "react-router-dom";
import ProgressBar from "../ProgressBar";

export const ProgressCourseCard: React.FC<InProgressCourseCardData> = ({
  title,
  preview_img_url,
  progress,
  progress_bookmark,
  progress_url,
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
      >
      </div>

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
