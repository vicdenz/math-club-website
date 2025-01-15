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
	const [validated, setValidated] = useState(false); // State for overall form validation

	const handleMessage = async (e) => {
		e.preventDefault();

		const form = e.currentTarget;

		if (form.checkValidity() === false) {
			e.stopPropagation();
		} else {
			const formData = new FormData(form);
			const body = {};

			for (const [key, value] of formData.entries()) {
				body[key] = value;
			}

			sendData("contact", body);
		}
		setValidated(true);
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
								Email: <span className="fst-italic text-decoration-underline">mathclubrhhs@gmail.com</span>
							</p>
							<p className="mb-3">
								Classroom Code: <span className="fst-italic text-decoration-underline">igaatel</span>
							</p>
							<p>201 Yorkland Street, L4S 1A2</p>
							<p>Richmond Hill, Ontario, Canada</p>
							<p className="mb-3">(905)-884-2131</p>
							<div className="d-flex justify-content-start">
								<IconLink href="https://classroom.google.com/c/NjIxMzE0NjM1NjEx?cjc=igaatel/" src="svg/icons/google-classroom.svg" className="me-2" />
								<IconLink href="https://discord.com/invite/EQmNaeEsRu/" src="svg/icons/discord.svg" className="me-2" />
								<IconLink href="https://www.instagram.com/rhhs_math/" src="svg/icons/instagram.svg" />
							</div>
						</div>
					</Card>
					<Card align="center" colWidth={5} title="Message Us Directly">
						<Form className="message-form p-3" onSubmit={handleMessage} noValidate validated={validated}>
							<Form.Group className="mb-2" controlId="firstName">
								<Form.Label>First Name</Form.Label>
								<Form.Control required type="text" maxLength={40} name="firstName" placeholder="Leonhard" />
								<Form.Control.Feedback type="invalid">This field cannot be empty.</Form.Control.Feedback>
							</Form.Group>

							<Form.Group className="mb-2" controlId="lastName">
								<Form.Label>Last Name</Form.Label>
								<Form.Control required type="text" maxLength={60} name="lastName" placeholder="Euler" />
								<Form.Control.Feedback type="invalid">This field cannot be empty.</Form.Control.Feedback>
							</Form.Group>

							<Form.Group className="mb-2" controlId="email">
								<Form.Label>Your Email Address</Form.Label>
								<Form.Control required type="email" maxLength={100} name="email" placeholder="leonhard.euler@gmail.com" />
								<Form.Control.Feedback type="invalid">This is not a valid email address.</Form.Control.Feedback>
							</Form.Group>
							<Form.Group className="mb-2" controlId="message">
								<Form.Label>Your Message</Form.Label>
								<Form.Control required as="textarea" rows={3} name="message" maxLength={maxCharCount} placeholder="You got my identity wrong!" onChange={(e) => setCharCount(e.target.value.length)} />
								<Form.Control.Feedback type="invalid">Your message cannot be empty.</Form.Control.Feedback>
								<Form.Label id="charCount" className="d-flex justify-content-end mb-0">
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
