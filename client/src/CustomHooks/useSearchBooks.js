import { useEffect, useState } from "react";
import axios from "axios";

export default function useSearchBooks(query, pageNum) {
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        let cancel;

        axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${pageNum}&maxResults=20&key=${process.env.REACT_APP_GOOGLE_BOOKS_KEY}`,
            {
                cancelToken: new axios.CancelToken(c => cancel = c)
            })
        .then((books) => {
            setBooks(oldBooks => {
                return [...new Set([...oldBooks, ...books.data.items])]
            })
        })
        .catch((err) => {
            if(axios.isCancel(err)) return;
            console.log(err)
        })

        return () => cancel();
    }, [query, pageNum])

    return { books }
}