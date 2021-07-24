import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import axios from "axios";

import Book from "./../Book/Book";
import { BookContext } from "./../../bookContext";

function SearchResults(){
    const {searchedBooks, setSearchedBooks} = useContext(BookContext)

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=search-terms&maxResults=10&key=${process.env.REACT_APP_GOOGLE_BOOKS_KEY}`)
        .then((books) => {
            setSearchedBooks(books.data.items)
            console.log(books.data.items)
        })
        .catch((err) => console.log(err))
    }, [])

    return(
        <div id="searchResults">
            <h2>Results</h2>
            {searchedBooks
            .map((data) => (
                <Book 
                    key={data.id}
                    id={data.id}
                    authors={data.volumeInfo.authors}
                    description={data.volumeInfo.description}
                    image={data.volumeInfo.imageLinks.thumbnail}
                    link={data.volumeInfo.infoLink}
                    title={data.volumeInfo.title}
                    type={"search"}
                />
            ))
            }
        </div>
    )
}

export default SearchResults;