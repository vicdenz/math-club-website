import React from "react";

const Card = ({ align, colWidth = 6, title, className, children }) => {
	return (
		<div className={`d-flex row justify-content-${align} ${className}`}>
			<h2 className={`card-title mt-4 mb-2 p-0 text-${align}`}>
				{title}
			</h2>
			<div className={`col-${colWidth} col-md-${colWidth - 2} p-0`}>
				<div className="row">{children}</div>
			</div>
		</div>
	);
};

export default Card;
