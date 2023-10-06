import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios';
import {API_KEY} from "../api";


export const fetchAsyncAllBooks = createAsyncThunk(
    'allBooks/fetchAsyncAllBooks',
    async function (inputValue, {rejectWithValue}) {
        try {
            const response = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${inputValue}&key=${API_KEY}&maxResults=40`
            );
            return response.data.items; // Return the data from the response

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export const fetchAsyncAllBooksId = createAsyncThunk(
    "allBooks/fetchAsyncAllBooksId",
    async function (id, {rejectWithValue}) {
        try {
            const response = await axios.get(
                `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`
            );
            const data = response.data;

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


const allBooksSlice = createSlice({
    name: "allBooks",
    initialState: {
        allBooks: [],
        oneBook: {},
        status: null,
        error: null,
    },
    reducers: {
        removeList: (state) => {
            state.oneBook = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncAllBooks.pending, (state) => {
            state.status = "loading";
        })
        builder.addCase(fetchAsyncAllBooks.fulfilled, (state, action) => {
            state.status = "resolved";
            state.allBooks = action.payload;
        })
        builder.addCase(fetchAsyncAllBooks.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        });
        builder.addCase(fetchAsyncAllBooksId.pending, (state) => {
            state.status = "loading";
        })
        builder.addCase(fetchAsyncAllBooksId.fulfilled, (state, action) => {
            state.status = "resolved";
            state.oneBook = action.payload;
        })


        builder.addCase(fetchAsyncAllBooksId.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        });

    },
});

export const {removeList} = allBooksSlice.actions;
export const selectAllBooks = (state) => state.allBooks.allBooks;
export const selectOneBook = (state) => state.allBooks.oneBook;
export const selectStatus = (state) => state.allBooks.status;
export default allBooksSlice.reducer;
