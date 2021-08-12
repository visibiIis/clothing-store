import React from "react";

import "./sign-in-up.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInUpPage = () => (
	<div className="sign-in-up-page">
		<SignIn />
		<SignUp />
	</div>
);

export default SignInUpPage;
