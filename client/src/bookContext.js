import React, { useContext, createContext, useState, useRef } from "react";

export const BookContext = React.createContext()

export function BookProvider({ children }) {
    const [searchedBooks, setSearchedBooks] = useState([])

    return(
        <BookContext.Provider value={{searchedBooks, setSearchedBooks}}>
              {children}  
        </BookContext.Provider>
    )
}