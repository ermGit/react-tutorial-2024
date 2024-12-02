import PropTypes from "prop-types";
// import { useState } from "react";

export function UserDetails({ user, /*setUsers*/ }) {

	return (
		<div>
			<b>ID: </b>
			<span>{user.id}</span>
			<br />
			<b>Username: </b>
			<span>{user.username}</span>
			<br />
			<b>Email: </b>
			<span>{user.email}</span>
			<br/>
		</div>
	);
}

UserDetails.propTypes = {
	user: PropTypes.shape({
		id: PropTypes.number.isRequired,
		username: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
	}).isRequired,
	setUsers: PropTypes.func.isRequired,
};
