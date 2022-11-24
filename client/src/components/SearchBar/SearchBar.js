import React, { useState, useContext } from "react";
import axios from "axios";
import "./style.css";

import { BookContext, TextContext } from "./../../bookContext";

function SearchBar() {
    // q useState doesn't work on first render since it is empty, but works after second render.
    const {setSearchedBooks} = useContext(BookContext);
    const {searchText, setSearchText} = useContext(TextContext);
    const [q, setQ] = useState("")

    const searchBook = async () => {
        try{
            await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${q}&startIndex=0&maxResults=40&key=${process.env.REACT_APP_GOOGLE_BOOKS_KEY}`)
            .then((books) => {
                setSearchedBooks(books.data.items)
            })
        } catch (err){
            console.log(err)
        }
    }

    const search = () => {
        const newText = searchText.split(" ");
        setQ(newText.join("+"));
        searchBook();
    }

    return(
        <div id="searchBar">
            <h2>Book Search</h2>
            <input type="text" id="searchBar-text" onChange={(e) => { setSearchText(e.target.value) }}/>
            <input  onClick={search} id="searchSubmit" type="button" value="Search"/>
        </div>
    )
}

export default SearchBar;