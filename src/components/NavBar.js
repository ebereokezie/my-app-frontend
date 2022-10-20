import React from "react";
import { NavLink } from "react-router-dom";

 const linkStyles = {
    display: "inline",
    width: "90px",
    padding: "120px",
    margin: "0 60px 60px",
    color: "black",
    
   };

function NavBar(){
    return(
        <div className = "Navbar">
            <NavLink to = "/" exact style = {linkStyles}>Home</NavLink>
            <NavLink to = "/library" exact style = {linkStyles}>Game Library</NavLink>
            <NavLink to = "/addGame" exact style = {linkStyles}>Add a Game</NavLink>
        </div>
    )
}

export default NavBar;