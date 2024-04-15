import  React from "react"
import {Link } from  'react-router-dom';
import service from "../img/service.png";
import doctor from "../img/doctor.png";
import period from "../img/period.png";
import health from "../img/health.png";
import wish from "../img/wf.png";
import explore from "../img/explore talent.png";
import help from "../img/helpline.png";
import "../index.css"
function Service()
{
    return(
    <div>
        <big><center><h1 className="si">The empowered woman is powerful beyond measure and beautiful beyond description.  
</h1></center></big>  <br/>
<div>	<center> <img src={service} width="600" height="490"  alt="img" className="responsive"/></center> </div>
<br/>
<big><center>
<hr/>
			<h1 className="fi">SERVICES OF IVAL</h1></center></big>
			<hr/>
            
            <div> 
		<center><table className="servicemain">
            <tr>
		    <td><figure><img src={doctor} width="300" height="300"  alt="img"className="responsive"/>
             <center><figcaption> Doctor Consultation <br/> <Link to='/doctor'  id="o">  DOCTOR </Link> </figcaption></center>
	        </figure></td>
	       <td><figure><img src={period} width="300" height="300" alt="img" className="responsive"/>
	          <center><figcaption>Period Tracker    <br/><Link to='/period' id="o"> PERIOD</Link>   </figcaption></center>
                   </figure></td>
                    <td><figure><img src={help} width="300" height="300" alt="img" className="responsive"/>
	          <center><figcaption> Help Line   <br/><Link to='/period' id="o"> HELP LINE</Link>   </figcaption></center>
                   </figure></td>
                   
           </tr>
           <tr>
           <td><figure><img src={health} width="300" height="300" alt="img" className="responsive"/>
	          <center><figcaption>Health tips  <br/> <Link to='/health' id="o"> HEALTH</Link></figcaption></center>
	       </figure></td>
           <td><figure><img src={wish} width="300" height="300" alt="img" className="responsive"/>
	          <center><figcaption>Womenfriend  <br/> <Link to='/womenfriend'id="o">WOMENFRIEND</Link></figcaption></center>
                   </figure></td>
                    <td><figure><img src={explore} width="300" height="300" alt="img" className="responsive"/>
	          <center><figcaption> Explore Talent    <br/><Link to='/period' id="o"> EXPLORE TALENT</Link>   </figcaption></center>
	       </figure></td>
           </tr>
	   </table></center>
       </div>
    </div>
    )
    
}
export default Service;