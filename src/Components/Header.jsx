import React from "react";
import "../Styles/header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";

import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontIcon from "@mui/icons-material/Storefront";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import AppsIcon from "@mui/icons-material/Apps";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { useRef } from "react";
import { useStateValue } from "../StateProvider";

export default function Header() {
	const [{ user }] = useStateValue();
	const ref1 = useRef();
	const ref2 = useRef();

	const handleClick = () => {
		ref1.current.classList.toggle("height");
		ref2.current.classList.toggle("display");
	};
	return (
		<div ref={ref1} className="header ">
			<div className="header__left">
				<img
					src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png"
					alt="fb-iamge"
				/>
				<div className="header__input">
					<SearchIcon />
					<input type="text" placeholder="Search facebook" />
				</div>
			</div>
			<div ref={ref2} className="header__middle display">
				<div className="header__middleIcons header__active">
					<HomeIcon />
				</div>
				<div className="header__middleIcons">
					<OndemandVideoIcon/>
				</div>{" "}
				<div className="header__middleIcons">
					<StorefrontIcon />
				</div>{" "}
				<div className="header__middleIcons">
					<SupervisedUserCircleIcon />
				</div>{" "}
				<div className="header__middleIcons">
					<VideogameAssetIcon />
				</div>
			</div>
			<div className="header__right">
				<IconButton>
					<AppsIcon />
				</IconButton>
				<IconButton>
					<NotificationsIcon />
				</IconButton>
				<IconButton>
					<ExpandMoreIcon />
				</IconButton>
				<div className="header__info">
					<Avatar src={user?.photoURL} />
					<h4>{user?.displayName}</h4>
				</div>
			</div>
			<div onClick={handleClick} className="hamburger">
				<div className="line1"></div>
			</div>
		</div>
	);
}
