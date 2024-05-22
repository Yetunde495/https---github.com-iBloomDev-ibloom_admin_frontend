import AllWorksheets from "./AllWorksheets";
import PersonalWorksheets from "./PersonalWorksheets";
import ValidatorWorksheets from "./ValidatorWorksheets";

interface StepProps {
  step?: string;
}

const WorksheetTabSteps = ({ step }: StepProps) => {
  switch (step) {
    case "All Worksheets":
      return <AllWorksheets />;
    case "Validator's Uploaded Worksheet":
      return <ValidatorWorksheets />;
    case "My Uploaded Worksheets":
      return <PersonalWorksheets />;
    default:
      return null;
  }
};

export default WorksheetTabSteps;
