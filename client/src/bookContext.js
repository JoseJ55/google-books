import React, { useContext, useState } from "react";

const BookContext = React.createContext()
const BookUpdateContext = React.createContext();

export function useBooks() {
    return useContext(BookContext)
}

export function useBooksUpdate() {
    return useContext(BookUpdateContext)
}

export default function BookProvider({ children }) {
    const [searchedBooks, setSearchedBooks] = useState([])

    return(
        <BookContext.Provider value={searchedBooks}>
            <BookUpdateContext.Provider value={setSearchedBooks}>
              {children}  
            </BookUpdateContext.Provider>
        </BookContext.Provider>
    )
}