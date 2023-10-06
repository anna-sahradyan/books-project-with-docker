import React, {useState} from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {fetchAsyncAllBooks} from "../store/allBooksSlice";
import {useDispatch} from "react-redux";

const CategoryBooks = () => {
    const [inputValue, setInputValue] = useState('all');
    const dispatch = useDispatch();
    const handleChange = (e) => {
        e.preventDefault();
        dispatch(fetchAsyncAllBooks(inputValue));

    }

    return (
        <div className={"category_block"}>
            <FormControl
                sx={{width: '100%'}}>
                <InputLabel id="demo-simple-select-label">{inputValue === 'all' ? 'All' : inputValue}</InputLabel>

                <Select

                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={inputValue}
                    label="all"
                    onChange={(e) => setInputValue(e.target.value)}
                >
                    <MenuItem value={'all'} onClick={handleChange}>all</MenuItem>
                    <MenuItem value={'art'} onClick={handleChange}>Art</MenuItem>
                    <MenuItem value={'biography'} onClick={handleChange}>Biography</MenuItem>
                    <MenuItem value={'computers'} onClick={handleChange}>Computers</MenuItem>
                    <MenuItem value={'history'} onClick={handleChange}>History</MenuItem>
                    <MenuItem value={'medical'} onClick={handleChange}>Medical</MenuItem>
                    <MenuItem value={'poetry'} onClick={handleChange}>Poetry</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default CategoryBooks;
