import React from 'react';
import "./booksItems.css";
import { Link } from "react-router-dom";

const BooksList = ({ item }) => {
    const thumbnail = item && item.volumeInfo && item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : '';
    const author = item.volumeInfo.authors && item.volumeInfo.authors[0] ? item.volumeInfo.authors[0] : 'Author Not Available';
    const category = item.volumeInfo.categories ? item.volumeInfo.categories : 'Category Not Available';
    const title = item.searchInfo && item.searchInfo.textSnippet ? item.searchInfo.textSnippet : 'Title Not Available';

    return (
        <>
            <div className="books__item">
                <div className="books__item-inner">
                    <Link to={`/books/${item.id}`}><img src={thumbnail} alt={item.title} className={"books__item-img"} /></Link>
                    <p className="books__category">{category}</p>
                    <h4 className="books__item-title">{title}</h4>
                    <p className="books__author">{author}</p>
                </div>
            </div>
        </>
    );
};

export default BooksList;
