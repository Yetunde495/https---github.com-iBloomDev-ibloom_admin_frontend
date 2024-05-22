import ContentManagement from "./ContentManagementPage";
import SuperAdminDashboard from "./Dashboard";
import Promotion from "./Promotion";
import Settings from "./SettingsPage/Index";
import UserManagement from "./UserManagement/Index";
import ParentDetail from "./UserManagement/ParentDetail";
import TeacherDetail from "./UserManagement/TeacherDetail";
import AllValidators from "./Validators/Index";
import ValidatorDetails from "./Validators/Validator";

function Index() {}


Index.Dashboard = SuperAdminDashboard;
Index.ContentManagement = ContentManagement;
Index.UserManagement = UserManagement;
Index.TeacherDetailPage = TeacherDetail;
Index.ParentDetailPage = ParentDetail;
Index.AllValidators = AllValidators;
Index.ValidatorDetailPage = ValidatorDetails;
Index.PromotionPage = Promotion;
Index.Settings = Settings;

export default Index;