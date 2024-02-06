// Modify your existing component or create a new one
import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

const SignUpPage = () => {
	let { loginUser } = useContext(AuthContext);

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const signUpUser = async (userData) => {
		try {
			const response = await fetch("http://127.0.0.1:8000/api/sign-up/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userData),
			});

			const data = await response.json();

			if (response.status === 201) {
				loginUser({
					username: userData.username,
					password: userData.password,
				});
			} else {
				console.error("Registration failed:", data.error);
			}
		} catch (error) {
			console.error("Error during registration:", error.message);
		}
	};

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
					name="first_name"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>

				<label>Last Name:</label>
				<input
					type="text"
					name="last_name"
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
