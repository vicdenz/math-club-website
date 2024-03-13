import React from "react";

import Header from "components/Header";

const NotFoundPage = () => {
	return (
		<div className="d-flex flex-column">
			<div className="mt-5">
				<Header title="404 Page Not Found">
					<span className="home-text">
						That page doesn't have a real solution. It must be
						imaginary.
					</span>
				</Header>
			</div>
		</div>
	);
};

export default NotFoundPage;
