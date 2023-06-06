import React, { useState, useEffect } from "react";
import "../Styles/story.css";
import Avatar from "@mui/material/Avatar";

export default function Story({ image, title }) {
	const [Seed, setSeed] = useState();
	useEffect(() => {
		const clear = setTimeout(() => {
			setSeed(Math.floor(Math.random() * 5000));
		}, 100);
		return () => clearTimeout(clear);
	}, []);
	return (
		<div
			className="story"
			style={{
				backgroundImage: `url(${image})`
			
			}}
		>
			<Avatar src={`https://avatars.dicebear.com/api/male/${Seed}.svg`} />

			<h4>{title}</h4>
		</div>
	);
}
