import PropTypes from "prop-types";
import {useState} from "react";
// import { useState } from "react";

export function UserDetails({ user, setUsers }) {
	const [isEditing, setIsEditing] = useState(false);
	const [username, setUsername] = useState(user.username);
	const [email, setEmail] = useState(user.email);

	return (
		<div>
			<div>
				<button
					onClick={(e) => {
						setIsEditing((currentstate) => !currentstate)
					}}
				>
					Edit
				</button>
				<button
					onClick={(e) =>
						{
							setUsers(
								(currentUsersState) => {
									currentUsersState.filter(
										(currentUser) => currentUser.id !== user.id
									);
								}
							);
						}}
				>
					Delete
				</button>
				{
					isEditing &&
					(
						<button
							onClick={(e) =>
							{
								setUsers(
									(currentUsersState) => {
										return currentUsersState.map(
											(currentUser) =>
											{
												if (currentUser.id === user.id) {
													return (
														{...currentUser, username: username, email: email}
													);
												}
												else
													return currentUser;
											}
										)
									}
								)
								console.log(user);
								setIsEditing(false);
							}}
						>
							Save
						</button>
					)
				}
			</div>
			<div>
				<b>ID: </b>
				<span>{user.id}</span>
				<br/>
				<b>Username: </b>
				<br/>
				{isEditing ?
					<input
						aria-label="username"
						id="username"
						name="username"
						value={username}
						onChange={(e) =>
							{
								setUsername(e.target.value);
							}}
					/> :
					<span>{username}</span>
				}
				<br/>
				<b>Email: </b>
				<br/>
				{isEditing ?
					<input
						aria-label="email"
						id="email"
						name="email"
						value={email}
						onChange={(e) =>
						{
							setEmail(e.target.value);
						}}
					/> :
					<span>{email}</span>
				}
				<br/>
			</div>
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
