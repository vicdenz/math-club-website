import React from "react";

import { Button, Form } from "react-bootstrap/";

import Header from "../components/Header";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const ContactPage = () => {
	return (
		<div className="d-flex flex-column">
			<div className="mx-5 mb-5">
				<div className="mt-5 mb-4">
					<Header title="Contact Us" />
				</div>

				<div className="d-flex flex-row justify-content-around">
					<Card align="start" colWidth={5} title="Our Socials">
						<div className="">
							<Link
								to="/contact"
								className="nav-link card-link col-7 py-2 text-center"
							>
								<span></span>
							</Link>
						</div>
					</Card>
					<Card
						align="center"
						colWidth={5}
						title="Message Us Directly"
					>
						<Form className="message-form p-3">
							<Form.Group
								className="mb-2"
								controlId="formFirstName"
							>
								<Form.Label>First Name</Form.Label>
								<Form.Control
									type="text"
									placeholder="Leonhard"
								/>
							</Form.Group>

							<Form.Group
								className="mb-2"
								controlId="formLastName"
							>
								<Form.Label>Last Name</Form.Label>
								<Form.Control type="text" placeholder="Euler" />
							</Form.Group>

							<Form.Group className="mb-3" controlId="formEmail">
								<Form.Label>Your Email Address</Form.Label>
								<Form.Control
									type="email"
									placeholder="leonhard.euler1@gmail.com"
								/>
							</Form.Group>
							<Form.Group
								className="mb-2"
								controlId="formBasicCheckbox"
							>
								<Form.Label>Your Message</Form.Label>
								<Form.Control
									as="textarea"
									rows={3}
									placeholder="You got my identity wrong!"
								/>
							</Form.Group>
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Form>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
