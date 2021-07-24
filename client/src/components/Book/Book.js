import React from "react";
import "./style.css";

function Book({ id, authors, description, image, link, title, type }) {
    return(
        <div className="book">
            <div className="bookData">
                <div className="bookInfo">
                    <h3>{title}</h3>
                    <a href={link}>Get the Book</a>

                    {authors == null ? 
                    <p></p>
                    : 
                    <p>Written by {
                        authors.length > 1 ? authors.map((author) => { return `${author},`}) : authors.map((author) => `${author}`)
                    }</p>
                    }

                </div>
                <input type="button" value="View"/>
                {type === "search" ? <input type="button" value="Save"/> : <input type="button" value="Delete"/>}
                
            </div>
            <div className="bookDesc">
                <img src={image} alt={`${title} cover`}/>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Book;