import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";

function Search() {
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([]);
    const [pageNum, setPageNum] = useState(0);

    
    const getBooks = async (controller) => {
        let url;

        url = `https://www.googleapis.com/books/v1/volumes?q=${searchText.toString()}&startIndex=${pageNum.toString()}&maxResults=15&key=${process.env.REACT_APP_GOOGLE_BOOKS_KEY}`;
        
        if (searchText === "") {
            url = `https://www.googleapis.com/books/v1/volumes?q=a&startIndex=${pageNum.toString()}&maxResults=15&key=${process.env.REACT_APP_GOOGLE_BOOKS_KEY}`;
        }

        try {
            await axios.get(url, {signal: controller.signal})
            .then((books) => {
                if(pageNum === 0) {
                    setResults([...books.data.items])
                    return;
                }
                setResults(old => [...old, ...books.data.items])
                setLoading(false);
            })
        }
        catch (err) {
            if (err.message.includes("Cannot read properties of undefined") && err.message.includes("signal")) {
                setLoading(false);
                return;
            }
            
            console.log("Search Error: ", err)
            setLoading(false);
        }
    }

    useEffect(async () => {
        const controller = new AbortController();

        setLoading(true);
        await getBooks(controller);

        return () => {
            controller.abort();
            setSearchText("");
            setLoading(true);
            setResults([]);
            pageNum(0);
        }
    }, [pageNum, searchText])

    return(
        <div>
            <SearchBar searchText={searchText} setSearchText={setSearchText} getBooks={getBooks} setPageNum={setPageNum} />
            <SearchResults results={results} setPageNum={setPageNum} loading={loading} />
        </div>
    )
}

export default Search;