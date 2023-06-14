import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { PostInterface } from "../../interface/PostInterface";


export interface AllPostsInterface {
    allPosts: Array<PostInterface>
    loading: boolean
    error: {}
}

const initialState: AllPostsInterface = {
    allPosts: [],
    loading: false,
    error: {},
};


export const allPostsSlice = createSlice({
    name: "allPosts",
    initialState,
    reducers: {
        getAllPosts: (state: any) => {
            state.loading = true;
        },
        getAllPostsSuccessAction: (state: any, action: PayloadAction<any>) => {
            state.loading = false;
            state.allPosts = action.payload;
        },
        getAllPostsFailureAction: (state: any, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        }
    },
})

export const {
    getAllPosts,
    getAllPostsSuccessAction,
    getAllPostsFailureAction
} = allPostsSlice.actions;

export default allPostsSlice.reducer;