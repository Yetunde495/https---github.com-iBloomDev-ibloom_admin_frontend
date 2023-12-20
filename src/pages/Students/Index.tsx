import Certificates from "./Certificates";
import StudentCourses from "./Courses";
import StudentDashboard from "./Dashboard";
import LiveClasses from "./LiveClasses";
import Profile from "./Profile";


function Index() {}

Index.Dashboard = StudentDashboard;
Index.Courses = StudentCourses;
Index.LiveClasses = LiveClasses;
Index.Profile = Profile;
Index.Certificates = Certificates;

export default Index;
