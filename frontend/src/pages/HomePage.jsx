import React, { useState, useEffect } from "react";
import { getData } from "utils/Requests.jsx";

import Header from "components/Header";
import Card from "components/Card";
import CardItem from "components/CardItem.jsx";
import { Link } from "react-router-dom";

const HomePage = () => {
	let [events, setEvents] = useState([]);
	let [contests, setContests] = useState([]);

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
		<div className="d-flex flex-column mx-5">
			<div className="mt-5 mb-4">
				<Header title="RHHS Math Club">
					<span className="home-text">
						Unlocking Math's Wonders: Where Inclusivity and
						Friendship Count, and Everyone's Welcome!
					</span>
				</Header>
			</div>

			<Card align="start" colWidth={4} title="Upcoming Events">
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
			<Card align="end" colWidth={4} title="Upcoming Contests">
				{contests.map((contest) => (
					<CardItem
						key={contest.id}
						contest={contest}
						align="end"
						datetime={contest.datetime}
						name={contest.name + " | " + getContestTitle(contest)}
						info={
							"Sign Up Deadline: " + getContestDeadline(contest)
						}
					/>
				))}
			</Card>

			<Card align="start" colWidth={6} title="Looking To Join?">
				<div className="d-flex flex-column card-p">
					<p className="mb-2">
						Are you struggling with math? Or do you simply want to
						learn something new? If you answered yes to any of those
						questions then you've come to the right place!
					</p>
					<p className="mb-4">
						Whether it be simple algebra or complex calculus, our
						talented team of tutors and executives are here to help!
						Sign up to become a tutee!
					</p>
					<Link
						reloadDocument
						to="/contact"
						className="nav-link card-link col-7 align-self-end py-2 text-center"
					>
						Click Here To Join Math Club!
					</Link>
				</div>
			</Card>
		</div>
	);
};

export default HomePage;
