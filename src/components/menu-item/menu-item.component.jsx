import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import {
	MenuItemContainer,
	MenuItemContentContainer,
	BackgroundImageContainer,
	ContentTitle,
	ContentSubtitle,
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
	const match = useRouteMatch();
	const history = useHistory();

	return (
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
};

export default MenuItem;
