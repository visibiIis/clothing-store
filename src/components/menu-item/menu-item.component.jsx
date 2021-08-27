import React from "react";
import { withRouter } from "react-router-dom";

import {
	MenuItemContainer,
	MenuItemContentContainer,
	BackgroundImageContainer,
	ContentTitle,
	ContentSubtitle,
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
	<MenuItemContainer
		size={size}
		onClick={() => history.push(`${match.url}${linkUrl}`)}
	>
		<BackgroundImageContainer
			className="background-image"
			imageUrl={imageUrl}
		></BackgroundImageContainer>
		<MenuItemContentContainer>
			<ContentTitle>{title}</ContentTitle>
			<ContentSubtitle>SHOP NOW</ContentSubtitle>
		</MenuItemContentContainer>
	</MenuItemContainer>
);

export default withRouter(MenuItem);
