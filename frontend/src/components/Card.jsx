import React from "react";

const Card = ({ align, title, children }) => {
	return (
		<div className={`d-flex row justify-content-${align}`}>
			<h2 className={`card-title mt-4 mb-2 text-${align}`}>{title}</h2>
			<div className="col-6 col-md-4">
				<div className="row">{children}</div>
			</div>
		</div>
	);
};

export default Card;
