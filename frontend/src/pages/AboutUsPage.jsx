import React from "react";

import Header from "../components/Header";
import Card from "../components/Card";

const AboutUsPage = () => {
	return (
		<div className="d-flex flex-column">
			<div className="mx-5 mb-5">
				<div className="mt-5 mb-5">
					<Header title="About Us" />
				</div>

				<div className="d-flex flex-row justify-content-between">
					<Card align="start" colWidth={0} title="Our Mission">
						<div className="card-p col-10 ms-2">
							<p className="mb-2">
								The Math Club offers a comprehensive learning
								experience for students, encompassing various
								aspects of mathematics.
							</p>

							<p className="mb-0">
								From strengthening core concepts aligned with
								the Ontario Math Curriculum and practical
								real-life applications in academic math, to
								honing competitive problem-solving skills
								through specialized instruction in contest math,
								and providing personalized assistance through
								the tutor team for a wide range of mathematical
								challenges, the Math Club serves as a dynamic
								platform catering to diverse mathematical
								interests and needs.
							</p>
						</div>
					</Card>
					<div className="col-5 d-flex justify-content-center align-items-center">
						<div className="team-img"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUsPage;
