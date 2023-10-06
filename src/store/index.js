import {configureStore} from "@reduxjs/toolkit";
import allBooksSlice from "./allBooksSlice";



const store= configureStore({
    reducer: {
        allBooks:allBooksSlice,

    }
})
export  default store;