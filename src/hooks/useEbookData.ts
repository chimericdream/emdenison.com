import {useBookData} from "../contexts/BookContext.tsx";
import Author from "../data/author";

export const useEbookData = () => {
    const book = useBookData();

    return {
        "@context": "https://schema.org",
        "@type": "Book",
        "additionalType": "Product",
        "numberOfPages": book.numberOfPages,
        "size": book.size,
        "bookFormat": book.formats.ebook.format,
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
            "asin": book.formats.ebook.asin,
            "availability": "https://schema.org/InStock",
            "price": book.formats.ebook.price,
            "priceCurrency": book.formats.ebook.priceCurrency,
            "seller": book.formats.ebook.seller,
            "hasGS1DigitalLink": book.formats.ebook.sellerURL,
        },
        "review": [
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": book.reviews[0].author
                },
                "datePublished": book.reviews[0].datePublished,
                "reviewBody": book.reviews[0].reviewBody,
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": book.reviews[0].reviewRating.ratingValue
                }
            },
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": book.reviews[1].author
                },
                "datePublished": book.reviews[1].datePublished,
                "reviewBody": book.reviews[1].reviewBody,
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": book.reviews[1].reviewRating.ratingValue
                }
            },
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": book.reviews[2].author
                },
                "datePublished": book.reviews[2].datePublished,
                "reviewBody": book.reviews[2].reviewBody,
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": book.reviews[2].reviewRating.ratingValue
                }
            },
        ],
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": book.url
        }
    };
};