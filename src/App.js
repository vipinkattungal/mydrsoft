import "./index.css";
import React, { useState, useEffect } from 'react';
import Navbar from './component/layout'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { styled, useTheme } from '@mui/material/styles';

import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import Login from './login'
import DashboardCard from './component/dsbrd'


export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
  //  localStorage.getItem("login") && setIsLoggedIn(false)

  }, [localStorage.getItem("login")])
  const handleItemClick = (componentName) => {
    // const navigate = useNavigate();
  
  // if(componentName === 'Dashbord'){
  //   return           <Link to="/"></Link>
  
  
  // }
      // console.log(componentName);
      // setActiveComponent(componentName);
      // setOpen(false);
    };
  
  return (
    <div className="App">
    {  isLoggedIn ?  (<Router>
        <Routes>
          <Route path="/" element={<Login setIsLoggedIn={isLoggedIn} />} />
        


        </Routes>
      </Router>):
      <>
      <Navbar/>
      </>

}
    </div>

  );
}

