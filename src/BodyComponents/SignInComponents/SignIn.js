    import { useState } from "react"
import "./SignIn.css"
    import "./SignInMedia.css"
    import UserPofile from "./UserProfile"

const SignIn = ()=>{
  const initialvalue = {userName:" " , userEmail: ""}
    const [form , setForm] = useState(initialvalue)
    const [formError , setFormError ] = useState({})
    // const [IsSubmit , setIsSumit] = useState(false)
    console.log(form,"V")
    console.log(formError , "FE")

    const OnChangeHandler = (e)=>{
        const {name,value}   = e.target ;
        // console.log(name,"n" , value ,"v")  
        setForm({...form,[name]:value})
    }
const SubmitHandler = (e)=>{
e.preventDefault()
setFormError(formValidation(form))

// setIsSumit(true)
}

const formValidation = (value) =>{
   const  errors = {} ;
   const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
   if(value.userName === " "){
    errors.userName = "Name is required !"};

   if(value.userEmail === " "){
    errors.userEmail = "Email is required !"
   }else if(!regex.test(value.userEmail)) {
    errors.userEmail = "Please enter valid Email !"
   }
   console.log("FV",value)
   return errors
}

    return(<div className="singin-outer">
              <div className="singin-inner">
              <h2 className="form-heading">Sign In :</h2>
                <form action="" onSubmit={SubmitHandler}>
                <div className="form-boxs">
                    <label>Name</label>
                    <input type="text" placeholder="Enter Your Name " name="userName" value={form.userName} onChange={(e)=>OnChangeHandler(e)}/>
                    </div>
                    <p>{formError.userName}</p>
                <div className="form-boxs">
                    <label>Email </label>
                    <input type="text"   placeholder="Enter Your Email " name="userEmail" value={form.userEmail} onChange={(e)=>OnChangeHandler(e)}/>
                    </div>
                    <p>{formError.userEmail}</p>
                    <div className="form-boxs">
                  <button type="submit" className="submit-btn">Submit</button> 
                    </div>
                </form>
              </div>
              {/* <UserPofile></UserPofile> */}
           
    </div>)
}

export default SignIn