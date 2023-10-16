import { useState, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider, useApp } from "./context/AppContext";
import './App.css'
import Components from "./pages/components";


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
            <Route path="/" element={<Components />} />
            
           
              
          </Routes>
        </Router>
      </AppProvider>
    </Fragment>
  );
};

export default App
