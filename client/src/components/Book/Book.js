import React, { useContext, useState } from "react";
import "./style.css";
import axios from "axios";

function Book({ id, authors, description, image, link, title, type, innerRef, update }) {
    const [saveText, setSaveText] = useState("Save");
    let isPressed = false;

    const viewStore = () => {
        // two ways to go to store for the book just in case. 
        // window.location.href = url
        window.open(link, "_blank")
    }

    const saveBook = async (sId, sAuthors, sDescription, sImage, sLink, sTitle) => {
        const controller = new AbortController();

        try {
            await axios.post("http://localhost:3001/api/book", {
                bookId: sId,
                authors: sAuthors,
                description: sDescription,
                image: sImage,
                link: sLink,
                title: sTitle
            },
            {signal: controller.signal})
            .then(() => {
                setSaveText("Saved")
                isPressed = true;
            })
        } catch (err){
            if (err.message.includes("Cannot read properties of undefined") && err.message.includes("signal")) {
                controller.abort();
                return;
            }

            console.log("Could not add Data!", err)
        }
    }

    const deleteBook = async (dId) => {
        const controller = new AbortController();

        try{
            await axios.delete(`http://localhost:3001/api/book/${dId}`, {signal: controller.signal});
            update();
        } catch (err) {
            if (err.message.includes("Cannot read properties of undefined") && err.message.includes("signal")) {
                controller.abort();
                return;
            }

            console.log("Could not Delete data!", err)
        }
    }

    return(
        <div className="book" ref={innerRef}>
            <img className="bookImage" src={image} alt={`${title} cover`} />

            <div className="bookData">
                <h4>{title}</h4>
                {authors == null ? 
                    <p></p>
                    : 
                    <p className="bookData-author">Written by {
                        authors.length > 1 ? authors.map((author) => { return `${author},`}) : authors.map((author) => `${author}`)
                    }</p>
                }

                <div className="bookData-btn">
                    <input type="button" value="View" onClick={() => viewStore(link)}/>
                    {type === "search" ? 
                        <input type="button" value={saveText} onClick={() => saveBook(id, authors, description, image, link, title)}/> : 
                        <input type="button" value="Delete" onClick={() => deleteBook(id)}/>}
                </div>

                <div className="bookData-desc">
                    {description == null || description === "" ?
                    <p>There is not description sorry.</p>:
                    <p>{description}</p>
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