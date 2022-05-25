import React from "react";
import { Link } from "react-router-dom";
import "../css-component-files/NavBar.css"
function NavBar () {
 return <div className="NavBar-Container"> 
     <ul className="NavBar-Ul">
        <li className="NavBar-Link"><Link to={"/"}>Home</Link></li>
        <li className="NavBar-Link"><Link to={"/shop"}>shop</Link></li>
     </ul>
 </div>
}
export default NavBar;