import React, { useEffect, useState } from "react";
import "../Styles/feed.css";
import StoryReel from "../Components/StoryReel";
import MessageSender from "../Components/MessageSender";
import Post from "../Components/Post";
import db from "../firebase";

export default function Feed() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collection("posts")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				setPosts(
					snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
				);
			});
	}, []);

	return (
		<div className="feed">
			<StoryReel />
			<MessageSender />

			{posts.map((post) => {
				const { id, data } = post;
				return (
					<Post
						image={data.image}
						message={data.message}
						profilePic={data.profilePic}
						username={data.username}
						key={id}
						timeStamp={data.timestamp}
					/>
				);
			})}
		</div>
	);
}
