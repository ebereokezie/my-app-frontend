import React from "react";
import {NavLink} from "react-router-dom";

function NavBar(){
    return (
        <div className = "NavBar">
            <NavLink to = "/"> Home </NavLink>
            <NavLink to = "/"> Monday </NavLink>
            <NavLink to = "/"> Tuesday </NavLink>
            <NavLink to = "/"> Wednesday </NavLink>
            <NavLink to = "/"> Thursday </NavLink>
            <NavLink to = "/"> Friday </NavLink>
            <NavLink to = "/"> Saturday </NavLink>

        </div>
    )
}

export default NavBar;