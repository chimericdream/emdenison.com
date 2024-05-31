import type {ReactNode} from "react";
import {useBookData, useBookSlug} from "../../contexts/BookContext";
import BookButton from "../book-card/BookButton";
import BookPrice from "../book-card/BookPrice";
import BookAside from "../BookAside";
import BookH2 from "../BookH2";
import {DigitalNativePreview} from "./books/DigitalNativePreview";

const bookPreviews: {[key: string]: ReactNode} = {
    'digital-native': <DigitalNativePreview />,
};

export const BookPreview = () => {
    const book = useBookData();
    const slug = useBookSlug();

    return (
        <div className="mt-20 mx-5 max-w-screen-lg lg:mx-auto">
            <BookH2>{book.preview.heading}</BookH2>
            <BookAside imgSrc={book.images.thumbnailImg.url} alt={book.images.thumbnailImg.alt}>
                <div className="grid grid-cols-2 mt-5">
                    <div className="relative">
                        <BookPrice screenReader="Amazon Price" price={book.formats.ebook.price}/>
                        <BookButton className="mt-6 ml-3" href={book.formats.ebook.sellerURL} color="bg-black"
                                    text="Buy an eBook"/>
                    </div>
                    <div className="relative">
                        <BookPrice screenReader="Amazon Price" price={book.formats.paperback.price}/>
                        <BookButton className="mt-6 ml-3" href={book.formats.paperback.sellerURL} color="bg-black"
                                    text="Buy a Paperback"/>
                    </div>
                </div>
            </BookAside>
            {bookPreviews[slug]}
        </div>
    );
};
