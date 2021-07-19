import React from "react";
import "./style.css";

function SearchBar() {
    return(
        <div id="searchBar">
            <h2>Book Search</h2>
            <p>Book</p>
            <input type="text" />
            <input id="searchSubmit" type="button" value="Search"/>
        </div>
    )
}

export default SearchBar;