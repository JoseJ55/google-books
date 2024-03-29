import React, { useRef, useCallback } from "react";
import "./style.css";

import Book from "./../Book/Book";

function SearchResults({ results, setPageNum, loading }){
    const resultRef = useRef();
    const lastBook = useCallback(node => {
        if(resultRef.current) resultRef.current.disconnect();
        resultRef.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting) {
                setPageNum(prev => prev + 15);
            }
        })
        if (node) resultRef.current.observe(node);
    }, []);

    return(
        <div id="searchResults">
            <h2>Results</h2>
            <div id="searchResults-books">
                {results
                .map((data, index) => {
                    if(results.length === index +1) {
                        return <Book 
                            innerRef={lastBook}
                            key={index}
                            id={data?.id}
                            authors={data?.volumeInfo?.authors}
                            description={data?.volumeInfo.description}
                            image={data?.volumeInfo?.imageLinks?.thumbnail}
                            link={data?.volumeInfo?.infoLink}
                            title={data?.volumeInfo?.title}
                            type={"search"}
                        />
                    }

                    return <Book 
                        key={index}
                        id={data?.id}
                        authors={data?.volumeInfo?.authors}
                        description={data?.volumeInfo.description}
                        image={data?.volumeInfo?.imageLinks?.thumbnail}
                        link={data?.volumeInfo?.infoLink}
                        title={data?.volumeInfo?.title}
                        type={"search"}
                    />

                }
                )
                }
            </div>
            
            <div id="searchResults-loading">{loading && "loading..."}</div>
        </div>
    )
}

export default SearchResults;