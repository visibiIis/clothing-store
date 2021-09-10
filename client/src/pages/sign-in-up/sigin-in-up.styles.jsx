import styled, { keyframes } from "styled-components";

const colorAnimation = keyframes`
	0% {
		color: black;
	}
	50% {
		color: silver;
	}
	100% {
		color: black;
	}
`;

export const SignInUpPageContainer = styled.div`
	width: 850px;
	display: flex;
	justify-content: space-between;
	margin: 30px auto;

	@media screen and (max-width: 800px) {
		flex-direction: column;
		width: auto;
	}
`;

export const SignUpMobileAnchor = styled.a`
	/* transform: rotate(90deg); */
	text-align: center;
	font-weight: bold;
	margin-bottom: 100px;
	animation: ${colorAnimation} 3s infinite;

	&::after {
		content: "❯❯";
		display: block;
		letter-spacing: -0.4ch;
		-webkit-transform: rotate(90deg);
		-moz-transform: rotate(90deg);
		-o-transform: rotate(90deg);
		transform: rotate(90deg);
	}
`;
