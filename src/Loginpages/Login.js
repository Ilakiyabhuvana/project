import React from "react";
import {Link } from  'react-router-dom';
import "../index.css"
function Login()
{
return(
  <div>
   <br/>
    <br/>
   
<div className="loginpages">
  <center>
<Link className="at" to='/adminlogin' > ADMIN LOGIN </Link>  
          <Link  className="at" to='/signup' > USERLOGIN </Link> 
          <Link  className="at" to='/' > LOGOUT</Link> 
          </center> 
  </div>
  <br/>
  <br/>
  </div>
)
}
export default Login;