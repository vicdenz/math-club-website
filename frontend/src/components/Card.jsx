import React from "react";

const Card = ({ align, colWidth = 6, title, children }) => {
	return (
		<div className={`d-flex flex-column justify-content-${align}`}>
			<h2 className={`card-title mt-4 mb-2 p-0 text-${align}`}>
				{title}
			</h2>
			<div
				className={`d-flex flex-column justify-content-${align} col-${colWidth} col-md-${
					colWidth - 2
				}`}
			>
				{children}
			</div>
		</div>
	);
};

export default Card;
