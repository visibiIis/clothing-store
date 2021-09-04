import React from "react";
import { useDispatch } from "react-redux";

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

const CheckoutItem = ({ cartItem }) => {
	const dispatch = useDispatch();

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
					onClick={() => dispatch(removeItem(cartItem))}
				>
					&#10094;
				</QuantityArrow>
				<QuantityValue>{quantity}</QuantityValue>
				<QuantityArrow
					className="no-select"
					onClick={() => dispatch(addItem(cartItem))}
				>
					&#10095;
				</QuantityArrow>
			</CheckoutItemQuantity>
			<CheckoutItemPrice>{price}</CheckoutItemPrice>
			<CheckoutItemRemoveButton
				className="no-select"
				onClick={() => dispatch(clearItem(cartItem))}
			>
				&#10005;
			</CheckoutItemRemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
