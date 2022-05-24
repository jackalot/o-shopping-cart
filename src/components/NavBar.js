import React from "react";
import { Link } from "react-router-dom";
import "../css-component-files/NavBar"
function NavBar () {
 return <div className="NavBar-Container"> 
     <ul className="NavBar-Ul">
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/shop"}>shop</Link></li>
     </ul>
 </div>
}
export default NavBar;