import React, { useState } from "react";
import "./style.css";

function SearchResults(){
    const [fakeData, setFakeData] = useState([
        {
            authors: ["Suzanne Collins"],
            description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
            image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
            link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
            title: "The Hunger Games",
        },
        {
            authors: ["Suzanne Collins"],
            description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
            image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
            link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
            title: "The Hunger Games",
        }
    ])
    
    return(
        <div id="searchResults">
            <h2>Results</h2>
            {fakeData.map((data) => (
                <div className="searchedBook">
                    <div className="bookData">
                        <div className="bookInfo">
                            <h3>{data.title}</h3>
                            <a href={data.link}>Get the Book</a>
                            <p>Written by {
                                data.authors.length > 1 ? data.authors.map((author) => { return `${author},`}) : data.authors.map((author) => `${author}`)
                            }</p>
                        </div>
                        <input type="button" value="View"/>
                        <input type="button" value="Save"/>
                    </div>
                    <div className="bookDesc">
                        <img src={data.image} alt={`${data.title} cover`}/>
                        <p>{data.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SearchResults;