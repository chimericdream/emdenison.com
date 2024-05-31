import {Link} from "react-router-dom";
import {useBookData} from "../../contexts/BookContext";
import BodyCopy from "../BodyCopy";

export const BookCta = () => {
    const book = useBookData();

    return (
        <BodyCopy className="pb-3 italic">You may continue reading by <Link className="underline" to={book.formats.ebook.sellerURL}>downloading the ebook</Link> or <Link className="underline" to={book.formats.paperback.sellerURL}>buying a paperback</Link> from amazon.</BodyCopy>
    );
};