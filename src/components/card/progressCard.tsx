import classNames from "classnames";
import ProgressBar from "../ProgressBar";

interface ProgressCardProps {
  name: string;
  progress: number | string;
  grade: string | number;
}
const Tag: React.FC<{ tag: "Excellent" | "Bad" }> = ({ tag = "Excellent" }) => {
  const style = {
    Excellent: "text-success bg-[#1B96201A]",
    Bad: "text-danger bg-danger/15",
  };

  const tagClasses = classNames(
    "flex items-center justify-center overflow-hidden rounded-md text-xs p-1",
    style[tag]
  );
  return <span className={tagClasses}>{tag}</span>;
};

const ProgressCard: React.FC<ProgressCardProps> = ({
  name,
  progress,
  grade,
}) => {
  return (
    <div className="relative bg-[#23769E0D] gap-5 p-3 xs:w-64 w-full h-40 rounded-xl mb-5">
      <div className="flex justify-between">
        <p className="text-[#4F4F4F] text-sm">Class performance</p>
        <Tag tag="Excellent" />
      </div>

      <p className="my-2">{name} Classroom</p>

      <div>
        <ProgressBar percent={Number(progress)} />
        <p className="font-normal mt-1">{progress}%</p>
      </div>

      <span className="text-sm text-primary absolute right-3 bottom-2">
        Grade {grade}
      </span>
    </div>
  );
};

export default ProgressCard;
