import { useState, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider, useApp } from "./context/AppContext";
import "./App.css";
import Components from "./pages/components";
import RouteLayout from "./layout/RouteLayout";
import StudentPages from "./pages/Students/Index";
import TutorsPages from "./pages/Tutors/Index";
import CourseProgress from "./pages/AllComponents/courses/CourseProgress";
import Homepage from "./pages/Landing/Index";
import LiveComment from "./pages/AllComponents/liveClasses/LiveComment";
import CourseDesc from "./pages/AllComponents/CourseDesc";

const App = () => {
  // const [loading, setLoading] = useState(true);
  const preloader = document.getElementById("preloader");
  // const { token } = user || {};

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = "none";
      // setLoading(false);
    }, 1000);
  }

  return (
    <Fragment>
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/app/home" element={<Homepage />} />
            <Route path="/app/course-description" element={<CourseDesc />} />
            <Route path="/components" element={<Components />} />
            <Route path="app" element={<RouteLayout children={null} />}>
              <Route
                path="students/dashboard"
                element={<StudentPages.Dashboard />}
              />
              <Route
                path="students/courses"
                element={<StudentPages.Courses />}
              />
              <Route path="students/courses/:id" element={<CourseProgress />} />
              <Route
                path="students/profile"
                element={<StudentPages.Profile />}
              />
              <Route
                path="students/certificates"
                element={<StudentPages.Certificates />}
              />
              <Route path="students/live-classes">
                <Route index element={<StudentPages.LiveClasses />} />
                <Route path="ongoing-class/:id" element={<LiveComment />} />
              </Route>
              <Route
                path="tutors/dashboard"
                element={<TutorsPages.Dashboard />}
              />
              <Route path="tutors/courses" element={<TutorsPages.Courses />} />
              <Route
                path="tutors/courses/courseupload"
                element={<TutorsPages.CourseUpload />}
              />
            </Route>
          </Routes>
        </Router>
      </AppProvider>
    </Fragment>
  );
};

export default App;
