import React, { useContext } from "react";

import { Navbar as NavBar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import AuthContext from "context/AuthContext";

import getSource from "utils/getSource";

function Navbar() {
	// let { user, logoutUser } = useContext(AuthContext);

	return (
		<div className="fixed-navbar">
			<NavBar collapseOnSelect expand="md" className="d-flex flex-column">
				<Container className="d-flex justify-content-between align-self-center p-0">
					<NavBar.Brand
						as={Link}
						to="/"
						className="me-0 p-0 text-center col-3"
					>
						<div className="d-flex align-items-center">
							<img
								src={getSource("images/logo.png")}
								className="d-inline-block align-top nav-logo"
							/>
							<p className="nav-title mb-0 ms-2">
								<span>RHHS</span> Math Club
							</p>
						</div>
					</NavBar.Brand>
					<NavBar.Toggle
						className="justify-self-end"
						aria-controls="navbar-links"
					/>

					<NavBar.Collapse
						id="navbar-links"
						className="justify-content-end p-0"
					>
						{/* Navbar Content */}
						<Nav className="nav-content text-end">
							<Link to="/about-us" className="nav-link">
								About Us
							</Link>
							<Link to="/contact" className="nav-link">
								Contact
							</Link>

							{/* {user ? (
								<>
									<Link to="/dashboard" className="nav-link">
										Dashboard
									</Link>
									<Link to="/profile" className="nav-link">
										Profile
									</Link>
									<Link
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
							)} */}
						</Nav>
					</NavBar.Collapse>
				</Container>
				<Container className="schedule justify-content-center text-center p-0 d-none d-md-flex">
					<p>Room 2029</p>
					<p className="col-1"></p>
					<p>Friday Weekly</p>
				</Container>
			</NavBar>
		</div>
	);
}

export default Navbar;
