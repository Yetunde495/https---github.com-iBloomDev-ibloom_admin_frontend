import Certificates from "./Certificates";
import StudentCourses from "./Courses";
import StudentDashboard from "./Dashboard";
import LiveClasses from "./LiveClasses";
import Profile from "./Profile";


function Index() {}

Index.Dashboard = StudentDashboard;
Index.Profile = Profile;
Index.Certificates = Certificates;
Index.LiveClasses = LiveClasses;
Index.Courses = StudentCourses;




export default Index;