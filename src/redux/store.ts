import {configureStore} from "@reduxjs/toolkit";
import {CartReducer} from "./reducer";
import thunk from "redux-thunk";
import {UserReducer} from "./userReducer";
import {ProductReducer} from "./productReducer";

export const store = configureStore({
    reducer: {
        cart: CartReducer.reducer,
        user: UserReducer.reducer,
        productList: ProductReducer.reducer
    },
    middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>; // A global type to access reducers types
export type AppDispatch = typeof store.dispatch; // Type to access dispatch