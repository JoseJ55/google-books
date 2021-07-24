import React from "react";
import "./style.css";
import axios from "axios";

function Book({ id, authors, description, image, link, title, type }) {
    const viewStore = (url) => {
        // two ways to go to store for the book just in case. 
        // window.location.href = url
        window.open(link, "_blank")
    }

    const saveBook = async (sId, sAuthors, sDescription, sImage, sLink, sTitle) => {
        // console.log(sId)
        // console.log(sAuthors)
        // console.log(sDescription)
        // console.log(sImage)
        // console.log(sLink)
        // console.log(sTitle)
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

    return(
        <div className="book">
            <div className="bookData">
                <div className="bookInfo">
                    <h3>{title}</h3>
                    {/* <a href={link}>Get the Book</a> */}

                    {authors == null ? 
                    <p></p>
                    : 
                    <p>Written by {
                        authors.length > 1 ? authors.map((author) => { return `${author},`}) : authors.map((author) => `${author}`)
                    }</p>
                    }

                </div>
                {/* <Link to={link}> */}
                <input type="button" value="View" onClick={() => viewStore(link)}/>
                {/* </Link> */}
                {type === "search" ? 
                    <input type="button" value="Save" onClick={() => saveBook(id, authors, description, image, link, title)}/> : 
                    <input type="button" value="Delete"/>}
                
            </div>
            <div className="bookDesc">
                <img src={image} alt={`${title} cover`}/>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Book;