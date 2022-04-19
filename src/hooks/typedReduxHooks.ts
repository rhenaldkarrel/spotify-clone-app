import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import store from "../store/store";

// Type definitions for redux-toolkit
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create a hook for redux state
export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
