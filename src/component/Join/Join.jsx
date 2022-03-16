import React, { useState } from 'react'
import "./Join.css";
import logo from "../../images/logo.png";
//import { Link } from "react-router-dom";
import {Link } from "react-router-dom";
let user;





 export const Join = () => {

    let [name, setName] = useState("");
   
    const sendUser = (e) => {
        //  user = document.getElementById('joinInput').value;
        //  document.getElementById('joinInput').value = "";
         user=name;
        // name="";
    }
    return (
        <div className="JoinPage">
            <div className="JoinContainer">
                <img src={logo} alt="logo" />
                <h1>C CHAT</h1>
                <input onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" type="text" id="joinInput" />
             <Link onClick={(e)=>!name===""?e.preventDefault():null}  to="/chat">  <button onClick={sendUser} className="joinbtn">Login In</button></Link>
            </div>
        </div>
    )
}

//  export default Join
export { user }
