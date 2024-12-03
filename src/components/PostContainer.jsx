import {PostContent} from "./PostContent";
import {useContext} from "react";
import {UserContext} from "../utils/contexts/UserContext.js";

export function PostContainer() {
    const userContextData = useContext(UserContext);

    console.log(userContextData);

    return (
        <div>
            <div>{userContextData.displayName}</div>
            <PostContent/>
        </div>
    );
}