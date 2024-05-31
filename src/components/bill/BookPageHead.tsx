import {Helmet} from "react-helmet";
import {useBookData} from "../../contexts/BookContext.tsx";
import {useEbookData} from "../../hooks/useEbookData.ts";
import {usePaperbackData} from "../../hooks/usePaperbackData.ts";

export const BookPageHead = () => {
    const book = useBookData();
    const paperbackStructuredData = usePaperbackData();
    const ebookStructuredData = useEbookData();

    return (
        <>
            <Helmet>
                <title>{book.title} - A Novel by {book.author}</title>
                <meta name="description" content={book.abstract}/>
                <meta name="keywords" content={book.keywords}/>
                <meta name="author" content={book.author}/>

                {/* <!-- Facebook and Twitter integration --> */}
                <meta property="og:title" content={`${book.title} by ${book.author}`}/>
                <meta property="og:image" content={book.images.ogImg.url}/>
                <meta property="og:url" content={book.url}/>
                <meta property="og:site_name" content={`${book.author} - Author`}/>
                <meta property="og:description" content={book.tagLine}/>
                <meta name="twitter:title" content={`${book.title} by ${book.author}`}/>
                <meta name="twitter:image" content={book.images.ogImg.url}/>
                <meta name="twitter:image:alt" content={book.images.ogImg.alt}/>
                <meta name="twitter:url" content={book.url}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:description" content={book.tagLine}/>
            </Helmet>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(paperbackStructuredData),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(ebookStructuredData),
                }}
            />
        </>
    );
};
