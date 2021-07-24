import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import "./style.css";

import { BookContext } from "./../../bookContext";

function SearchBar() {
    // q useState doesn't work on first render since it is empty, but works after second render.
    const {searchedBooks, setSearchedBooks} = useContext(BookContext)
    const [searchedText, setSearchedText] = useState("");
    const [q, setQ] = useState("")

    const searchBook = () => {
        // 'https://www.googleapis.com/books/v1/volumes?q=search-terms&key='
        try{
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${q}&key=${process.env.REACT_APP_GOOGLE_BOOKS_KEY}`)
            .then((books) => {
                // console.log(books.data.items)
                // console.log(q)
                setSearchedBooks(books.data.items)
            })
        } catch (err){
            console.log(err)
        }
    }

    const search = () => {
        const newText = searchedText.split(" ");
        setQ(newText.join("+"));
        searchBook();
    }

    return(
        <div id="searchBar">
            <h2>Book Search</h2>
            <p>Book</p>
            <input type="text" onChange={(e) => { setSearchedText(e.target.value) }}/>
            <input  onClick={search} id="searchSubmit" type="button" value="Search"/>
        </div>
    )
}

export default SearchBar;