import React from "react";

const Header = ({ title, children }) => {
	return (
		<div class="header text-center">
			<h1 className="m-0">{title}</h1>
			<h4 className="m0-0">{children}</h4>
		</div>
	);
};

export default Header;
