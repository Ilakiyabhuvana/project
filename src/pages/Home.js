import  React from "react"
import image1 from "../img/image1.png";
import image2 from "../img/image2.png";
import image3 from "../img/image3.png";
import image4 from "../img/image4.png";
import "../index.css"
function Home()
{
     return(
    <div >
         <div className="mainbody">
    <div><center><div><big><h1 id="r1">"Welcome to Ival"</h1></big></div></center> </div> 
<div className="slides slowFade">
        <div className="slide">
            <img src={image1} alt="img"/>
        </div>
        <div className="slide">
            <img src={image2} alt="img"/>
        </div>
        <div className="slide">
            <img src={image3}alt="img"/>
        </div>
        <div className="slide">
            <img src={image4} alt="img"/>
        </div>
    </div>
    <br/><br/>
		<main>
		 <center><article><big><h1> IVAL IS VOICE OF THE WOMAN </h1></big>
		<p className="info">"IVAL" is a web-based application that provides many services and raises awareness for women.
It is mainly focused on providing services for women's development and empowerment. 
It includes all of the basic helplines for women and encourages them to grow. This website assists women in becoming self-sufficient and strong members of society. 
</p>
		 </article></center>
		</main><br/><br/>
         
             </div>
             </div>
     )
    
}
export default Home;