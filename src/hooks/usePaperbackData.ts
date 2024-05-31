import {useBookData} from "../contexts/BookContext";
import Author from "../data/author";

export const usePaperbackData = () => {
    const book = useBookData();

    return {
        "@context": "https://schema.org",
        "@type": "Book",
        "additionalType": "Product",
        "isbn": book.formats.paperback.isbn,
        "numberOfPages": book.numberOfPages,
        "size": book.size,
        "bookFormat": book.formats.paperback.format,
        "abstract": book.abstract,
        "author": {
            "@type": "Person",
            "name": Author.name,
            "jobTitle": Author.jobTitle,
            "url": Author.url
        },
        "copyrightYear": book.copyrightYear,
        "datePublished": book.datePublished,
        "genre": book.genre,
        "name": book.title,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": book.aggregateRating.ratingValue,
            "reviewCount": book.aggregateRating.reviewCount,
            "bestRating": book.aggregateRating.bestRating,
        },
        "keywords": book.keywords,
        "thumbnailUrl": book.images.thumbnailImg.url,
        "offers": {
            "@type": "Offer",
            "asin": book.formats.paperback.asin,
            "availability": "https://schema.org/InStock",
            "price": book.formats.paperback.price,
            "priceCurrency": book.formats.paperback.priceCurrency,
            "seller": book.formats.paperback.seller,
            "hasGS1DigitalLink": book.formats.paperback.sellerURL,
        },
        "review": book.reviews.map((review) => ({
            "@type": review.type,
            "author": {
                "@type": review.author.type,
                "name": review.author.name
            },
            "datePublished": review.datePublished,
            "reviewBody": review.reviewBody,
            "reviewRating": {
                "@type": review.reviewRating.type,
                "ratingValue": review.reviewRating.ratingValue
            }
        })),
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": book.url
        }
    };
};
