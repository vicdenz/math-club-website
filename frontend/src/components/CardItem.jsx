import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const CardItem = ({ align, datetime, name, info }) => {
	let currentDate = new Date(datetime);
	let month = currentDate.toLocaleString("en-us", { month: "short" }); // Get first three letters of the month
	let day = currentDate.getDate(); // Get the day of the month

	let alignIndex = align === "start" ? 0 : 1;

	const borderStyles = [
		{ borderRadius: "50px 0 0 50px" },
		{ borderRadius: "0 50px 50px 0" },
	];

	let dateShiftStyle = [{ left: "3px" }, { right: "3px" }];

	let content = [
		<div
			className="col-3 col-lg-2 card-date d-flex flex-column justify-content-center align-items-center"
			style={borderStyles[alignIndex]}
		>
			<p className="card-day mb-0" style={dateShiftStyle[alignIndex]}>
				{day}
			</p>
			<p className="card-month mb-0" style={dateShiftStyle[alignIndex]}>
				{month}
			</p>
		</div>,
		<div
			className={`card-description col-9 col-lg-10 p-2 text-${align}`}
			style={borderStyles[1 - alignIndex]}
		>
			<p className="card-name m-0">{name}</p>
			<span className="fst-italic">{info}</span>
		</div>,
	];

	if (align === "end") {
		[content[0], content[1]] = [content[1], content[0]];
	}

	return (
		<div className="d-flex flex-row card-item mb-3 align-items-center">
			{content}
		</div>
	);
};

export default CardItem;
