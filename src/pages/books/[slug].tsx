import {BookCta} from "../../components/bill/BookCta.tsx";
import {BookHeader} from "../../components/bill/BookHeader";
import {BookPageHead} from "../../components/bill/BookPageHead";
import {BookPageContent} from "../../components/bill/BookPageContent";
import {BookPreview} from "../../components/bill/BookPreview.tsx";
import {BookReviews} from "../../components/bill/BookReviews";

import {useParams} from "react-router-dom";
import Footer from "../../components/layout/footer";
import {BookContextProvider} from "../../contexts/BookContext";

function BookPage() {
    const { slug } = useParams();

    return (
        <BookContextProvider slug={slug!}>
            <BookPageHead />
            <BookHeader />
            <BookPageContent />
            <BookReviews />
            <BookPreview />
            <hr className="pb-3 border-black" />
            <BookCta />
            <Footer />
        </BookContextProvider>)
}

export default BookPage;
