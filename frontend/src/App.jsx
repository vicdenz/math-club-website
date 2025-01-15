import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter as Router, createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";

import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Background from "components/Background";

import { AuthProvider } from "context/AuthContext";

import PrivateRoute from "utils/PrivateRoute";

import HomePage from "pages/HomePage";
import AboutUsPage from "pages/AboutUsPage";
import ContactPage from "pages/ContactPage";
import NotFoundPage from "pages/NotFoundPage";

import SignUpPage from "pages/SignUpPage";
import LoginPage from "pages/LoginPage";

import DashboardPage from "pages/DashboardPage";
import ProfilePage from "pages/ProfilePage";

import "src/App.css";

import { Outlet } from "react-router-dom";

function Layout() {
	return (
		<>
			<Navbar />
			<div id="body">
				<Outlet />
			</div>
			<Footer />
		</>
	);
}

const router = createBrowserRouter([
	{
		element: (
			<AuthProvider>
				<Layout />
			</AuthProvider>
		),
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/about-us",
				element: <AboutUsPage />,
			},
			{
				path: "/contact",
				element: <ContactPage />,
			},
			{
				path: "/login",
				element: <LoginPage />,
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
	// return (
	// 	<>
	// 		<Router>
	// 			<AuthProvider>
	// 				<Navbar />
	// 				<div id="body">
	// 					<Routes>
	// 						<Route exact path="/" element={<HomePage />} />
	// 						<Route path="/about-us" element={<AboutUsPage />} />
	// 						<Route path="/contact" element={<ContactPage />} />
	// 						{/* <Route path="/sign-up" element={<SignUpPage />} />
	// 						<Route path="/login" element={<LoginPage />} />

	// 						<Route element={<PrivateRoute />}>
	// 							<Route
	// 								path="/dashboard"
	// 								element={<DashboardPage />}
	// 							/>
	// 							<Route
	// 								path="/profile"
	// 								element={<ProfilePage />}
	// 							/>
	// 						</Route> */}

	// 						<Route path="*" element={<NotFoundPage />} />
	// 					</Routes>
	// 				</div>
	// 				<Footer />
	// 			</AuthProvider>
	// 		</Router>
	// 	</>
	// );
}

export default App;
