import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const SignUpPage = () => {
	// let { signUpUser } = useContext(AuthContext);

	return (
		<div>
			<h1>Sign Up</h1>
			<div>
				{/* <form onSubmit={signUpUser}> */}
				<form>
					<input
						type="text"
						name="username"
						placeholder="Enter Username"
					/>
					<input
						type="password"
						name="password"
						placeholder="Enter Password"
					/>
					<input type="submit" value="Log In" />
				</form>
			</div>
		</div>
	);
};

export default SignUpPage;
