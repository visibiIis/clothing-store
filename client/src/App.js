import "./App.css";
import React, { useEffect, lazy, Suspense } from "react";
import { useSelector } from "react-redux";

import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.components";

import { GlobalStyle } from "./global.styles";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const SignInUpPage = lazy(() =>
	import("./pages/sign-in-up/sign-in-up.component")
);
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));

const App = () => {
	useEffect(() => {
		checkUserSession();
	}, []);

	const currentUser = useSelector(selectCurrentUser);

	return (
		<div>
			<GlobalStyle />
			<Header />
			<Switch>
				<Suspense fallback={<Spinner />}>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route exact path="/checkout" component={CheckoutPage} />
					<Route
						exact
						path="/signin"
						render={() =>
							currentUser ? <Redirect to="/" /> : <SignInUpPage />
						}
					/>
				</Suspense>
			</Switch>
		</div>
	);
};

export default App;
