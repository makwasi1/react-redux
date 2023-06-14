import allPostSlice from "./allPostSlice";

const rootReducer = () => {
    return {
        allPosts: allPostSlice,
    }
}

export default rootReducer;