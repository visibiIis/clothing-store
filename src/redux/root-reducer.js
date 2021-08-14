import { combineReducers } from "redux";

import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer.js";

export default combineReducers({
	cart: cartReducer,
	user: userReducer,
});
