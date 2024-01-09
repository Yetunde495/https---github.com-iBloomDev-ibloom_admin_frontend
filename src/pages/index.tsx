import { Route, Routes } from "react-router-dom";
import RouteLayout from "../layout/RouteLayout";
import Homepage from "./Landing/Index";
import StudentPages from "./Students/Index";
import AuthPages from "./Authentication/Index";
import TutorsPages from "./Tutors/Index";
import LiveComment from "./AllComponents/liveClasses/LiveComment";
import CourseDesc from "./AllComponents/CourseDesc";
import Components from "./components";
import CourseProgress from "./AllComponents/courses/CourseProgress";

//AUTHENTICATED ROUTES

export const AuthenticatedRoutes = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/app" element={<RouteLayout />}>
      <Route path="/app/home" element={<Homepage />} />
      <Route path="/app/course-description" element={<CourseDesc />} />
    </Route>
    <Route path="app" element={<RouteLayout children={null} />}>
      <Route path="students/dashboard" element={<StudentPages.Dashboard />} />
      <Route path="students/courses" element={<StudentPages.Courses />} />
      <Route path="students/courses/:id" element={<CourseProgress />} />
      <Route path="students/profile" element={<StudentPages.Profile />} />
      <Route
        path="students/certificates"
        element={<StudentPages.Certificates />}
      />
      <Route path="students/live-classes">
        <Route index element={<StudentPages.LiveClasses />} />
        <Route path="ongoing-class/:id" element={<LiveComment />} />
      </Route>
      <Route path="tutors/dashboard" element={<TutorsPages.Dashboard />} />
      <Route path="tutors/courses" element={<TutorsPages.Courses />} />
      <Route
        path="tutors/courses/courseupload"
        element={<TutorsPages.CourseUpload />}
      />
    </Route>
  </Routes>
);

//UNAUTHENTICATED ROUTES
export const UnAuthenticatedRoutes = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="*" element={<Homepage />} />
    <Route path="/signup" element={<AuthPages.StudentSignup />} />
    <Route path="/signin" element={<AuthPages.Signin />} />
    <Route
      path="/email-verification"
      element={<AuthPages.EmailVerification />}
    />
    <Route path="/email-return" element={<AuthPages.EmailReturn />} />
    <Route path="/forgot-password" element={<AuthPages.ResetPassword />} />
    <Route
      path="/reset-verification"
      element={<AuthPages.ResetPasswordVerification />}
    />
    <Route path="/reset-password" element={<AuthPages.ResetPasswordForm />} />

    <Route path="/components" element={<Components />} />
  </Routes>
);
