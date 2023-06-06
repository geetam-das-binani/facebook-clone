import React, { useState } from "react";
import "../Styles/messageSender.css";
import Avatar from "@mui/material/Avatar";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { useStateValue } from "../StateProvider";
import db from "../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export default function MessageSender() {
	const [{ user }] = useStateValue();
	const [Input, setInput] = useState("");
	const [ImageUrl, setImageurl] = useState("");
	
	const handleSubmit = (e) => {
		e.preventDefault();
       db.collection('posts').add({
		message:Input,
		image:ImageUrl,
		timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		profilePic:user?.photoURL,
		username:user?.displayName



	   })
		setInput("");
		setImageurl("");
	};
	return (
		<div className="messageSender">
			<div className="messageSender__top">
				<Avatar src={user?.photoURL} />

				<form>
					<input
						className="messageSender__input"
						type="text"
						placeholder={`what's on your mind ? ${user?.displayName}`}
						value={Input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<input
						type="text"
						placeholder="image URL(optional)"
						value={ImageUrl}
						onChange={(e) => setImageurl(e.target.value)}
					/>
					<button className="sendMessage" onClick={handleSubmit} type="submit">
						Send message
					</button>
				</form>
			</div>
			<div className="messageSender__bottom">
				<div className="messageSender__option">
					<VideoLibraryIcon style={{ color: "red" }} />
					<h3>Live Video</h3>
				</div>
				<div className="messageSender__option">
					<PhotoLibraryIcon style={{ color: "green" }} />
					<h3>Photo/Video</h3>
				</div>
				<div className="messageSender__option">
					<InsertEmoticonIcon style={{ color: "orange" }} />
					<h3>Feeling/Activity</h3>
				</div>
			</div>
		</div>
	);
}
