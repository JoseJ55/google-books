import React from "react";
import "./style.css";

function Navbar({ setNav }) {
    const searchChange = () => {
        setNav("search")
    }
    const saveChange = () => {
        setNav("save")
    }
    
    return(
        <div id="navbar">
            <h2 id="title">Google Books</h2>
            <button onClick={searchChange}>Search</button>
            <button onClick={saveChange}>Saved</button>
        </div>
    )
}

export default Navbar;