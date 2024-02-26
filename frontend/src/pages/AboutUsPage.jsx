import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Card from "../components/Card";
import CardItem from "../components/CardItem.jsx";

const AboutUs = () => {
	let { authTokens } = useContext(AuthContext);

	return (
		<div className="d-flex flex-column align-self-center mx-5 mb-5">
			<div className="title mt-2">
				<Header title="About Us">
					<div className="mx-5">
						<img className="team-img" src="/about-us.jpeg" alt="" />
					</div>
				</Header>
			</div>

			<Card align="start" colWidth={8} title="Our Mission">
				<div className="help">
					<p className="mb-0">
						The Math Club offers a comprehensive learning experience
						for students, encompassing various aspects of
						mathematics. From strengthening core concepts aligned
						with the Ontario Math Curriculum and practical real-life
						applications in academic math, to honing competitive
						problem-solving skills through specialized instruction
						in contest math, and providing personalized assistance
						through the tutor team for a wide range of mathematical
						challenges, the Math Club serves as a dynamic platform
						catering to diverse mathematical interests and needs.
					</p>
				</div>
			</Card>
		</div>
	);
};

export default AboutUs;
