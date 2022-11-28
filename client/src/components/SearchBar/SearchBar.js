import React from "react";
import "./style.css";

function SearchBar({ searchText, setSearchText, getBooks, setPageNum }) {
    const handleChange = (e) => {
        setSearchText(e.target.value);
        setPageNum(0);
    }

    return(
        <div id="searchBar">
            <h2>Book Search</h2>
            <input type="text" id="searchBar-text" onChange={(e) => handleChange(e)} value={searchText} />
            {/* <input  onClick={() => getBooks()} id="searchSubmit" type="button" value="Search"/> */}
        </div>
    )
}

export default SearchBar;