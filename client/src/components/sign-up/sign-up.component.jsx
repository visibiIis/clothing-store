import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { SignUpContainer, SignUpTitle } from "./sign-up.styles";

import { signUpStart } from "../../redux/user/user.actions";

const SignUp = () => {
	const [userCredentials, setCredentials] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const dispatch = useDispatch();

	const { displayName, email, password, confirmPassword } = userCredentials;

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert("Passwords don't match!");
			return;
		}

		dispatch(signUpStart({ email, password, displayName }));
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<SignUpContainer>
			<SignUpTitle>I don't have an account</SignUpTitle>
			<span>Sign up with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="displayName"
					type="text"
					value={displayName}
					handleChange={handleChange}
					label="Display Name"
					required
				/>
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
				<FormInput
					name="confirmPassword"
					type="password"
					value={confirmPassword}
					handleChange={handleChange}
					label="Confirm Password"
					required
				/>

				<CustomButton type="submit">Sign up</CustomButton>
			</form>
		</SignUpContainer>
	);
};

export default SignUp;
