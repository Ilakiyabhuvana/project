import React from "react";
import { useState } from "react";
import Axios from "axios";
import Login from "./Login"
import "./login.css"

function Adminlogin()
{
    
    const [ausername,setAusername] = useState("");
    const [apassword,setApassword] = useState("");
    
 
     
    const alogin = ()=>{
      Axios.post("http://localhost:3001/alogin",{
        username:ausername,
        password:apassword
      }).then((response)=>{
        if(response.data.message)
        {
         alert(response.data.message);
        }
        else
        {
          alert("Hi" + response.data[0].username + "Welcome");
          
        }
      });
    };
  
    return(
    <div>
        <br/>
         <Login/>
         <br/>
         <br/>
         <center>
        <div className="adminform" >
                <form>
                    <label>ADMIN LOGIN</label>
                    <input type="text" name="username" placeholder="username"  onChange={(e)=>{
                setAusername(e.target.value);
              }} required/>
                    <input type="password" name="pswd" placeholder="Password" onChange={(e)=>{
                setApassword(e.target.value);
              }} required/>
                    <button onclick={ alogin}>Login</button>
                </form>
           
            </div>
            </center>
           
    </div>);
    
}
export default Adminlogin;