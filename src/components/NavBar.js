import React from "react";
import { Link } from "react-router-dom";

function NavBar () {
 return <div> 
     <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/shop"}>shop</Link></li>
     </ul>
 </div>
}
export default NavBar;