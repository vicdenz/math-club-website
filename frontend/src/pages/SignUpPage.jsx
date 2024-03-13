import React, { useState, useContext } from "react";
import { signUpUser } from "utils/Requests";

const SignUpPage = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const handleSignUp = async (e) => {
		e.preventDefault();

		// Underscores to match API format
		signUpUser({
			username: username,
			first_name: firstName,
			last_name: lastName,
			password: password,
		});
	};

	return (
		<div>
			<h1>Sign Up</h1>
			<form onSubmit={handleSignUp}>
				<label>Username:</label>
				<input
					type="text"
					name="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>

				<label>First Name:</label>
				<input
					type="text"
					name="firstName"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>

				<label>Last Name:</label>
				<input
					type="text"
					name="lastName"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>

				<label>Password:</label>
				<input
					type="password"
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};

export default SignUpPage;
