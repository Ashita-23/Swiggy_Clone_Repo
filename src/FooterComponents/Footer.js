import "./Footer.css"
import "./FooterMedia.css"
import {Swiggy_API_URL_New} from '../Util/ApiConfig'
import {Swiggy_IMAGE_CDN_URL} from '../Util/ApiConfig'
import { useEffect } from "react"
import { useState } from "react"


const Footer = () =>{


   const [FooterData,setFooterData] = useState()
   console.log(FooterData , "FD")
  useEffect(()=>{
    getFooterData()
  },[])


  async function  getFooterData (){
    const FooterData = await fetch(Swiggy_API_URL_New)
    const FooterJson = await FooterData.json()
    // console.log(FooterJson,"FooterData")
    // setCitiesData(FooterJson?.data.cards[11]?.card?.card?.cities )
    // console.log(FooterJson?.data?.cards[9]?.card?.card?.cities ,"cities name")
    // console.log(FooterJson?.data?.cards[6]?.card?.card?.cuisines ,"cuisines name")
    // console.log(FooterJson?.data?.cards[5]?.card?.card?.brands ,"brands name")
    // console.log(FooterJson?.data?.cards[8]?.card?.card ,"download  info")

    setFooterData(FooterJson)
  }

    return(<>
  <div className="footer-outer">
   {/* <h1>Footer</h1> */}



 <div className="downloadInfo">
 <div className="textBox">
 <p className="infoText">{FooterData?.data?.cards[8]?.card?.card?.title}</p></div>
 <div className="appImagebox">
 <a href={FooterData?.data?.cards[8]?.card?.card?.androidAppLink}><img className="appImage" src={Swiggy_IMAGE_CDN_URL+FooterData?.data?.cards[8]?.card?.card?.androidAppImage} /></a></div>
 <div className="appImagebox"><a href={FooterData?.data?.cards[8]?.card?.card?.iosAppLink} ><img className="appImage" src={Swiggy_IMAGE_CDN_URL+FooterData?.data?.cards[8]?.card?.card?.iosAppImage} /></a></div>
 </div>

{/* 
   <div className="cuisineInfo">
    <h2 className="cuisineText">{FooterData?.data?.cards[6]?.card?.card?.title}</h2>
    <div className="cuisineCardOuter" key={FooterData?.data?.cards[6]?.card?.card?.cuisines?.id}>
    {
      FooterData?.data?.cards[6]?.card?.card?.cuisines?.map((cuisine)=><span className="cuisineCard">{cuisine.text}</span>)
    }
    </div>
   

   </div> */}

   <br/>
   {/* <div className="deliverTo">
   <h2 className="cuisineText">We deliver to:</h2>
    <div className="cuisineCardOuter" key={ FooterData?.data?.cards[9]?.card?.card?.cities?.id}>
    {
      FooterData?.data?.cards[9]?.card?.card?.cities?.map((citie)=><span className="cuisineCard">{citie.text}</span>)
    }
</div>
   </div> */}
   
   {/* <div className="brandBox">
  
     <h2 className="cuisineText">{FooterData?.data?.cards[5]?.card?.card?.title}</h2>
     <div  className="cuisineCardOuter">
    {
      FooterData?.data?.cards[5]?.card?.card?.brands?.map((brand)=><span className="cuisineCard">{brand.text}</span>)
    }
</div>
   </div> */}
   {/* <div className="nearMe">
  
     <h2 className="cuisineText">{FooterData?.data?.cards[7]?.card?.card?.title}</h2>
     <div  className="cuisineCardOuter">
    {
      FooterData?.data?.cards[7]?.card?.card?.brands?.map((brand)=><span className="cuisineCard"><a href={brand.link}>{brand.text}</a></span>)
    }
</div>
   </div> */}

  </div>
    </>)
}

export  default Footer