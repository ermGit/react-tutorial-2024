import {PostContentButtons} from "./PostContentButtons";
import {UserContext} from "../utils/contexts/UserContext.js";
import {useContext} from "react";

export function PostContent() {
    const userContext = useContext(UserContext);

    return (
        <div>
            <PostContentButtons />
            {userContext.email}
        </div>
    );
}