import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51JQIW2DrJ9KJOVLtSzUrLxMpCNRkLCrq6rUiq4yOe6OfXAtVaYWIN751jJKa64XAfo0fZykXmM57QzLyT72cXtDU00fLeCsXct";

	const onToken = (token) => {
		console.log(token);
		alert("Payment successful");
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
