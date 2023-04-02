import React, { useState, useEffect } from 'react'
import "./Sidebar.css"
// import TwitterIcon  from '@mui/icons-material/Twitter'
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from './SidebarOption';
import Tag from "@mui/icons-material/Tag"
import Settings from "@mui/icons-material/Settings"
import { Button } from '@mui/material';
import db from "./Firebase"

// import TwitterIcon from " "

function Sidebar(props) {
  const {setLog}=props;
  const [logInform, setLoginform] = useState(false);
  const [signUpForm, setSignUpForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailLog, setEmailLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");
  const [signUp, setSignUp] = useState([]); 


  const SignUp = () =>{
    let temp =!logInform
    setSignUpForm(temp);
    setLoginform(false);
  }
  const LoggedIn = () =>{
    let temp = !signUpForm
    setLoginform(temp);
    setSignUpForm(false)
  }

  const Submit = ()=>{
    setLoginform(true)
  }

  const LogInToFeed = ()=>{
    console.log("logged in");
    if(email===emailLog && password===passwordLog){
      setLog(true);
    }
    else{
      alert("wrong user id and password")
    }
  }
  return (

    <div className='sidebar'>

        <TwitterIcon className='sidebar_twitterIcon'/>
        <SidebarOption Icon = {Tag} text = "Explore"/>
        <SidebarOption Icon={Settings} text="Setting"/>
        {logInform && (<><div className='form'>
              <div className="Email">
                  <p>Phone, email, or username</p>
                  <input type="text" 
                  onChange={(e)=>(setEmailLog(e.target.value))}
                  value = {emailLog}
                  />
              </div>
              <div className="Password">
                  <p>Password</p>
                  <input type="text"
                  onChange={(e)=>(setPasswordLog(e.target.value))}
                  value = {passwordLog} />
              </div>
              <Button variant = "outlined" className='sidebar__tweet login' onClick={LogInToFeed} >Log In  </Button>
        </div></> )}
        {
          signUpForm && (<>
              <div className="Name">
                  <p>Name</p>
                  <input type="text" 
                  onChange={(e)=>(setName(e.target.value))}
                  value = {name}
                  />
              </div>
              <div className="Email">
                  <p>email</p>
                  <input type="text"
                  onChange={(e)=>(setEmail(e.target.value))}
                  value={email}
                  />
              </div>
              <div className="Password">
                  <p>Password</p>
                  <input type="text"
                  onChange={(e)=>(setPassword(e.target.value))} 
                  value = {password}
                  />
              </div>
              <Button variant = "outlined" className='sidebar__tweet login' onClick={Submit} >Submit  </Button>

          </>)
        }
        <Button variant = "outlined" className='sidebar__tweet login' onClick={LoggedIn} fullWidth>Login  </Button>
        <Button variant = "outlined" className='sidebar__tweet login' onClick={SignUp} fullWidth>Sign Up  </Button>
    </div>
  )
}

export default Sidebar;