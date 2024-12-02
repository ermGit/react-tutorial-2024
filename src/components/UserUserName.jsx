import React from "react";
import styles from "./styles.module.css";
export function UserUserName(props) {
    return (
        // <React.Fragment></React.Fragment>
        <>
            <b style={{
                fontSize: "32px",
                color: "red",
                fontFamily: "cursive",
            }}
            className={styles.username}
            >
                Username:
            </b>
            <span>{props.username}</span>
        </>
    )
}