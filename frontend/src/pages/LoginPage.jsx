import React, { useState, useContext } from "react";
import AuthContext from "context/AuthContext";
import { useNavigate } from "react-router-dom";

import { Button, Form } from "react-bootstrap/";

import Header from "components/Header";

const LoginPage = () => {
	const navigate = useNavigate();

	let { loginUser } = useContext(AuthContext);
	const [validated, setValidated] = useState(false);
	const [error, setError] = useState("");

	let handleLogin = async (e) => {
		e.preventDefault();

		const form = e.currentTarget;

		if (form.checkValidity() === false) {
			e.stopPropagation();
		} else {
			let loginStatus = await loginUser({
				username: form.username.value,
				password: form.password.value,
			});

			if (loginStatus) {
				// setError("Login attempt was successful!");
				navigate("/");
			} else {
				setError("Login attempt was unsuccessful. Please try again.");
			}
			return true;
		}
		setValidated(true);
	};

	return (
		<div className="d-flex flex-column">
			<div className="mx-5 mb-5">
				<div className="mt-5 mb-5">
					<Header title="Login" />
				</div>

				<div className="d-flex flex-row justify-content-center mb-auto">
					<Form className="message-form col-5 p-4" onSubmit={handleLogin} noValidate validated={validated}>
						<Form.Group className="mb-2" controlId="username">
							<Form.Label>Username:</Form.Label>
							<Form.Control required type="username" minLength={8} maxLength={100} name="username" placeholder="leonhard.euler" />
							<Form.Control.Feedback type="invalid">This is not a valid username.</Form.Control.Feedback>
						</Form.Group>
						<Form.Group className="mb-2" controlId="password">
							<Form.Label>Password:</Form.Label>
							<Form.Control required type="password" minLength={6} maxLength={100} name="password" placeholder="******" />
							<Form.Control.Feedback type="invalid">This is not a valid password.</Form.Control.Feedback>
						</Form.Group>
						<Button className="contact-btn mb-2" type="submit">
							Submit
						</Button>
						{error && <p className="form-error text-danger">{error}</p>}
					</Form>
				</div>
			</div>
		</div>
	);

	return (
		<div>
			<h1>Log In</h1>
			<div>
				<form onSubmit={handleLogin}>
					<input type="text" name="username" placeholder="Enter Username" />
					<input type="password" name="password" placeholder="Enter Password" />
					<input type="submit" value="Log In" />
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
