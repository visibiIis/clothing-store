import React from "react";
import { connect } from "react-redux";

import { clearItem, removeItem, addItem } from "../../redux/cart/cart.actions";

import {
	CheckoutItemContainer,
	CheckoutItemImage,
	CheckoutItemName,
	CheckoutItemQuantity,
	CheckoutItemRemoveButton,
	CheckoutItemPrice,
	QuantityArrow,
	QuantityValue,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<CheckoutItemContainer>
			<CheckoutItemImage>
				<img src={imageUrl} alt="item" />
			</CheckoutItemImage>
			<CheckoutItemName>{name}</CheckoutItemName>
			<CheckoutItemQuantity>
				<QuantityArrow
					quantity={quantity}
					className="no-select"
					onClick={() => removeItem(cartItem)}
				>
					&#10094;
				</QuantityArrow>
				<QuantityValue>{quantity}</QuantityValue>
				<QuantityArrow
					className="no-select"
					onClick={() => addItem(cartItem)}
				>
					&#10095;
				</QuantityArrow>
			</CheckoutItemQuantity>
			<CheckoutItemPrice>{price}</CheckoutItemPrice>
			<CheckoutItemRemoveButton
				className="no-select"
				onClick={() => clearItem(cartItem)}
			>
				&#10005;
			</CheckoutItemRemoveButton>
		</CheckoutItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItem(item)),
	addItem: (item) => dispatch(addItem(item)),
	removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
