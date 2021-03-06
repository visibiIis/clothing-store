import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
	googleSignInStart,
	emailSignInStart,
} from "../../redux/user/user.actions";

import {
	SignInContainer,
	SignInTitle,
	SignInButtonsContainer,
} from "./sign-in.styles";

const SignIn = () => {
	const [userCredentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	const dispatch = useDispatch();

	const { email, password } = userCredentials;

	const handleSubmit = async (event) => {
		event.preventDefault();

		dispatch(emailSignInStart(email, password));
	};

	const handleChange = (event) => {
		const { value, name } = event.target;

		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<SignInContainer>
			<SignInTitle>I already have an account</SignInTitle>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					value={email}
					handleChange={handleChange}
					label="Email"
					required
				/>
				<FormInput
					name="password"
					type="password"
					value={password}
					handleChange={handleChange}
					label="Password"
					required
				/>

				<SignInButtonsContainer>
					<CustomButton type="submit">Sign in</CustomButton>
					<CustomButton
						type="button"
						googleSignIn
						onClick={() => dispatch(googleSignInStart())}
					>
						Sign in with Google
					</CustomButton>
				</SignInButtonsContainer>
			</form>
		</SignInContainer>
	);
};

export default SignIn;
