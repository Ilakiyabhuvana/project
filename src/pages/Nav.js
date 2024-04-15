import React from "react";
import {Link } from  'react-router-dom';
import "../index.css"
import logo from "../img/logo.png";
function Nav()
{
    return (
        <div >
<div className="header">  
<img  className="logoi" src={logo} alt="" width="80"/>
         <ul className="main-nav">
        <li> <Link className="a" to='/' >  HOME </Link>  </li> 
        <li>   <Link className="a"to='/about' > ABOUT</Link>  </li>
        <li>  <Link className="a"to='/service' > SERVICE</Link> </li>
        <li>   <Link className="a" to='/help' >    BLOG </Link>  </li>
        <li>   <Link className="a" to='/login' >   LOGIN</Link> </li>
        </ul>
</div> </div>)
}
export default  Nav;
