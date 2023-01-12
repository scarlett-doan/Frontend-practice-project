import MyProduct from "../units/MyProduct";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductListState} from "./type";

export type initialStateType = {
    productList: Array<MyProduct>
}

const productList: Array<MyProduct> = []
const initialState: initialStateType = {
    productList
}

export const ProductReducer = createSlice({
    name: 'productList',
    initialState,
    reducers: {
        addProductToList: (state, action: PayloadAction<ProductListState>) => {
            state.productList = action.payload.productList;
        },
        findProduct: (state, action: PayloadAction<ProductListState>) => {
            state.productList = action.payload.productList;
        },
    }
});

export const {addProductToList} = ProductReducer.actions;

export default ProductReducer.reducer;