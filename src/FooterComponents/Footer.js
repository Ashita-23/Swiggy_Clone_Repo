import "./footer.css"

const Footer = () =>{
    return(<>
  <div className="footer-outer">
    {/* <div></div> */}
    <div className="Sociel-sicons">
        <span>Foodies</span>
        <span>© 2023 Foodies</span>
        <span className="iccone-box">
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-square-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-square-pinterest"></i>
        </span>
    </div>
  </div>
    </>)
}

export  default Footer