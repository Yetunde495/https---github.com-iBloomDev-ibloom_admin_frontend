import { useState, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider, useApp } from "./context/AppContext";
import './App.css'
import Components from "./pages/components";
import RouteLayout from "./layout/RouteLayout";

import StudentPages from "./pages/Students/Index"
import Homepage from "./pages/Landing/Index";


const App = () => {
  const [loading, setLoading] = useState(true);
  const preloader = document.getElementById("preloader");
  // const { token } = user || {};


  if (preloader) {
    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 1000);
  }

 

  return (
    <Fragment>
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/app/home" element={<Homepage />} />
            <Route path="/components" element={<Components />} />
            <Route path="app" element={<RouteLayout children={null} />}>
            <Route path="students/dashboard" element={<StudentPages.Dashboard />} />
        
          </Route>
           
              
          </Routes>
        </Router>
      </AppProvider>
    </Fragment>
  );
};

export default App
