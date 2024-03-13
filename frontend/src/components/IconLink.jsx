import React from "react";

import getSource from "utils/getSource";

const IconLink = ({ href, src, size = "55px", className = "" }) => {
	return (
		<a
			href={href}
			className={`icon-link d-flex justify-content-center align-items-center p-1 ${className}`}
		>
			<img
				className="icon-img"
				src={getSource(src)}
				style={{
					width: size,
					height: size,
				}}
			></img>
		</a>
	);
};

export default IconLink;
