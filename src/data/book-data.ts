export type BookImage = {
    url: string;
    alt: string;
};

export type BookFormat = {
    format: string;
    isbn?: string;
    asin: string;
    price: string;
    priceCurrency: string;
    seller: string;
    sellerURL: string;
};

export type BookReview = {
    id: number;
    type: string;
    author: {
        type: string;
        name: string;
    };
    datePublished: string;
    reviewBody: string;
    reviewRating: {
        type: string;
        ratingValue: number;
    }
};

export interface BookData {
    title: string;
    tagLine: string;
    numberOfPages: number;
    size: string;
    abstract: string;
    author: string;
    url: string;
    copyrightYear: string;
    datePublished: string;
    genre: string;
    name: string;
    aggregateRating: {
        type: string;
        ratingValue: number;
        reviewCount: number;
        bestRating: number;
    };
    keywords: string;
    images: {
        thumbnailImg: BookImage;
        compoundImg: BookImage;
        ogImg: BookImage;
        twitterImg: BookImage;
    };
    formats: {
        paperback: BookFormat;
        ebook: BookFormat;
    };
    reviews: BookReview[];
    description: Array<{ id: number; data: string; }>
    preview: {
        heading: string;
        lines: string[];
    };
}
