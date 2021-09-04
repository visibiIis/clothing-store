import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import {
	CollectionPreviewContainer,
	CollectionPreviewTitle,
	PreviewContainer,
} from "./collection-preview.styles";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items, routeName }) => {
	const history = useHistory();
	const match = useRouteMatch();

	return (
		<CollectionPreviewContainer>
			<CollectionPreviewTitle
				onClick={() => history.push(`${match.url}/${routeName}`)}
			>
				{title}
			</CollectionPreviewTitle>
			<PreviewContainer>
				{items
					.filter((item, index) => index < 4)
					.map((item) => (
						<CollectionItem key={item.id} item={item} />
					))}
			</PreviewContainer>
		</CollectionPreviewContainer>
	);
};

export default CollectionPreview;
