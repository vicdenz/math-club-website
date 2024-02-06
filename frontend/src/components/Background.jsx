import React from "react";
import { useLocation } from "react-router-dom";

const Background = () => {
	const { pathname } = useLocation();

	return (
		<div className="background">
			<img
				className="bg-img"
				src="svg/blob.svg"
				alt="Background Blob"
				style={{
					top: "-26%",
					left: "-10%",
					minWidth: "900px",
					width: "60vw",
					maxWidth: "1100px",
					transform: "rotate(-20deg)",
				}}
			></img>
			<img
				className="bg-img"
				src="svg/blob.svg"
				alt="Background Blob"
				style={{
					top: "25%",
					left: "53%",
					minWidth: "900px",
					width: "55vw",
					maxWidth: "1200px",
					transform: "rotate(-147.3deg)",
				}}
			></img>
			<img
				className="bg-img"
				src="svg/pi.svg"
				alt="Background Pi"
				style={{
					top: "10%",
					right: "24%",
					minWidth: "200px",
					width: "25%",
					maxWidth: "100%",
					transform: "rotate(-17.4deg)",
					"z-index": "-1",
				}}
			></img>
			<img
				className="bg-img"
				src="svg/sigma.svg"
				alt="Background Sigma"
				style={{
					bottom: "-10%",
					left: "10%",
					minWidth: "225px",
					width: "25%",
					maxWidth: "100%",
					transform: "rotate(24.4deg)",
					"z-index": "-1",
				}}
			></img>
			<img
				className="bg-img"
				src="svg/blob.svg"
				alt="Background Blob"
				style={{
					bottom: "-100%",
					left: "-7%",
					minWidth: "100px",
					width: "55vw",
					maxWidth: "100%",
					transform: "rotate(-79.9deg)",
				}}
			></img>
		</div>
	);
};

export default Background;
