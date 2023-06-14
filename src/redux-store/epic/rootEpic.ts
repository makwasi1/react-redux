import { combineEpics } from "redux-observable";
import { allPostsRequestEpic } from "./allPostsEpic";

export const rootEpic = combineEpics(
    allPostsRequestEpic
);

