import React, { useContext } from "react";
import AuthContext from "context/AuthContext";

export const getData = async (endPoint, setFunction = null) => {
	try {
		let response = await fetch(
			`${process.env.BACKEND_URL}/api/${endPoint}/`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		let data = await response.json();

		if (response.status === 200) {
			if (setFunction !== null) {
				setFunction(data);
			}
			return data;
		}
	} catch (error) {
		console.error("Error while fetching data:", error.message);
		return false;
	}
};

export const sendData = async (endPoint, userData) => {
	try {
		let response = await fetch(
			`${process.env.BACKEND_URL}/api/${endPoint}/`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userData),
			}
		);

		return response.status;
	} catch (error) {
		// console.error("Error while sending data:", error.message);
		return false;
	}
};

export const signUpUser = async (userData) => {
	const { loginUser } = useContext(AuthContext);

	try {
		const response = await fetch(
			`${process.env.BACKEND_URL}/api/sign-up/`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userData),
			}
		);

		if (response.status === 201) {
			loginUser({
				username: userData.username,
				password: userData.password,
			});
		} else {
			// console.error("Registration failed:", data.error);
			alert("Something went wrong during sign up!");
		}
		return response.status;
	} catch (error) {
		// console.error("Error during registration:", error.message);
		alert("Something went wrong during sign up!");
		return false;
	}
};
