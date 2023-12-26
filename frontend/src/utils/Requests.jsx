import React from "react";

export const getData = async (endpoint, setFunc) => {
	let response = await fetch(`http://127.0.0.1:8000/api/${endpoint}/`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	let data = await response.json();

	if (response.status === 200) {
		setFunc(data);
	} else {
		return response.status;
	}
};
