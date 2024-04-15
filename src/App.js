import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chatbot from "./component/Chat";
import Help from './pages/Help';
import Service from './pages/Service';
import Signup from './Loginpages/Signup';
import Login from './Loginpages/Login';
import Adminlogin from './Loginpages/Adminlogin';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './pages/Footer';
import Nav from './pages/Nav';
import Period from './servicepages/Period';
import Wishlist from "./servicepages/Womenfriend";
import Doctor from "./servicepages/Doctor";
import Health from "./servicepages/Health";
import "./index.css"
function App() {
  return (
   
    <div className="navbody">
       <Router>
      <Nav/>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/service" element={<Service />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/help" element={<Help />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/adminlogin" element={<Adminlogin/>}></Route>
      <Route path="/doctor" element={<Doctor/>}></Route>
      <Route path="/period" element={<Period/>}></Route>
      <Route path="/womenfriend" element={<Wishlist/>}></Route>
        <Route path="/health" element={<Health/>}></Route>
        </Routes>
        <Chatbot/>
<Footer/>
      </Router>
    </div>
    
  );
}
 
export default App;
