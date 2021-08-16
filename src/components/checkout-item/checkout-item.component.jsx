import React from "react";
import { connect } from "react-redux";

import { clearItem, removeItem, addItem } from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div
					className={`arrow no-select ${
						cartItem.quantity === 1 ? "out" : ""
					}`.trim()}
					onClick={() => removeItem(cartItem)}
				>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div
					className="arrow no-select"
					onClick={() => addItem(cartItem)}
				>
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>
			<span className="remove">
				<div
					className="remove-button"
					onClick={() => clearItem(cartItem)}
				>
					&#10005;
				</div>
			</span>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItem(item)),
	addItem: (item) => dispatch(addItem(item)),
	removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
