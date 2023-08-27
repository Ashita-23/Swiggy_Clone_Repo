

const MenuOfferList= ({menuOffers})=>{
    // console.log(menuOffers,"MOFL")


    return (
        <div className="menuOffer_outer">
         <div className="menuOffer_titleBox">
           <span><i className="fa-solid fa-clock-rotate-left"></i> 35</span>{" "}
           <span><i className="fa-solid fa-indian-rupee-sign"></i> ₹250 for two</span>
         </div>
         <div className="menuOffer_cardsBox">

         {
           menuOffers?.offers?.map((offList)=>{
             return(  <div className="menuOffer_Card">
             <h4><i className="fa-solid fa-tags"></i> {offList?.info?.header}</h4>
              <p>{offList?.info?.couponCode}|{offList?.info?.description}</p>
             </div>)
           })
         }
          
         </div>
        </div>)
}

export default  MenuOfferList