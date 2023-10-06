import React, {useState} from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useDispatch} from "react-redux";
import {fetchAsyncAllBooks} from "../store/allBooksSlice";

const SortBooks = () => {
    const [inputValue, setInputValue] = useState("relevance");
    const dispatch = useDispatch();
    const handelClick = (e) => {
        e.preventDefault();
        dispatch(fetchAsyncAllBooks(inputValue));

    }
    return (
        <div className={"sort_block"}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{inputValue === 'relevance' ? 'Relevance' : 'Newest'}</InputLabel>
                <Select

                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    autoFocus
                    value={inputValue}
                    label="relevance"
                    onChange={(e) => setInputValue(e.target.value)}
                >
                    <MenuItem value={'relevance'} onClick={handelClick}>relevance</MenuItem>
                    <MenuItem value={'newest'} onClick={handelClick}>newest</MenuItem>

                </Select>

            </FormControl>
        </div>
    );
};

export default SortBooks;


