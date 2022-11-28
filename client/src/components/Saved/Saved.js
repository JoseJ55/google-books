import React, { useEffect, useContext } from "react";
import "./style.css"
import axios from "axios";

import Book from "../Book/Book";
import { SavedContext } from "./../../bookContext";

function Saved() {
    const { savedBooks, setSavedBooks } = useContext(SavedContext)

    let test = [{
        kind: "books#volume",
        id:"3y50DwAAQBAJ",
        etag:"4VlrZOyNEQI",
        selfLink:"https://www.googleapis.com/books/v1/volumes/3y50DwAAQBAJ",
        volumeInfo: {
            title: "A Book That Takes Its Time","subtitle":"An Unhurried Adventure in Creative Mindfulness",
            authors:["Irene Smit","Astrid van der Hulst","Editors of Flow magazine"],
            publisher:"Workman Publishing",
            publishedDate:"2017-10-03",
            description:"Take time to breathe. Take time to create. Take time to reflect, take time to let go. A book that’s unique in the way it mixes reading and doing, A Book That Takes Its Time is like a mindfulness retreat between two covers. Created in partnership with Flow, the groundbreaking international magazine that celebrates creativity, beautiful illustration, a love of paper, and life’s little pleasures, A Book That Takes Its Time mixes articles, inspiring quotes, and what the editors call “goodies”—bound-in cards, mini-journals, stickers, posters, blank papers for collaging, and more—giving it a distinctly handcrafted, collectible feeling. Read about the benefits of not multitasking, then turn to “The Joy of One Thing at a Time Notebook” tucked into the pages. After a short piece on the power of slowing down, fill in the designed notecards for a Beautiful Moments jar. Make a personal timeline. Learn the art of hand-lettering. Dig into your Beginner’s Mind. Embrace the art of quitting. Take the writing cure. And always smile. Move slowly and with intention through A Book That Takes Its Time, and discover that sweet place where life can be both thoughtful and playful.",
            industryIdentifiers:[{type:"ISBN_13",identifier:"9780761193777"},{type:"ISBN_10",identifier:"0761193774"}],
            readingModes: {
                text:false,
                image:true
            },
            pageCount:257,
            printType:"BOOK",
            categories:["Body, Mind & Spirit"],
            averageRating:5,
            ratingsCount:1,
            maturityRating:"NOT_MATURE",
            allowAnonLogging:false,
            contentVersion:"0.1.0.0.preview.1",
            panelizationSummary:{containsEpubBubbles:false,containsImageBubbles:false},
            imageLinks:{
                smallThumbnail:"http://books.google.com/books/content?id=3y50DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                thumbnail:"http://books.google.com/books/content?id=3y50DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            language:"en",
            previewLink:"http://books.google.com/books?id=3y50DwAAQBAJ&printsec=frontcover&dq=a&hl=&cd=1&source=gbs_api",
            infoLink:"http://books.google.com/books?id=3y50DwAAQBAJ&dq=a&hl=&source=gbs_api",
            canonicalVolumeLink:"https://books.google.com/books/about/A_Book_That_Takes_Its_Time.html?hl=&id=3y50DwAAQBAJ"
        },
        saleInfo: {country:"US",saleability:"NOT_FOR_SALE",isEbook:false},
        accessInfo:{
            country:"US",
            viewability:"PARTIAL",
            embeddable:true,
            publicDomain:false,
            textToSpeechPermission:"ALLOWED",
            epub:{isAvailable:false},
            pdf:{
                isAvailable:true,
                acsTokenLink:"http://books.google.com/books/download/A_Book_That_Takes_Its_Time-sample-pdf.acsm?id=3y50DwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            webReaderLink:"http://play.google.com/books/reader?id=3y50DwAAQBAJ&hl=&source=gbs_api",
            accessViewStatus:"SAMPLE",
            quoteSharingAllowed:false
        },
        searchInfo:{textSnippet:"Embrace the art of quitting. Take the writing cure. And always smile. Move slowly and with intention through A Book That Takes Its Time, and discover that sweet place where life can be both thoughtful and playful."}
    }]

    useEffect(() => {
        axios.get("http://localhost:3001/api/book/")
        .then((response) => {
            setSavedBooks(response.data)
        })
    }, [setSavedBooks])

    return(
        <div id="saved">
            <h2>Saved Books</h2>

            <div id="saved-books">
                {/* {savedBooks.map((data) => ( */}
                {test.map((data, index) => (
                    <Book 
                        key={index}
                        id={data.bookId}
                        data={data}
                        type={"type"}
                    />
                ))}
            </div>
        </div>
    )
}

export default Saved;