
import {Link} from "react-router-dom"
import "./Navigation.css"
import "./NavigationMedia.css"
import UserOnlineStatus from "../helper/UserOnlineStatus"
import {useSelector} from "react-redux"


const Navigation = ()=>{
    const  cartIterms = useSelector((Store)=>Store.cart.iterms)
    // console.log(cartIterms,"storelog")
const IsOnline = UserOnlineStatus()
if(!IsOnline) return alert("your internet conection is gone!")
    return(<>
   <nav className="Nav-box">
    <div className="Logo-box"><span className="Logo-text"><Link to="/restaurant">Foodies</Link></span></div>
    <ul className="Logo-ul">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/signIn">SING IN</Link></li>
        <li><Link to="/cart">CART {cartIterms.length}</Link></li>
    </ul>
    <ul className="icone-ul-two">
        <li><Link to="/"><i class="fa-solid fa-house"></i></Link></li>
        <li><Link  to="/about"><i class="fa-solid fa-circle-exclamation"></i></Link></li>
        <li><Link to="/signIn"><i class="fa-solid fa-circle-user"></i></Link></li>
        <li><Link to="/cart"><i class="fa-solid fa-cart-shopping"></i></Link></li>
    </ul>
   </nav>
    </>)
}

export default Navigation