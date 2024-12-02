import PropTypes from "prop-types";
import {UserUserName} from "./UserUserName.jsx";
import styles from "./users.module.scss";
export function UserProfile(props) {
    return (
        <div id="user-profile">
            <UserUserName username={props.username} />
            <b>Age:</b><span>{props.age}</span>
            <div>
                <span>Email: </span>
                <span>bob@bob.com </span>
            </div>
            <section>
                <span className={styles.foodsTitle}>Favorite Foods:</span>
                <br />
                <ul>
                    <li>Sushi</li>
                    <li>Pizza</li>
                    <li>Mediterranean Food</li>
                </ul>
            </section>
        </div>
    )
}

UserProfile.propTypes = {
    username: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    favoriteFoods: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    ).isRequired,
}