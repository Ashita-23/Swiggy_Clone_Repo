
import {Link} from "react-router-dom"
import "./Navigation.css"
import "./NavigationMedia.css"

import {useSelector} from "react-redux"


const Navigation = ()=>{
    const  cartIterms = useSelector((Store)=>Store.cart.iterms)
    // console.log(cartIterms,"storelog")
    return(<>
   <nav className="Nav-box">
    <div className="Logo-box"><span className="Logo-text"><Link to="/restaurant">Foodies</Link></span></div>
    <ul className="Logo-ul">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/signIn">SING IN</Link></li>
        <li><Link to="/cart">CART {cartIterms.length}</Link></li>



    </ul>
   </nav>
    </>)
}

export default Navigation