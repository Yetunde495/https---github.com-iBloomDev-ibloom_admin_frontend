import { Fragment, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useApp } from "./context/AppContext";

import "./App.css";
// import { AuthenticatedRoutes, UnAuthenticatedRoutes } from "./pages";
import { Loader } from "./components/Loader";
import Homepage from "./pages/Landing/Index";
import GeneralPages from "./pages/General/Index";
import StudentPages from "./pages/Students/Index";
import AuthPages from "./pages/Authentication/Index";
import TutorsPages from "./pages/Tutors/Index";
import LiveComment from "./pages/AllComponents/liveClasses/LiveComment";
import CourseDesc from "./pages/AllComponents/CourseDesc";
import Components from "./pages/components";
import CourseProgress from "./pages/AllComponents/courses/CourseProgress";
import RouteLayout from "./layout/RouteLayout";
import axios from "axios";
import { DATA_CENTER_TOKEN } from "./context/AppContext";

axios.defaults.baseURL = "https://api.bytedegrees.com/api/v1";

const App = () => {
  const { signOut } = useApp();
  const [loading, setLoading] = useState(true);
  const preloader = document.getElementById("preloader");

  axios.interceptors.request.use(
    (axiosConfig) => {
      const token = localStorage.getItem(DATA_CENTER_TOKEN);
      axiosConfig.headers.Authorization = `Bearer ${token}`;
      return axiosConfig;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response) {
        if (error?.response?.status === 401) {
          signOut();
        } else {
        }
      } else if (error.request) {
      } else {
        // flash error message
      }

      return Promise.reject(error);
    }
  );

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
                path="/reset-password/:email"
                element={<AuthPages.ResetPasswordForm />}
              />
              
              <Route
                path="/account-setup/student"
                element={<AuthPages.StudentAccountSetup />}
              />
               <Route
                path="/account-setup/tutor"
                element={<AuthPages.TutorAccountSetup />}
              />
               <Route
                path="/account-setup/organisation"
                element={<AuthPages.OrganisationAccountSetup />}
              />

              <Route path="/components" element={<Components />} />

              <Route path="/search" element={<GeneralPages.SearchPage />} />
              <Route path="/faq" element={<GeneralPages.FaqPage />} />
              <Route
                  path="tutors"
                  element={<TutorsPages.Dashboard />}
                />
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
