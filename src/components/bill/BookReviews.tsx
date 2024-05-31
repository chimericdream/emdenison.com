import {useBookData} from "../../contexts/BookContext";
import BookH2 from "../BookH2";
import Review from "../Review";

export const BookReviews = () => {
    const book = useBookData();

    return (
        <div className="md:grid md:grid-cols-3 md:gap-x-10 mt-20 mx-5">
            <BookH2>Reviews for {book.title}</BookH2>
            {book.reviews.map(d => (
                <Review
                    key={d.id}
                    className="mb-6"
                    stars={d.reviewRating.ratingValue}
                    cite={d.author.name}
                >
                    {d.reviewBody}
                </Review>
            ))}
        </div>
    );
};
