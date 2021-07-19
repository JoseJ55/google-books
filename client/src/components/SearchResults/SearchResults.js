import React, { useState } from "react";
import "./style.css";

import Book from "../Book/Book";

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
                <Book 
                    authors={data.authors}
                    description={data.description}
                    image={data.image}
                    link={data.link}
                    title={data.title}
                    type={"search"}
                />
            ))}
        </div>
    )
}

export default SearchResults;