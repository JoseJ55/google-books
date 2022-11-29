import React, { useEffect, useContext, useState } from "react";
import "./style.css"
import axios from "axios";

import Book from "../Book/Book";

function Saved(controller) {
    const [booksSaved, setBooksSaved] = useState([]);

    const update = () => {
        try {
            axios.get("http://localhost:3001/api/book/", {signal: controller.signal})
            .then((response) => {
                if (response?.data.length == 0) {
                    setBooksSaved([]);
                    return;
                }

                setBooksSaved([...response?.data])
            })
        } catch (err) {
            if (err.message.includes("Cannot read properties of undefined") && err.message.includes("signal")) {
                return;
            }

            console.log("Get Saved Books Error: ", err)
        }
    }

    useEffect(() => {
        const controller = new AbortController();

        update(controller);
        
        return () => {
            controller.abort();
        }
    }, [setBooksSaved])

    return(
        <div id="saved">
            <h2>Saved Books</h2>

            <div id="saved-books">
                {booksSaved.map((data, index) => (
                    <Book 
                        key={index}
                        id={data?.bookId}
                        authors={data?.authors}
                        description={data?.description}
                        image={data?.image}
                        link={data?.link}
                        title={data?.title}
                        setBooksSaved={setBooksSaved}
                        update={update}
                        type={"type"}
                    />
                ))}
            </div>
        </div>
    )
}

export default Saved;