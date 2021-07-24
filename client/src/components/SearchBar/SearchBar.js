import React, { useState } from "react";
import axios from "axios";
import "./style.css";

import { useBooksUpdate } from "./../../bookContext";

function SearchBar() {
    const [searchedText, setSearchedText] = useState("");

    const searchBook = () => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyCUpfSl9jdl8vMdGsC_w-fRplSJIXRezV4')
        .then((books) => console.log(books.data))
        .catch((err) => console.log(err))
    }

    return(
        <div id="searchBar">
            <h2>Book Search</h2>
            <p>Book</p>
            <input type="text" onChange={(e) => { setSearchedText(e.target.value) }}/>
            <input  onClick={searchBook} id="searchSubmit" type="button" value="Search"/>
        </div>
    )
}

export default SearchBar;