import { combineReducers } from "redux";
import { persistReducer, createTransform } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer.js";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const transformer = createTransform(
	(inboundState, key) => {
		if (key === "cart") return { ...inboundState, hidden: true };

		return inboundState;
	},
	(outboundState, key) => {
		if (key === "cart") return { ...outboundState, hidden: true };

		return outboundState;
	}
);

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cart", "user"],
	transforms: [transformer],
};

const rootReducer = combineReducers({
	cart: cartReducer,
	user: userReducer,
	directory: directoryReducer,
	shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
