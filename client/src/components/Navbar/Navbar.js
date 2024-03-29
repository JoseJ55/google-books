import React from "react";
import "./style.css";
import { FcGoogle } from "react-icons/fc";

function Navbar({ setNav }) {
    const searchChange = () => {
        setNav("search")
    }
    const saveChange = () => {
        setNav("save")
    }
    
    return(
        <div id="navbar">
            <div id="navbar-content">
                <h2 id="navbar-icon"><FcGoogle/></h2>
                <div id="navbar-buttons">
                    <button onClick={searchChange}>Search</button>
                    <button onClick={saveChange}>Saved</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;