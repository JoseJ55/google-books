import React, { createContext, useState } from "react";

export const BookContext = createContext();
export const SavedContext = createContext();
export const TextContext = createContext();

export function BookProvider({ children }) {
    const [searchText, setSearchText] = useState("")
    const [searchedBooks, setSearchedBooks] = useState([])
    const [savedBooks, setSavedBooks] = useState([])

    return(
        <TextContext.Provider value={{searchText, setSearchText}}>
            <BookContext.Provider value={{searchedBooks, setSearchedBooks}}>
                <SavedContext.Provider value={{savedBooks, setSavedBooks}}>
                    {children}   
                </SavedContext.Provider>
            </BookContext.Provider>
        </TextContext.Provider>
    )
}