import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchAsyncAllBooksId,
    removeList,
    selectOneBook,
    selectStatus,
} from '../store/allBooksSlice';
import BookDetails from '../components/detailsBook/BookDetails';
import Loading from '../components/loading/Loader';

const BookDetailsList = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const oneBook = useSelector(selectOneBook);
    const status = useSelector(selectStatus);
    useEffect(() => {
        dispatch(fetchAsyncAllBooksId(id));
        return () => {
            dispatch(removeList());
        };
    }, [dispatch, id]);

    if (status === 'loading' || Object.keys(oneBook).length === 0) {
        return (
            <div className="loading-container">
                <Loading />
            </div>
        );
    }
    const { volumeInfo } = oneBook;
    const {
        title,
        publisher,
        authors,
        imageLinks,
        categories,
        language,
        publishedDate,
        pageCount,
        description,
    } = volumeInfo;

    return (
        <div>
            <BookDetails
                title={title}
                publisher={publisher}
                authors={authors}
                img={imageLinks?.thumbnail}
                categories={categories}
                language={language}
                publishedDate={publishedDate}
                pageCount={pageCount}
                description={description}
            />
        </div>
    );
};

export default BookDetailsList;
