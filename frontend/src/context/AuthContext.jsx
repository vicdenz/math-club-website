import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
	const navigate = useNavigate();

	let [authTokens, setAuthTokens] = useState(() =>
		localStorage.getItem("authTokens")
			? JSON.parse(localStorage.getItem("authTokens"))
			: null
	);
	let [user, setUser] = useState(() =>
		localStorage.getItem("authTokens")
			? jwtDecode(localStorage.getItem("authTokens"))
			: null
	);
	let [loading, setLoading] = useState(true);

	let loginUser = async (userData) => {
		let response = await fetch("http://127.0.0.1:8000/api/token/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: userData.username,
				password: userData.password,
			}),
		});
		let data = await response.json();

		if (response.status === 200) {
			setAuthTokens(data);
			setUser(jwtDecode(data.access));
			localStorage.setItem("authTokens", JSON.stringify(data));

			console.log("Hello");
			navigate("/");
		} else {
			alert("Something went wrong!");
		}
	};

	let logoutUser = () => {
		setAuthTokens(null);
		setUser(null);
		localStorage.removeItem("authTokens");
	};

	let updateToken = async () => {
		let response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ refresh: authTokens?.refresh }),
		});

		let data = await response.json();

		if (response.status === 200) {
			setAuthTokens(data);
			setUser(jwtDecode(data.access));
			localStorage.setItem("authTokens", JSON.stringify(data));
		} else {
			logoutUser();
		}

		if (loading) {
			setLoading(false);
		}
	};

	let contextData = {
		user: user,
		authTokens: authTokens,
		loginUser: loginUser,
		logoutUser: logoutUser,
	};

	useEffect(() => {
		if (loading) {
			updateToken();
		}

		let intervalDuration = 1000 * 60 * 4; // 4 minutes

		let interval = setInterval(() => {
			if (authTokens) {
				updateToken();
			}
		}, intervalDuration);
		return () => clearInterval(interval);
	}, [authTokens, loading]);

	return (
		<AuthContext.Provider value={contextData}>
			{loading ? null : children}
		</AuthContext.Provider>
	);
};
