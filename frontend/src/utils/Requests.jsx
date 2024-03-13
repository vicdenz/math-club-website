import React, { useContext } from "react";
import AuthContext from "context/AuthContext";

export const getData = async (endpoint, setFunc) => {
	let response = await fetch(`http://127.0.0.1:8000/api/${endpoint}/`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	let data = await response.json();

	if (response.status === 200) {
		setFunc(data);
	} else {
		return response.status;
	}
};

export const sendData = async (endpoint, userData) => {
	let response = await fetch(`http://127.0.0.1:8000/api/${endpoint}/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userData),
	});

	return response.status;
};

export const signUpUser = async (userData) => {
	const { loginUser } = useContext(AuthContext);

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
