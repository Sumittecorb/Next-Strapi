import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;
