import AllParents from "./AllParents";
import AllStudents from "./AllStudents";
import AllTeachers from "./AllTeachers";

interface StepProps {
  step?: string;
}

const UserTabSteps = ({ step }: StepProps) => {
  switch (step) {
    case "Teachers":
      return <AllTeachers />;
    case "Parents":
      return <AllParents />;
    case "Students":
      return <AllStudents />;
    default:
      return null;
  }
};

export default UserTabSteps;