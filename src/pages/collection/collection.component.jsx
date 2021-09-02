import React, { useEffect } from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import {
	CollectionPageContainer,
	CollectionItemsContainer,
	CollectionTitle,
} from "./collection.styles";

import { firestore } from "../../firebase/firebase.utils";

const CollectionPage = ({ collection }) => {
	useEffect(() => {
		console.log("I am subscribing");
		const unsubscribeFromCollections = firestore
			.collection("collections")
			.onSnapshot((snapshot) => console.log(snapshot));

		return () => {
			console.log("I am unsubscribing");
			unsubscribeFromCollections();
		};
	}, []);

	const { title, items } = collection;
	return (
		<CollectionPageContainer>
			<CollectionTitle>{title}</CollectionTitle>
			<CollectionItemsContainer>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</CollectionItemsContainer>
		</CollectionPageContainer>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
