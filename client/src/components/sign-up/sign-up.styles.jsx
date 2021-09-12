import styled from "styled-components";

export const SignUpContainer = styled.div`
	width: 380px;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 800px) {
		margin: 0 auto;

		button {
			margin: 0 auto;
		}
	}
`;

export const SignUpTitle = styled.h2`
	margin: 10px 0;

	@media screen and (max-width: 800px) {
		text-align: center;

		& + span {
			text-align: center;
		}
	}
`;
