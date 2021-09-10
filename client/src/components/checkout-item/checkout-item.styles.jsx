import styled, { css } from "styled-components";

const CheckoutItemInfoStyles = css`
	width: 23%;
`;

const QuantityArrowOut = css`
	opacity: 0.25;
	cursor: default;
`;

export const CheckoutItemContainer = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;
`;

export const CheckoutItemImage = styled.div`
	${CheckoutItemInfoStyles}
	padding-right: 15px;

	img {
		width: 100%;
		height: 100%;
	}
`;

export const CheckoutItemName = styled.span`
	${CheckoutItemInfoStyles}
`;

export const CheckoutItemQuantity = styled.span`
	${CheckoutItemInfoStyles}
	display: flex;
`;

export const CheckoutItemPrice = styled.span`
	${CheckoutItemInfoStyles}

	@media screen and (max-width: 800px) {
		text-align: center;
		width: 14%;
	}
`;

export const QuantityValue = styled.span`
	margin: 0 10px;
`;

export const QuantityArrow = styled.div`
	cursor: pointer;

	${({ quantity }) => (quantity === 1 ? QuantityArrowOut : null)}
`;

export const CheckoutItemRemove = styled.span;

export const CheckoutItemRemoveButton = styled.div`
	padding-left: 12px;
	cursor: pointer;

	@media screen and (max-width: 800px) {
		padding-left: 28px;
	}
`;
