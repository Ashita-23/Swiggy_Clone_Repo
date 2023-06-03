    import "./SignIn.css"
    import "./SignInMedia.css"

const SignIn = ()=>{
    return(<div className="singin-outer">
              <div className="singin-inner">
              <h2 className="form-heading">Sign Up :</h2>
                <form action="">
                <div className="form-boxs">
                    <label>Name</label>
                    <input type="text" placeholder="Enter Your Name "/>
                    </div>
                <div className="form-boxs">
                    <label>Email Id</label>
                    <input type="text"   placeholder="Enter Your Email "/>
                    </div>
                    <div className="form-boxs">
                        <button type="submit" className="submit-btn">Submit</button>
                    </div>
                </form>
              </div>
    </div>)
}

export default SignIn