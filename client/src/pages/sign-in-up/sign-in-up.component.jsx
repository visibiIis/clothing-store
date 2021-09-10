import React from "react";
import { isMobile } from "react-device-detect";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import {
	SignInUpPageContainer,
	SignUpMobileAnchor,
} from "./sigin-in-up.styles";

const SignInUpPage = () => {
	const handleScroll = () => {
		window.scroll({
			top: document.body.offsetHeight,
			left: 0,
			behavior: "smooth",
		});
	};

	return (
		<SignInUpPageContainer>
			<SignIn />
			{isMobile ? (
				<SignUpMobileAnchor onClick={handleScroll}>
					Sign Up
				</SignUpMobileAnchor>
			) : null}
			<SignUp />
		</SignInUpPageContainer>
	);
};

export default SignInUpPage;
