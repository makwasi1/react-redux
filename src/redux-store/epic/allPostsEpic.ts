import { catchError, from, map, mergeMap, of } from "rxjs";
import { ofType } from "redux-observable";
import { FakeBackendService } from "../../service/FakeBackendService";
import { getAllPosts, getAllPostsFailureAction, getAllPostsSuccessAction  } from "../reducer/allPostSlice";

export const allPostsRequestEpic = (action$: any) => {
    return action$.pipe(
        ofType(getAllPosts),
        mergeMap((action: any) => 
            from(FakeBackendService.getPosts()).pipe(
                map((response:any) => {
                    if (response.data) {
                        console.log(response.data);
                        return getAllPostsSuccessAction(response.data);
                    } else {
                        throw new Error("Something went wrong");
                    }
                }),
                catchError((error) => {
                    return of(getAllPostsFailureAction(error.message));
                })
            ))
    )
}