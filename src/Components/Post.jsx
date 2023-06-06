import React from "react";
import "../Styles/posts.css";
import { Avatar } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NearMeIcon from "@mui/icons-material/NearMe";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Post({
	profilePic,
	image,
	username,
	timeStamp,
	message,
}) {
	return (
		<div className="post">
			<div className="post__top">
				<Avatar src={profilePic} />
				<div className="post__topInfo">
					<h3>{username}</h3>
					<p>{new Date(timeStamp?.toDate()).toUTCString().slice(0,-3)}</p>
				</div>
			</div>
			<div className="post__middle">
				<p>{message}</p>
			</div>
			<div className="post__image">
				<img src={image} alt="" />
			</div>
			<div className="post__options">
				<div className="post__option">
					<ThumbUpIcon />
					<p>Like</p>
				</div>
				<div className="post__option">
					<ChatBubbleOutlineIcon />
					<p>Comment</p>
				</div>
				<div className="post__option">
					<NearMeIcon />
					<p>Share</p>
				</div>
				<div className="post__option">
					<AccountCircleIcon />
					<ExpandMoreIcon />
				</div>
			</div>
		</div>
	);
}
