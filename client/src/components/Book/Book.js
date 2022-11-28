import React, { useContext } from "react";
import "./style.css";
import axios from "axios";

import { SavedContext } from "./../../bookContext";

function Book({ data, type, innerRef }) {
    const { savedBooks, setSavedBooks } = useContext(SavedContext)

    // const pic = new Image();
    // pic.src = image;
    // pic.onload= () => {
    //     console.log(pic.height)
    // }

    const viewStore = () => {
        // two ways to go to store for the book just in case. 
        // window.location.href = url
        window.open(data?.volumeInfo?.infoLink, "_blank")
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
        <div className="book" ref={innerRef}>
            <img className="bookImage" src={data?.volumeInfo?.imageLinks?.thumbnail} alt={`${data?.volumeInfo?.title} cover`} />

            <div className="bookData">
                <h4>{data?.volumeInfo?.title}</h4>
                {data?.volumeInfo?.authors == null ? 
                    <p></p>
                    : 
                    <p className="bookData-author">Written by {
                        data?.volumeInfo?.authors.length > 1 ? data?.volumeInfo?.authors.map((author) => { return `${author},`}) : data?.volumeInfo?.authors.map((author) => `${author}`)
                    }</p>
                }

                <div className="bookData-btn">
                    <input type="button" value="View" onClick={() => viewStore(data?.volumeInfo?.infoLink)}/>
                    {type === "search" ? 
                        <input type="button" value="Save" onClick={() => saveBook(data?.id, data?.volumeInfo?.authors, data?.volumeInfo?.description, data?.volumeInfo?.imageLinks?.thumbnail, data?.volumeInfo?.infoLink, data?.volumeInfo?.title)}/> : 
                        <input type="button" value="Delete" onClick={() => deleteBook(data?.id)}/>}
                </div>

                <div className="bookData-desc">
                    {data?.volumeInfo?.description == null || data?.volumeInfo?.description === "" ?
                    <p>There is not description sorry.</p>:
                    <p>{data?.volumeInfo?.description}</p>
                    }
                </div>
            </div>

            {/* <div className="bookData">
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
            </div> */}
        </div>
    )
}

export default Book;