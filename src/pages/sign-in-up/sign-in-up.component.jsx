import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import { SignInUpPageContainer } from "./sigin-in-up.styles";

const SignInUpPage = () => (
	<SignInUpPageContainer>
		<SignIn />
		<SignUp />
	</SignInUpPageContainer>
);

export default SignInUpPage;
