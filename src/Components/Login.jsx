import React from "react";
import "../Styles/login.css";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import Button from "@mui/material/Button";

export default function Login() {
	const [{ user }, dispatch] = useStateValue();
	const handleLogin = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				console.log(result)
				dispatch({
					type: "Set User",
					user: result.user,
				});
			})
			.catch((error) => {
				alert(error.message);
			});
	};
	return (
		<div className="login" onClick={handleLogin}>
			<div className="login__logo">
				<img
					src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png"
					alt="fb-iamge"
				/>
				<img
					src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
					alt=""
				/>
			</div>
			<Button onClick={handleLogin} type="submit">
				Sign In
			</Button>
		</div>
	);
}
