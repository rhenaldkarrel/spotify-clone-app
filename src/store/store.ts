import { configureStore } from "@reduxjs/toolkit";

// Reducer
import authReducer from "./authSlice";
import tracksReducer from "./tracksSlice";

export default configureStore({
	reducer: {
		auth: authReducer,
		tracks: tracksReducer,
	},
});
