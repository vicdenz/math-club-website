import React from "react";

const Header = ({ title, children }) => {
	return (
		<div className="header d-flex flex-column justify-content-center text-center">
			<h1 className="m-0">{title}</h1>
			{children}
		</div>
	);
};

export default Header;
