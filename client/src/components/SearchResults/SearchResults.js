import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";

import Book from "../Book/Book";

function SearchResults(){
    const [fakeData, setFakeData] = useState([
        // {
        //     authors: ["Suzanne Collins"],
        //     description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
        //     image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        //     link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
        //     title: "The Hunger Games",
        // },
        // {
        //     authors: ["Suzanne Collins"],
        //     description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
        //     image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        //     link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
        //     title: "The Hunger Games",
        // }
    ])

    useEffect(() => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=search-terms&maxResults=10&key=AIzaSyCUpfSl9jdl8vMdGsC_w-fRplSJIXRezV4')
        .then((books) => {
            setFakeData(books.data.items)
            console.log(books.data.items)
        })
        .catch((err) => console.log(err))
    }, [])

    return(
        <div id="searchResults">
            <h2>Results</h2>
            {fakeData.map((data) => (
                // console.log(fakeData)
                <Book 
                // console.log(`
                    id={data.id}
                    authors={data.volumeInfo.authors}
                    description={data.volumeInfo.description}
                    image={data.volumeInfo.imageLinks.thumbnail}
                    link={data.volumeInfo.infoLink}
                    title={data.volumeInfo.title}
                    type={"search"}
                // `)
                />
            ))}
        </div>
    )
}

export default SearchResults;