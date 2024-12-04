import {useContext} from "react";
import {UserContext} from "../utils/contexts/UserContext.js";

export function PostContentButtons() {
    const userContextData = useContext(UserContext);

    return (
        <div>
            <span>Hello </span>
            {userContextData.username}
            <br/>
            <button
                onClick={() => {
                    userContextData.setUserData(
                        (currentState) => ({
                            ...currentState,
                            displayName: "Updated Display Name",
                        })
                    )
                }}
            >
                Click Me</button>
        </div>
    );
}