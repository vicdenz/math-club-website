import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";

import { Container } from "react-bootstrap";
import Card from "../components/Card";
import CardItem from "../components/CardItem.jsx";
import { getData } from "../utils/Requests.jsx";

const HomePage = () => {
	let [events, setEvents] = useState([]);
	let [contests, setContests] = useState([]);
	let { authTokens } = useContext(AuthContext);

	useEffect(() => {
		getData("events", setEvents);
		getData("contests", setContests);
	}, []);

	let getContestTitle = (contest) => {
		const contestTitleLength = 13;

		if (contest.short_provider) {
			return contest.short_provider;
		} else {
			if (contest.provider.length > contestTitleLength) {
				return contest.provider.slice(0, contestTitleLength) + "...";
			}
			return contest.provider;
		}
	};

	let getContestDeadline = (contest) => {
		let currentDate = new Date(contest.deadline);
		let month = currentDate.toLocaleString("en-us", { month: "short" }); // Get first three letters of the month
		let day = currentDate.getDate(); // Get the day of the month

		return `${month} ${day}`;
	};

	return (
		<Container className="content">
			<div className="d-flex flex-column">
				<Card align="start" title="Upcoming Events">
					{events.map((event) => (
						<CardItem
							key={event.id}
							event={event}
							align="start"
							datetime={event.datetime}
							name={event.name}
							info={"Rm. " + event.room}
						/>
					))}
				</Card>
				<Card align="end" title="Upcoming Contests" className="mb-5">
					{contests.map((contest) => (
						<CardItem
							key={contest.id}
							contest={contest}
							align="end"
							datetime={contest.datetime}
							name={
								contest.name + " | " + getContestTitle(contest)
							}
							info={
								"Sign Up Deadline: " +
								getContestDeadline(contest)
							}
						/>
					))}
				</Card>
				<Card align="start" colWidth={8} title="Need Math Help?">
					<div className="help">
						<p>
							Are you struggling with math? Or do you simply want
							to learn something new? If you answered yes to any
							of those questions then you’ve come to the right
							place!
						</p>
						<p className="mb-0">
							Whether it be simple algebra or complex calculus,
							our talented team of tutors and executives are here
							to help! Sign up to become a tutee!
						</p>
					</div>
				</Card>
			</div>
		</Container>
	);
};

export default HomePage;
