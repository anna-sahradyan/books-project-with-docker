import React, {useEffect, useState} from 'react';
import {IconButton, InputBase, Paper} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import "./searchStyle.css";
import {useDispatch} from "react-redux";
import {fetchAsyncAllBooks} from "../store/allBooksSlice";


const SearchBooks = () => {
    const [inputValue, setInputValue] = useState("react");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncAllBooks(inputValue));
    }, []);
    const searchButton = (e) => {
        e.preventDefault();
            dispatch(fetchAsyncAllBooks(inputValue))
    }
    return (

        <div className={"search_block"}>
            <Paper
                component="form"
                sx={{p: '2px 4px', display: 'flex', alignItems: 'center'}}

            >
                <InputBase
                    sx={{ml: 1, flex: 1}}
                    placeholder="Search Books"
                    inputProps={{'aria-label': 'Search Books'}}
                    onChange={(e) => setInputValue(e.target.value)}

                />
                <IconButton type="button" sx={{p: '10px'}} aria-label="search" onClick={searchButton}>
                    <SearchIcon/>
                </IconButton>

            </Paper>
        </div>
    );
};

export default SearchBooks;
