import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Navigation from "./src/NavComponent/Navigation"
// import Home from "./src/HeadComponents/Home"
import RestaurantCounter from "./src/BodyComponents/CounterComponents/CardsCounter"
import Footer from "./src/FooterComponents/Footer"
// import CardsShimmer from "./src/BodyComponents/ShimmerComponents/CardsShimmer"
// import ErrorInSearch from "./src/ErrorCompos/searchTextError"
// import CounterShimmer from "./src/BodyComponents/ShimmerComponents/CounterShimmer"
import MenuCounter from "./src/BodyComponents/MenuComponents/MenuCounter"

const App = ()=>{
    return(<>
    {/* <CardsShimmer/> */}
        <Navigation/>
        {/* <Home/> */}
        {/* <RestaurantCounter/> */}
        <MenuCounter></MenuCounter>
        {/* <ErrorInSearch></ErrorInSearch> */}
        {/* <CounterShimmer/> */}
        <Footer/>
    </>)
}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App/>)