import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Navigation from "./src/NavComponent/Navigation"
// import Home from "./src/HeadComponents/Home"
import RestaurantCounter from "./src/BodyComponents/CounterComponents/CardsCounter"
import Footer from "./src/FooterComponents/Footer"

const App = ()=>{
    return(<>
        <Navigation/>
        {/* <Home/> */}
        <RestaurantCounter/>
        <Footer/>
    </>)
}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App/>)