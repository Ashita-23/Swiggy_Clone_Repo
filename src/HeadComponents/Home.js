import "./home.css";
import {Link} from "react-router-dom"
import {Home_Config } from  "../Assets/Home_Assets/homeConfig"
import Swigyy from  "../Assets/Home_Assets/Swigyy.gif"
import Home_Cards from "./homeCards";

const Home = () => {
    // console.log(Home_Config)
  return (
    <>
      <div className="home-outer">
        <div className="home-intro-box">
          <div className="home-intro-text">
            <h1 className="heading">Foodies</h1>
            <p className="title">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium suscipit provident et explicabo, sed ducimus eaque
              saepe in id vitae at quidem beatae ea maxime.
            </p>
            <button className="home-btn"><Link to={"/restaurant"}>order now</Link></button>
          </div>
          <div className="home-image-box">
            <img src={Swigyy} className="img-box"/>
          </div>
        </div>
        <div className="home-Cards-box">
        {/* <h1>Click On Order Now to view our </h1> */}
        {
            Home_Config.map((Cards)=>{
                return( <Home_Cards HomeCards={Cards} />)
               
        })
        }
        </div>
       
      </div>
    </>
  );
};

export default Home;
