import styled, { css } from "styled-components";

const getSize = (props) => {
	const { size } = props;
	if (!size) {
		return;
	}

	if (size === "large") {
		return LargeMenuItem;
	}
};

const getImage = (props) => {
	return props.imageUrl;
};

const LargeMenuItem = css`
	height: 49.5vh;
`;

export const MenuItemContainer = styled.div`
	min-width: 30%;
	height: 31.25vh;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 0 0 1px black;
	margin: 0 7.5px 15px;
	overflow: hidden;
	${getSize}

	&:hover {
		cursor: pointer;

		.background-image {
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
			transform: scale(1.1);
		}

		.content {
			opacity: 0.9;
		}
	}

	&:first-child {
		margin-right: 7.5px;
	}

	&:last-child {
		margin-left: 7.5px;
	}

	@media screen and (max-width: 800px) {
		height: 200px;
	}
`;

export const BackgroundImageContainer = styled.div`
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	background-image: url(${getImage});
	box-sizing: border-box;
`;

export const MenuItemContentContainer = styled.div`
	height: 90px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	background-color: white;
	opacity: 0.7;
	position: absolute;
`;

export const ContentTitle = styled.span`
	font-weight: bold;
	text-transform: uppercase;
	font-size: 22px;
	color: #4a4a4a;
`;

export const ContentSubtitle = styled.span`
	font-weight: lighter;
	font-size: 16px;
`;
