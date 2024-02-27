import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Background from "./components/Background";

import { AuthProvider } from "./context/AuthContext";

import PrivateRoute from "./utils/PrivateRoute";

import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";

import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";

import "./App.css";

function App() {
	return (
		<>
			<Router>
				<AuthProvider>
					{/* <Background /> */}
					<Navbar />
					<div id="body">
						<Routes>
							<Route exact path="/" element={<HomePage />} />
							<Route path="/about-us" element={<AboutUsPage />} />
							<Route path="/contact" element={<ContactPage />} />
							<Route path="/sign-up" element={<SignUpPage />} />
							<Route path="/login" element={<LoginPage />} />

							<Route element={<PrivateRoute />}>
								<Route
									path="/dashboard"
									element={<DashboardPage />}
								/>
								<Route
									path="/profile"
									element={<ProfilePage />}
								/>
							</Route>
						</Routes>
					</div>
					<Footer />
				</AuthProvider>
			</Router>
		</>
	);
}

export default App;
