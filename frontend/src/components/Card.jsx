import React from "react";

const Card = ({ align, colWidth, title, children }) => {
	return (
		<div
			className={`d-flex flex-column align-self-${align} ${
				colWidth === 0 ? "" : `col-${colWidth}`
			} mb-auto`}
		>
			<h2 className={`card-title mt-4 mb-2 p-0 text-${align}`}>
				{title}
			</h2>
			<div className={"card-body"}>{children}</div>
		</div>
	);
};

export default Card;
