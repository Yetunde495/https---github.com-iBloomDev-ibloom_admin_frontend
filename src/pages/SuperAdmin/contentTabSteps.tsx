import AllWorksheets from "./AllWorksheets";
import CurriculumManagement from "./CurriculumManagement";
import Feedbacks from "./Feedbacks";

interface StepProps {
  step?: string;
}

const ContentTabSteps = ({ step }: StepProps) => {
  switch (step) {
    case "Worksheets":
      return <AllWorksheets />;
    case "Curriculum Management":
      return <CurriculumManagement />;
    case "Feedbacks":
      return <Feedbacks />;
    default:
      return null;
  }
};

export default ContentTabSteps;
