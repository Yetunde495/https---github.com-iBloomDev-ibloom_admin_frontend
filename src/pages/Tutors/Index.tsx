import CourseUpload from "./CourseUpload";
import Courses from "./Courses";
import TutorDashboard from "./Dashboard";
import LiveClasses from "./LiveClasses";
import CreateLiveClasses from "./CreateLiveClasses";
import Profile from "./Profile";

function Index() {}

Index.Dashboard = TutorDashboard;
Index.Courses = Courses;
Index.CourseUpload = CourseUpload;
Index.LiveClasses = LiveClasses;
Index.CreateLiveClasses = CreateLiveClasses;
Index.Profile = Profile;

export default Index;
