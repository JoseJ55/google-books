import React, { useContext } from "react";
import "./style.css";
import axios from "axios";

import { SavedContext } from "./../../bookContext";

function Book({ id, authors, description, image, link, title, type }) {
    const { savedBooks, setSavedBooks } = useContext(SavedContext)

    const viewStore = () => {
        // two ways to go to store for the book just in case. 
        // window.location.href = url
        window.open(link, "_blank")
    }

    const saveBook = async (sId, sAuthors, sDescription, sImage, sLink, sTitle) => {
        try {
            await axios.post("http://localhost:3001/api/book", {
                bookId: sId,
                authors: sAuthors,
                description: sDescription,
                image: sImage,
                link: sLink,
                title: sTitle
            })
        } catch (err){
            console.log("Could not add Data!", err)
        }
    }

    const updateBooks = () => {
        axios.get("http://localhost:3001/api/book/")
        .then((response) => {
            setSavedBooks(response.data)
        })
    }

    const deleteBook = async (dId) => {
        try{
            await axios.delete(`http://localhost:3001/api/book/${dId}`);
            updateBooks();
        } catch (err) {
            console.log("Could not Delete data!", err)
        }
    }

    return(
        <div className="book">
            <div className="bookData">
                <div className="bookInfo">
                    <h3>{title}</h3>

                    {authors == null ? 
                    <p></p>
                    : 
                    <p>Written by {
                        authors.length > 1 ? authors.map((author) => { return `${author},`}) : authors.map((author) => `${author}`)
                    }</p>
                    }

                </div>
                <input type="button" value="View" onClick={() => viewStore(link)}/>
                {type === "search" ? 
                    <input type="button" value="Save" onClick={() => saveBook(id, authors, description, image, link, title)}/> : 
                    <input type="button" value="Delete" onClick={() => deleteBook(id)}/>}
                
            </div>
            <div className="bookDesc">
                <img src={image} alt={`${title} cover`}/>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Book;