import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPosts } from "../../redux-store/reducer/allPostSlice";
import { PostInterface } from "../../interface/PostInterface";



export function HomeScreen() {
    const allPostSate = useSelector((state: any) => state.allPost);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
    }, [allPostSate]);

    return (<>
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold">All Posts</h1>
                <div className="flex flex-col justify-center items-center">
                    {allPostSate?.map((post: PostInterface) => {
                        return (
                            <div key={post.id} className="flex flex-col justify-center items-center">
                                <h1 className="text-xl font-bold">{post.title}</h1>
                                <p className="text-xl">{post.author}</p>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </div>
    </>)
}