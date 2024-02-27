import React, { useContext } from "react";

import { Navbar as NavBar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import AuthContext from "../context/AuthContext";

function Footer() {
	let { user, logoutUser } = useContext(AuthContext);

	return (
		<NavBar className="footer p-4">
			<Container fluid>
				{/* Logo and Footer Title */}
				<NavBar.Brand as={Link} to="/" className="me-0 text-center">
					<div className="d-flex align-items-center">
						<img
							src="/logo.png"
							className="d-inline-block align-top img-white logo footer-logo"
							alt="Logo"
						/>
						<div className="footer-title d-flex flex-column ms-2">
							<p className="fw-bold mb-0">RHHS Math Club</p>
							<p className="mb-0">Sapere Aude</p>
						</div>
					</div>
				</NavBar.Brand>

				<NavBar>
					{/* Footer Content */}
					<Nav className="footer-list nav-content flex-column text-end ms-auto">
						<NavLink to="/" className="nav-link">
							Home
						</NavLink>
						<NavLink to="/about-us" className="nav-link">
							About Us
						</NavLink>
						<NavLink to="/contact" className="nav-link">
							Contact
						</NavLink>

						{user ? (
							<>
								<NavLink to="/dashboard" className="nav-link">
									Dashboard
								</NavLink>
								<NavLink to="/profile" className="nav-link">
									Profile
								</NavLink>
							</>
						) : (
							<>
								<NavLink to="/sign-up" className="nav-link">
									Sign Up
								</NavLink>
								<NavLink to="/login" className="nav-link">
									Login
								</NavLink>
							</>
						)}
					</Nav>
				</NavBar>
			</Container>
		</NavBar>
	);
}

export default Footer;