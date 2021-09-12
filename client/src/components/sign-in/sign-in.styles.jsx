import styled from "styled-components";

export const SignInContainer = styled.div`
	width: 380px;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 800px) {
		margin: 0 auto 20px;
	}
`;

export const SignInTitle = styled.h2`
	margin: 10px 0;

	@media screen and (max-width: 800px) {
		text-align: center;

		& + span {
			text-align: center;
		}
	}
`;

export const SignInButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 30px;
`;
