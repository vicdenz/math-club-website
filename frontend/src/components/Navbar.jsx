import React, { useContext } from "react";

import { Navbar as NavBar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import AuthContext from "../context/AuthContext";

function Navbar() {
	let { user, logoutUser } = useContext(AuthContext);

	return (
		<NavBar collapseOnSelect expand="md">
			<Container fluid>
				{/* Logo and NavBar Title */}
				<NavBar.Brand as={Link} to="/" className="me-0 text-center">
					<div className="d-flex align-items-center">
						<img
							src="/logo.png"
							width="45"
							height="55"
							className="d-inline-block align-top"
							alt="Logo"
						/>
						<p className="nav-logo mb-0 ms-2">
							<span>RHHS</span> Math Club
						</p>
					</div>
				</NavBar.Brand>

				<NavBar.Toggle aria-controls="collapse-content" />
				<NavBar.Collapse id="collapse-content">
					{/* Navbar Content */}
					<Nav className="nav-content text-end ms-auto">
						<Link to="/about-us" className="nav-link">
							About Us
						</Link>
						<Link to="/contact" className="nav-link">
							Contact
						</Link>

						{user ? (
							<>
								<Link to="/dashboard" className="nav-link">
									Dashboard
								</Link>
								<Link to="/profile" className="nav-link">
									Profile
								</Link>
								<Link
									to="/logout"
									className="nav-link"
									onClick={logoutUser}
								>
									Logout
								</Link>
							</>
						) : (
							<>
								<Link to="/sign-up" className="nav-link">
									Sign Up
								</Link>
								<Link to="/login" className="nav-link">
									Login
								</Link>
							</>
						)}
					</Nav>
				</NavBar.Collapse>
			</Container>
		</NavBar>
	);
}

export default Navbar;
