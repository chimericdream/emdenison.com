import {createContext, type PropsWithChildren, useContext, useEffect, useState} from "react";
import type {BookData} from "../data/book-data.ts";

export const BookContext = createContext<null | { book: BookData; slug: string }>(null);

export const BookContextProvider = ({children, slug}: PropsWithChildren<{slug: string}>) => {
    const [book, setBook] = useState<null | BookData>(null);

    useEffect(() => {
        const getBook = async () => {
            const bookData = await import((`../data/${slug}`));
            setBook(bookData.default);
        };

        getBook();
    }, [setBook, slug]);

    if (book === null) {
        return null;
    }

    return (
        <BookContext.Provider value={{book, slug}}>
            {children}
        </BookContext.Provider>
    );
};

export const useBookData = () => {
    const ctx = useContext(BookContext);

    if (!ctx) {
        throw new Error("useBookData cannot be called outside of a BookContextProvider");
    }

    return ctx.book;
}

export const useBookSlug = () => {
    const ctx = useContext(BookContext);

    if (!ctx) {
        throw new Error("useBookSlug cannot be called outside of a BookContextProvider");
    }

    return ctx.slug;
};
