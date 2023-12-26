import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";

import { Container } from "react-bootstrap";
import Card from "../components/Card";
import Event from "../components/Event";
import { getData } from "../utils/Requests.jsx";

const HomePage = () => {
	let [events, setEvents] = useState([]);
	let [contests, setContests] = useState([]);
	let { authTokens } = useContext(AuthContext);

	useEffect(() => {
		getData("events", setEvents);
		getData("contests", setContests);
	}, []);

	return (
		<Container>
			<div className="d-flex flex-column">
				<Card align="start" title="Upcoming Events">
					{events.map((event, index) => (
						<Event event={event} align="start" />
					))}
				</Card>
				<Card align="end" title="Upcoming Contests">
					{contests.map((contest, index) => (
						<Event event={contest} align="end" />
					))}
				</Card>
			</div>
		</Container>
	);
};

export default HomePage;
