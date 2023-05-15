
import {Link} from "react-router-dom"
import "./navigation.css"

const Navigation = ()=>{
    return(<>
   <nav className="Nav-box">
    <div className="Logo-box"><span className="Logo-text"><Link to="/restaurant">Foodies</Link></span></div>
    <ul className="Logo-ul">
        <li><Link to="/">HOME</Link></li>
        <li><Link>ABOUT</Link></li>
        <li><Link>USER</Link></li>
        <li><Link>CART</Link></li>
    </ul>
   </nav>
    </>)
}

export default Navigation