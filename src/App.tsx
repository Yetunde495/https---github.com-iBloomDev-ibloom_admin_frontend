import { Fragment, useEffect, useState } from "react";
import "./App.css";
import { DATA_CENTER_TOKEN, useApp } from "./context/AppContext";
import { Loader } from "./components/Loader";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import axios from "axios";
import Signin from "./pages/General/SigninMenuPage";
import SuperAdminPages from "./pages/SuperAdmin/Index";
import ValidatorPages from "./pages/Validator/Index";
import AuthPages from "./pages/Authentication/Index";

import RouteLayout from "./layout/RouteLayout";
import AdminContentManagement from "./pages/Admin/ContentManagementPage";

axios.defaults.baseURL = "";

function App() {
  const { signOut, loadData } = useApp();
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
        }
      }

      return Promise.reject(error);
    }
  );

  useEffect(() => {
    if (preloader) {
      setTimeout(() => {
        preloader.style.display = "none";
        setLoading(false);
      }, 100);
    }

    //
  }, [preloader]);

  useEffect(() => {
    loadData();
  }, []);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <>
              <Route path="/" element={<Signin />} />
            </>

            {/* Auth Pages */}
            <>
              <Route path="/admin-signin" element={<AuthPages.Signin />} />
              <Route
                path="/validator-signin"
                element={<AuthPages.ValidatorSignin />}
              />
              <Route
                path="/validator-confirmation"
                element={<ValidatorPages.ConfirmationFlow />}
              />

              <Route
                path="/forgot-password"
                element={<AuthPages.ResetPassword />}
              />
              <Route
                path="/reset-password/:email"
                element={<AuthPages.ResetPasswordForm />}
              />
            </>
            {/* Auth Pages */}

            {/* Validator Pages */}
            <>
              <Route path="app" element={<RouteLayout children={null} />}>
                <Route
                  path="validator/dashboard"
                  element={<ValidatorPages.Dashboard />}
                />
                <Route
                  path="validator/worksheets"
                  element={<ValidatorPages.WorksheetsPage />}
                />
                <Route
                  path="validator/profile"
                  element={<ValidatorPages.Profile />}
                />
              </Route>
            </>
            {/* Validator Pages */}

           {/* SuperAdmin  */}
            <>
              <Route path="app" element={<RouteLayout children={null} />}>
                <Route
                  path="superadmin/dashboard"
                  element={<SuperAdminPages.Dashboard />}
                />
                <Route
                  path="superadmin/content-management"
                  element={<SuperAdminPages.ContentManagement />}
                />
                <Route
                  path="superadmin/content-management/:page/:subject/:topic"
                  element={<SuperAdminPages.ContentManagement />}
                />
                <Route
                  path="superadmin/user-management"
                  element={<SuperAdminPages.UserManagement />}
                />
                 <Route
                  path="superadmin/user-management/teacher/:id"
                  element={<SuperAdminPages.TeacherDetailPage />}
                />
                <Route
                  path="superadmin/user-management/parent/:id"
                  element={<SuperAdminPages.ParentDetailPage />}
                />
                 <Route
                  path="superadmin/validators"
                  element={<SuperAdminPages.AllValidators />}
                />
                 <Route
                  path="superadmin/validators/:id"
                  element={<SuperAdminPages.ValidatorDetailPage />}
                />
                 <Route
                  path="superadmin/promotion-management"
                  element={<SuperAdminPages.PromotionPage />}
                />
                 <Route
                  path="superadmin/settings"
                  element={<SuperAdminPages.Settings />}
                />
              </Route>
            </>
           {/* SuperAdmin  */}
            <>
              <Route path="app" element={<RouteLayout children={null} />}>
                <Route
                  path="admin/content-management"
                  element={<AdminContentManagement />}
                />
                <Route
                  path="admin/content-management/:page/:subject/:topic"
                  element={<AdminContentManagement />}
                />
              </Route>
            </>
          </Routes>
        </Router>
      )}
    </Fragment>
  );
}

export default App;
