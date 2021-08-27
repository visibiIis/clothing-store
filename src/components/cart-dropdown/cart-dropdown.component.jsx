import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import CustonButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {
	selectCartItems,
	selectCartHidden,
} from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import {
	CartDropdownContainer,
	CartItemsContainer,
	EmptyMessageContainer,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
	<CartDropdownContainer>
		<CartItemsContainer>
			{console.log(cartItems)}
			{cartItems.length ? (
				cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
			) : (
				<EmptyMessageContainer>
					Your cart is empty
				</EmptyMessageContainer>
			)}
		</CartItemsContainer>
		<CustonButton
			onClick={() => {
				dispatch(toggleCartHidden());
				history.push("/checkout");
			}}
		>
			GO TO CHECKOUT
		</CustonButton>
	</CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	toggleCartHidden: selectCartHidden,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
