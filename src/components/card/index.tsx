import { Link, useNavigate, useNavigation } from "react-router-dom";
import ProgressBar from "../ProgressBar";

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
    <div className="w-[350px] h-[290px] rounded-md p-2 border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="w-full h-[50%]">
        <img src={preview_img_url} className="w-full h-full" />
      </div>

      <div className="flex justify-between items-center px-1 py-3">
        <div className="">
          <h4 className="text-lg font-bold">{title}</h4>
          <p className="text-primary ">{progress_bookmark}</p>
        </div>

        <div className="">
          <ProgressBar percent={progress} />
        </div>
      </div>

      <div className="px-1">
        <button
          onClick={() => navigate(progress_url)}
          style={{
            backgroundColor: customBackgroundColor || "#3843D0",
            color: textColor || "#fff",
          }}
          className="w-full py-2.5 px-4 rounded-md text-white hover:bg-primary"
        >
          Continue Learning
        </button>
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
}) => {
  const navigate = useNavigate();
  const cardStyle = {
    backgroundImage: `url("${preview_img_url}")`,
    backgroundSize: "cover", // Adjust this according to your needs
  };
  return (
    <div className="w-[30rem] flex h-[200px] rounded-md border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className={`h-full w-[40%]`} style={cardStyle}>
        {/* <img src={preview_img_url} className="h-full object-fit" /> */}
      </div>

      <div className="px-3 py-3">
        <div className="">
          <h4 className="text-lg font-bold">{title}</h4>
          <p className="text-primary ">Duration: {duration}</p>
        </div>

        {/* <div className="px-1">
        <a onClick={() => navigate(progress_url)} className="w-full py-2.5 px-4 rounded-md">
          View More
        </a></div> */}
      </div>
    </div>
  );
};
