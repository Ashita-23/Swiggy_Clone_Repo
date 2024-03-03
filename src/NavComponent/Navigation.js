
import {Link} from "react-router-dom"
import "./Navigation.css"
import "./NavigationMedia.css"
import UserOnlineStatus from "../helper/UserOnlineStatus"
import {useSelector} from "react-redux"
import OnOffPopUp from "../BodyComponents/OnlinePopup/Onoff"


const Navigation = ()=>{
    const  cartItems = useSelector((Store)=>Store.cart.items)
    // const  favItems = useSelector((Store)=>Store.favItem.items)
    console.log(cartItems,"Main storage ")
const IsOnline = UserOnlineStatus()
if(!IsOnline) return <OnOffPopUp></OnOffPopUp>
    return(<>
   <nav className="Nav-box">
    <div className="Logo-box"><span className="Logo-text"><Link to="/restaurant">Foodies</Link></span></div>
    <ul className="Logo-ul">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/signIn">SING IN</Link></li>
        <li><Link to="/cart"><i className="fa-solid fa-cart-shopping"></i>{cartItems=== null  ? 0 : cartItems.length}</Link></li>
        <li><Link to="/favorite"><i className="fa-solid fa-heart"></i></Link></li>
    </ul>
    <ul className="icone-ul-two">
        <li><Link to="/"><i className="fa-solid fa-house"></i></Link></li>
        <li><Link  to="/about"><i className="fa-solid fa-circle-exclamation"></i></Link></li>
        <li><Link to="/signIn"><i className="fa-solid fa-circle-user"></i></Link></li>
        <li><Link to="/cart"><i className="fa-solid fa-cart-shopping"></i>{cartItems=== null  ? 0 : cartItems.length}</Link></li>
        <li><Link to="/favorite" ><i className="fa-solid fa-heart"></i></Link></li>
    </ul>
   </nav>
    </>)
}

export default Navigation