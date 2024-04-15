 import  React from "react"
 function Doctor()
 {
      return(
        <div className="doctormain">
          <center>
            <div className="mainform">
  <div className="wrapperdoctor">
 <div className="registration_form">
  <div className="title">  Registration Form</div>
 <form>
 <div className="form_wrap">
<div className="input_wrap">
   <label for="fname">First Name</label>
   <input type="text" id="fname"/>
     </div>
  <div className="input_wrap">
      <label for="lname">Last Name</label>
      <input type="text" id="lname"/>
    </div>
 <div className="input_wrap">
  <label for="date">Date</label>
  <input type="text" id="email"/>
 </div>

 <div className="input_wrap">
  <label for="city">userId</label>
  <input type="number" id="city"/>
 </div>

 <div className="input_wrap">
  <label for="country">symptoms</label>
  <input type="text" id="country"/>
 </div>
 
 <div className="input_wrap">
   <input type="submit" value="Register Now" className="submit_btn"/>
 </div>
</div>
</form>
</div>
</div>
</div>
</center>
    </div>
      );
 }
 export default Doctor;