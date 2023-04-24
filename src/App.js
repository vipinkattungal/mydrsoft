import "./index.css";
import React , {useState}from 'react';
import Navbar from'./component/layout'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import Login from './login'
import DashboardCard from './component/dsbrd'
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="App">
        {isLoggedIn ?  <Router>
      <Routes>
        {/* <Route path="/" element={<DashboardCard />} /> */}
        {/* <Route path="/" element={<Login />} /> */}
        <Route exact path="/">
        {/* <Route path="/Addpt" element={<DashboardCard />} /> */}
   
          { <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />}/>}
        </Route>
      </Routes>
    </Router> :<Navbar/>}
    </div>
  );
}

