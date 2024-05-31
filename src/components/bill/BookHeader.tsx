import {useBookData} from "../../contexts/BookContext";
import Header from "../layout/header/digital-native/Header";
import HeaderSubTitle from "../layout/header/digital-native/HeaderSubTitle";
import HeaderTitle from "../layout/header/digital-native/HeaderTitle";

export const BookHeader = () => {
    const book = useBookData();

    return (
        <Header scrollLink="#book-preview">
            <HeaderTitle>{book.title}</HeaderTitle>
            <HeaderSubTitle>By {book.author}</HeaderSubTitle>
        </Header>
    );
};