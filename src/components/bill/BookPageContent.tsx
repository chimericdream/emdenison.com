import {useBookData} from "../../contexts/BookContext";
import BodyCopy from "../BodyCopy";
import BookButton from "../book-card/BookButton";
import BookPrice from "../book-card/BookPrice";
import BookAside from "../BookAside";
import BookH2 from "../BookH2";
import Stars from "../Stars";

export const BookPageContent = () => {
    const book = useBookData();

    return (
        <div id="book-preview" className="mt-10 mx-5">
            <BookAside imgSrc={book.images.compoundImg.url} alt={book.images.compoundImg.alt}>
                <div className="grid grid-cols-2 mb-5">
                    <div className="relative">
                        <BookPrice screenReader="Amazon Price" price={book.formats.ebook.price}/>
                        <BookButton
                            className="mt-6 ml-3"
                            href={book.formats.ebook.sellerURL}
                            color="bg-black"
                            text="Buy an eBook"
                        />
                    </div>
                    <div className="relative">
                        <BookPrice screenReader="Amazon Price" price={book.formats.paperback.price}/>
                        <BookButton className="mt-6 ml-3" href={book.formats.paperback.sellerURL} color="bg-black"
                                    text="Buy a Paperback"/>
                    </div>
                </div>
                <div className="mb-3">
                    <Stars rating={book.aggregateRating.ratingValue}/><span
                    className="pl-3">{book.aggregateRating.ratingValue} stars on Amazon!</span>
                </div>
                <BodyCopy className="mb-1">ISBN-13: {book.formats.paperback.isbn}</BodyCopy>
                <BodyCopy className="mb-1">Length: {book.numberOfPages} pages</BodyCopy>
                <BodyCopy className="mb-1">Dimensions: {book.size}</BodyCopy>
            </BookAside>

            <div className="mt-10 md:mt-0">
                <BookH2>About {book.title}</BookH2>
                {book.description.map(d => (
                    <BodyCopy key={d.id} className="text-lg mb-5 lg:w-3/5">{d.data}</BodyCopy>
                ))}
            </div>
        </div>
    );
};
