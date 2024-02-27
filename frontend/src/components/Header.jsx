import React from "react";

const Header = ({ title, children }) => {
	return (
		<div class="header d-flex flex-column justify-content-center text-center">
			<h1 className="m-0">{title}</h1>
			<div>{children}</div>
		</div>
	);
};

export default Header;
