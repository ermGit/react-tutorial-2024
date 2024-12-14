import React, {useEffect} from "react";

export function UserNameDisplay({username}) {
    const [timerPassed, setTimerPassed] = React.useState(false);

    // Makes the username appear after 5secs.
    useEffect(() => {
        setTimeout(() => {
            setTimerPassed(true);
        }, 4000)
    }, []);

    return (
        <div>
            <span>{timerPassed && username}</span>
        </div>
    );
}