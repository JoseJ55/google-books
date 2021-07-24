import React, { useEffect, useContext } from "react";
import "./style.css"
import axios from "axios";

import Book from "../Book/Book";
import { SavedContext } from "./../../bookContext";

function Saved() {
    const { savedBooks, setSavedBooks } = useContext(SavedContext)

    useEffect(() => {
        axios.get("http://localhost:3001/api/book/")
        .then((response) => {
            setSavedBooks(response.data)
        })
    }, [])

    return(
        <div id="saved">
            <h2>Saved Books</h2>

            {savedBooks.map((data) => (
                <Book 
                    key={data.bookId}
                    id={data.bookId}
                    authors={data.authors}
                    description={data.description}
                    image={data.image}
                    link={data.link}
                    title={data.title}
                    type={"type"}
                />
            ))}
        </div>
    )
}

export default Saved;