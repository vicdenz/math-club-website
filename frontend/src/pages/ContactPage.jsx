import React, { useState } from "react";
import { sendData } from "utils/Requests.jsx";

import { Button, Form } from "react-bootstrap/";

import Header from "components/Header";
import Card from "components/Card";
import IconLink from "components/IconLink";
import { Link } from "react-router-dom";

const ContactPage = () => {
	const maxCharCount = 200;
	const [charCount, setCharCount] = useState(0);

	const handleMessage = async (e) => {
		e.preventDefault();

		const form = new FormData(e.currentTarget);
		const body = {};
		for (const [key, value] of form.entries()) {
			body[key] = value;
		}

		sendData("contact", body);
	};

	return (
		<div className="d-flex flex-column">
			<div className="mx-5 mb-5">
				<div className="mt-5 mb-3">
					<Header title="Contact Us" />
				</div>

				<div className="d-flex flex-row justify-content-around">
					<Card align="start" colWidth={5} title="Our Socials">
						<div className="contact-info d-inline-block ms-2 mb-2">
							<p>
								Email:{" "}
								<span className="fst-italic text-decoration-underline">
									mathclubrhhs@gmail.com
								</span>
							</p>
							<p className="mb-3">
								Classroom Code:{" "}
								<span className="fst-italic text-decoration-underline">
									igaatel
								</span>
							</p>
							<p>201 Yorkland Street, L4S 1A2</p>
							<p>Richmond Hill, Ontario, Canada</p>
							<p className="mb-3">(905)-884-2131</p>
							<div className="d-flex justify-content-start">
								<IconLink
									href="https://classroom.google.com/"
									src="/svg/icons/google-classroom.svg"
									className="me-2"
								/>
								<IconLink
									href="https://discord.com/"
									src="/svg/icons/discord.svg"
									className="me-2"
								/>
								<IconLink
									href="https://www.instagram.com/rhhs_math/"
									src="/svg/icons/instagram.svg"
								/>
							</div>
						</div>
					</Card>
					<Card
						align="center"
						colWidth={5}
						title="Message Us Directly"
					>
						<Form
							className="message-form p-3"
							onSubmit={handleMessage}
						>
							<Form.Group className="mb-2" controlId="firstName">
								<Form.Label>First Name</Form.Label>
								<Form.Control
									type="text"
									maxLength={40}
									name="firstName"
									placeholder="Leonhard"
								/>
							</Form.Group>

							<Form.Group className="mb-2" controlId="lastName">
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									type="text"
									maxLength={60}
									name="lastName"
									placeholder="Euler"
								/>
							</Form.Group>

							<Form.Group className="mb-2" controlId="email">
								<Form.Label>Your Email Address</Form.Label>
								<Form.Control
									type="email"
									maxLength={100}
									name="email"
									placeholder="leonhard.euler@gmail.com"
								/>
							</Form.Group>
							<Form.Group className="mb-2" controlId="message">
								<Form.Label>Your Message</Form.Label>
								<Form.Control
									as="textarea"
									rows={3}
									name="message"
									maxLength={maxCharCount}
									placeholder="You got my identity wrong!"
									onChange={(e) =>
										setCharCount(e.target.value.length)
									}
								/>
								<Form.Label
									id="charCount"
									className="d-flex justify-content-end mb-0"
								>
									{charCount}/{maxCharCount}
								</Form.Label>
							</Form.Group>
							<Button className="contact-btn" type="submit">
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
