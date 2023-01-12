import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";

import MyCart from "../units/Cart";
import {CartState, ProductState} from "./type";
import MyProduct from "../units/MyProduct";


export type initialStateType = {
    cart: MyCart
}

const cart = new MyCart([]);
const initialState: initialStateType = {
    cart
}


export const CartReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductState>) => {
            let filters = state.cart.products.filter((p) => {
                return p.id == action.payload.product.id
            })
            if (filters.length > 0) { // exists
                filters[0].quantity += 1
            } else {
                state.cart.products.push(action.payload.product)
            }
        },
        removeItem: (state, action: PayloadAction<ProductState>) => {
            let p: any = state.cart.products.filter((_p) => {
                return _p.id == action.payload.product.id;
            })
            state.cart.products.slice(p[0].id)
        },
        updateCart: (state, action: PayloadAction<CartState>) => {
            state.cart.products = action.payload.cart.products
        },
        removeCart: (state, action: PayloadAction<CartState>) => {
            state.cart = action.payload.cart
        },
    }
})

// To able to use reducers we need to export them.
export const {addToCart, removeItem, updateCart, removeCart} = CartReducer.actions;

//Selector to access bookList state.
export const selectBookList = (state: RootState) => state.cart;

export default CartReducer.reducer;