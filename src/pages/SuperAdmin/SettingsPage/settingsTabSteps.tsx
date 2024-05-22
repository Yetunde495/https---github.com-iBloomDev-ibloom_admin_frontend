import AdminManagement from "./AdminManagement";
import CouponManagement from "./CouponManagement";
import Profile from "./Profile";

interface StepProps {
  step?: string;
}

const SettingsTabSteps = ({ step }: StepProps) => {
  switch (step) {
    case "Profile Settings":
      return <Profile />;
    case "Admin Management":
      return <AdminManagement />;
    case "Coupon Management":
      return <CouponManagement />;
    default:
      return null;
  }
};

export default SettingsTabSteps;