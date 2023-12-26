import React from "react";

const Background = () => {
	return (
		<div className="background">
			<img
				className="blob"
				src="svg/blob.svg"
				alt="Background Blob"
				style={{
					top: "-14%",
					left: "-8%",
					width: "100vh",
					height: "100vh",
					transform: "rotate(-14.5deg)",
				}}
			></img>
			<img
				className="blob"
				src="svg/blob.svg"
				alt="Background Blob"
				style={{
					top: "40%",
					left: "50%",
					width: "110vh",
					height: "110vh",
					transform: "rotate(-147.3deg)",
				}}
			></img>
		</div>
	);
};

export default Background;
