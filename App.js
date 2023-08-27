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
import About from "./src/BodyComponents/AboutComponents/About"
import Carts from "./src/BodyComponents/CartComponents/Cart"
import FavoriteCart from "./src/BodyComponents/SignInComponents/FavoriteCart"
import  SignIn  from "./src/BodyComponents/SignInComponents/SignIn"
import { Provider } from "react-redux"
import FoodStore from "./src/Util/FoodStore"

const App = ()=>{
    // console.log(FoodStore,"FS")
    return(<> <Provider store={FoodStore}> 
        <Navigation/>
        {/* <Home/> */}
        {/* <RestaurantCounter/> */}
        {/* <MenuCounter></MenuCounter> */}
        {/* <ErrorInSearch></ErrorInSearch> */}
        <Outlet/>

        <Footer/>
        </Provider> 
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
                path:"/about" ,
                element :  <About/>  ,
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

          },
             
            {
                        path:"/cart",
                        element:<Carts/>,
                        errorElement : <ErrorInSearch/>,

          },
            {
                        path:"/signIn",
                        element:<SignIn/>,
                        errorElement : <ErrorInSearch/>,

          },
            {
                        path:"/favorite",
                        element:<FavoriteCart/>,
                        errorElement : <ErrorInSearch/>,

          },


             

            
        ]   
    }
])




const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router = {AppRouting}/>)
// root.render(<App/>)