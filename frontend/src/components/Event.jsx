import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const Event = ({ align, event }) => {
	let currentDate = new Date(event.datetime);
	let month = currentDate.toLocaleString("en-us", { month: "short" }); // Get first three letters of the month
	let day = currentDate.getDate(); // Get the day of the month

	let eventDateBorderStyle =
		align === "start"
			? { "border-radius": "50px 0 0 50px" }
			: { "border-radius": "0 50px 50px 0" };

	let eventDateShiftStyle =
		align === "start" ? { left: "3px" } : { right: "3px" };

	let content = [
		<div
			className="col-3 col-lg-2 p-0 event-date d-flex flex-column justify-content-center align-items-center"
			style={eventDateBorderStyle}
		>
			<p className="event-day mb-0" style={eventDateShiftStyle}>
				{day}
			</p>
			<p className="event-month mb-0" style={eventDateShiftStyle}>
				{month}
			</p>
		</div>,
		<div className={`event-info col-9 col-lg-10 p-2 text-${align}`}>
			<p className="event-name m-0">{event.name}</p>
			<span className="event-room">Rm. {event.room}</span>
		</div>,
	];

	if (align === "end") {
		[content[0], content[1]] = [content[1], content[0]];
	}

	return (
		<div className="row event p-0 ms-3 mb-3 align-items-center">
			{content}
		</div>
	);
};

export default Event;
