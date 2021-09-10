import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import CustonButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import {
	CartDropdownContainer,
	CartItemsContainer,
	EmptyMessageContainer,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();
	const history = useHistory();

	return (
		<CartDropdownContainer>
			<CartItemsContainer>
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
};

export default CartDropdown;
