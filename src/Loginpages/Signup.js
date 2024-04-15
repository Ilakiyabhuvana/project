import React from "react";
import { useState } from "react";
import Axios from "axios";
import Login from "./Login"
import "./login.css"


function Signup()
{
   
     const [usernameReg,setUsernameReg] = useState("");
    const [passwordReg,setPasswordReg] = useState("");
    const [email,setEmail] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    
     const register = ()=>{
      Axios.post("http://localhost:3001/register",{
        username:usernameReg,
        password:passwordReg,
        email:email
      })
        .then((response) =>
        {
        console.log(response);
       
      });
    };
    const login = ()=>{
      Axios.post("http://localhost:3001/login",{
        username:username,
        password:password
      }).then((response)=>{
        if(response.data.message)
        {
          alert(response.data.message);
        }
        else
        {
          alert("Hi Welcome " + response.data[0].username);

        }
      });
    };
  
      return(
<div >
  <Login/>
<div className="loginmain">
    <div className="mainlogin">      
    <input type="checkbox" id="chk" aria-hidden="true"/>
            <div className="signuplogin">
                <form>
   <label for="chk" aria-hidden="true">Sign up</label>
   <input type="text"  placeholder="User name" onChange={(e)=>{
                    setUsernameReg(e.target.value);
                  }} required />
   <input type="email"  placeholder="Email" onChange={(e) => {
                    setEmail(e.target.value);
                  }} required />
   <input type="password"  placeholder="Password" onChange={(e) => {
            setPasswordReg(e.target.value);  }} required/>
  <button onClick={register}>Sign up</button>
               
                </form>
            </div>


            <div className="login">
                <form>
                    <label for="chk" aria-hidden="true">Login</label>
                    <input type="text" name="username" placeholder="username"  onChange={(e)=>{
                setUsername(e.target.value);
              }} required/>
                    <input type="password" name="pswd" placeholder="Password" onChange={(e)=>{
                setPassword(e.target.value);
              }} required/>
                    <button onClick={login}>Login</button>
                </form>
                
            </div>
    </div>
          </div>
          </div>
  );
}
  export default Signup;