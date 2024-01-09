import { Fragment, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import { useApp } from "./context/AppContext";

import "./App.css";
// import { AuthenticatedRoutes, UnAuthenticatedRoutes } from "./pages";
import { Loader } from "./components/Loader";
import Homepage from "./pages/Landing/Index";
import StudentPages from "./pages/Students/Index";
import AuthPages from "./pages/Authentication/Index";
import TutorsPages from "./pages/Tutors/Index";
import LiveComment from "./pages/AllComponents/liveClasses/LiveComment";
import CourseDesc from "./pages/AllComponents/CourseDesc";
import Components from "./pages/components";
import CourseProgress from "./pages/AllComponents/courses/CourseProgress";
import RouteLayout from "./layout/RouteLayout";

const App = () => {
  // const { user, isLoggedIn, loadData } = useApp();
  const [loading, setLoading] = useState(true);
  const preloader = document.getElementById("preloader");

  useEffect(() => {
    // loadData();

    if (preloader) {
      setTimeout(() => {
        preloader.style.display = "none";
        setLoading(false);
      }, 100);
    }

    //
  }, [preloader]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <>
              <Route path="/" element={<Homepage />} />
              <Route path="*" element={<Homepage />} />
              <Route path="/signup" element={<AuthPages.StudentSignup />} />
              <Route path="/signin" element={<AuthPages.Signin />} />
              <Route
                path="/email-verification"
                element={<AuthPages.EmailVerification />}
              />
              <Route path="/email-return" element={<AuthPages.EmailReturn />} />
              <Route
                path="/forgot-password"
                element={<AuthPages.ResetPassword />}
              />
              <Route
                path="/reset-verification"
                element={<AuthPages.ResetPasswordVerification />}
              />
              <Route
                path="/reset-password"
                element={<AuthPages.ResetPasswordForm />}
              />

              <Route path="/components" element={<Components />} />
            </>

            <>
              {/* <Route path="/" element={<Homepage />} /> */}
              <Route path="/app" element={<RouteLayout />}>
                <Route path="/app/home" element={<Homepage />} />
                <Route
                  path="/app/course-description"
                  element={<CourseDesc />}
                />
              </Route>
              <Route path="app" element={<RouteLayout children={null} />}>
                <Route
                  path="students/dashboard"
                  element={<StudentPages.Dashboard />}
                />
                <Route
                  path="students/courses"
                  element={<StudentPages.Courses />}
                />
                <Route
                  path="students/courses/:id"
                  element={<CourseProgress />}
                />
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
                <Route
                  path="tutors/courses"
                  element={<TutorsPages.Courses />}
                />
                <Route
                  path="tutors/courses/courseupload"
                  element={<TutorsPages.CourseUpload />}
                />
              </Route>
            </>
          </Routes>
        </Router>
      )}
    </Fragment>
  );
};

export default App;
