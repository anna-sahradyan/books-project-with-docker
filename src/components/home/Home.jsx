import React, {useState} from 'react';
import "./home.css";
import SearchBooks from "../../container/SearchBooks";
import SortBooks from "../../container/SortBooks";
import CategoryBooks from "../../container/CategoryBooks";
import "./home.css";
import BooksList from "../booksBox/BooksList";
import {useSelector} from "react-redux";
import {selectAllBooks, selectStatus} from "../../store/allBooksSlice";
import Loading from "../loading/Loader";
import {Button, Stack} from "@mui/material";

const Home = () => {
    let allBooks = useSelector(selectAllBooks);
    const status = useSelector(selectStatus);
    const [visible, setVisible] = useState(30);
    const currentVisibleBooks = allBooks ? Math.min(visible, allBooks.length) : 0;

    const showMoreItem = () => {
        setVisible((prevState) => prevState + 30);
    };
    return (
        <>
            <div className="container">
                <header className="header">
                    <div className="header__section-inner">
                        <h1 className={"header__title title"}>Search For Books</h1>
                        <h2 className={"sub_title"}>books:{currentVisibleBooks}</h2>
                        <div className="header_inner_item">
                            <SearchBooks/>
                            <span>Sorting By</span> <SortBooks/>
                            <span> Categories </span><CategoryBooks/>
                        </div>
                    </div>
                </header>
                <section className="books__list">
                    <div className="books__list-inner">
                        <div className="books__items">
                            {status === 'loading' ? (
                                <div className="loading-container">
                                <Loading/>
                                </div>
                            ) : (
                                allBooks?.slice(0, visible).map((item) => (
                                    <BooksList key={item.id} item={item}/>
                                ))
                            )}

                        </div>
                    </div>
                </section>
                <div className=" pagination__block">
                    <section className=" section__btn">
                        <Stack direction="row" className={"pagination_btn"} onClick={showMoreItem}>
                            <Button variant="outlined">
                                Load More
                            </Button>
                        </Stack>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Home;