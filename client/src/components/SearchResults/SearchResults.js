import React, { useEffect, useContext, useRef } from "react";
import "./style.css";
import axios from "axios";

import Book from "./../Book/Book";
import { BookContext } from "./../../bookContext";

function SearchResults(){
    const {searchedBooks, setSearchedBooks} = useContext(BookContext)

    const resultRef = useRef();

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=search-terms&maxResults=20&key=${process.env.REACT_APP_GOOGLE_BOOKS_KEY}`)
        .then((books) => {
            setSearchedBooks(books.data.items)
        })
        .catch((err) => console.log(err))
    }, [])

    const handelScroll = (event) => {
        if (resultRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = resultRef.current;

            if(scrollTop + clientHeight === scrollHeight) {
                alert("reach the bottom")
            }
        }

    }

    return(
        <div id="searchResults" onScroll={handelScroll} ref={resultRef}>
            <h2>Results</h2>
            <div id="searchResults-books">
                {searchedBooks
                .map((data) => (
                    <Book 
                        key={data?.id}
                        id={data?.id}
                        authors={data?.volumeInfo?.authors}
                        description={data?.volumeInfo?.description}
                        image={data?.volumeInfo?.imageLinks?.thumbnail}
                        link={data?.volumeInfo?.infoLink}
                        title={data?.volumeInfo?.title}
                        type={"search"}
                    />
                ))
                }
            </div>
        </div>
    )
}

export default SearchResults;