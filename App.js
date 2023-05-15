import React from "react"
import ReactDOM from "react-dom/client"
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import "./index.css"
import Navigation from "./src/NavComponent/Navigation"
import Home from "./src/HeadComponents/Home"
import RestaurantCounter from "./src/BodyComponents/CounterComponents/CardsCounter"
import Footer from "./src/FooterComponents/Footer"
import ErrorInSearch from "./src/ErrorCompos/Errors"
import MenuCounter from "./src/BodyComponents/MenuComponents/MenuCounter"

const App = ()=>{
    return(<>

        <Navigation/>
        {/* <Home/> */}
        {/* <RestaurantCounter/> */}
        {/* <MenuCounter></MenuCounter> */}
        {/* <ErrorInSearch></ErrorInSearch> */}
        <Outlet/>

        <Footer/>
    </>)
}



const AppRouting = createBrowserRouter([
    {
        path:"/" ,
        element:<App/>,
        errorElement : <ErrorInSearch/>,
        children:[
            {
                path:"/" ,
                element :  <Home/>  ,
                errorElement : <ErrorInSearch/>

            },
            {
                path:"/restaurant" ,
                element :  <RestaurantCounter/> ,
                errorElement : <ErrorInSearch/>,
            },
            {
                        path:"/restaurant/:id",
                        element:<MenuCounter/>,
                        errorElement : <ErrorInSearch/>,

          }
             

            
        ]   
    }
])




const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router = {AppRouting}/>)
// root.render(<App/>)