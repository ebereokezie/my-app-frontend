import React from "react";
import {NavLink} from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "25px",
    margin: "0 6px 6px",
    color: "white",
  };

function NavBar(){
    return (
        <div className = "NavBar">
            <NavLink to = "/" exact style = {linkStyles}> Home </NavLink>
            <NavLink to = "/Monday" exact style = {linkStyles}> Monday </NavLink>
            <NavLink to = "/Tuesday" exact style = {linkStyles}> Tuesday </NavLink>
            <NavLink to = "/Wednesday" exact style = {linkStyles}> Wednesday </NavLink>
            <NavLink to = "/Thursday" exact style = {linkStyles}> Thursday </NavLink>
            <NavLink to = "/Friday" exact style = {linkStyles}> Friday </NavLink>
            <NavLink to = "/Saturday" exact style = {linkStyles}> Saturday </NavLink>
            <NavLink to = "/Sunday" exact style = {linkStyles}> Sunday </NavLink>


        </div>
    )
}

export default NavBar;