import React from "react";

const getSource = (src) => {
	if (import.meta.env.BASE_URL === "/") {
		return src;
	} else {
		return import.meta.env.BASE_URL + src;
	}
};

export default getSource;
