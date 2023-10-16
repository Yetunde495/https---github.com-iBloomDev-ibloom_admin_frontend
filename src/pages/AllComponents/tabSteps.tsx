import FormExample from "./Forms";
import BasicComponents from "./Modals";

interface AllComponentStepProps {
    step?: string;
  }

const AllComponentStep = ({ step }: AllComponentStepProps) => {
  switch (step) {
    case 'Basic':
      return <BasicComponents />;
    case 'Forms':
      return <FormExample /> ;
   
    default:
      return null;
  }
};


export default AllComponentStep;