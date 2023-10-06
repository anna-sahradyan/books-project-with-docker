import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import BookDetailsList from "./container/BookDetailsList";

const App = () => {
    return (
        <>
            <div className="container">
            <Routes>
                <Route path={"/"}  element={<Home/>}/>
                <Route path='/books/:id' element={<BookDetailsList/>}/>
            </Routes>
            </div>
        </>
    );
};

export default App;