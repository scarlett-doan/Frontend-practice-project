import MyCart from "../units/Cart";
import MyProduct from "../units/MyProduct";

export type CartState = {
    cart: MyCart
};

export type ProductState = {
    product: MyProduct
}

export type ProductIndexState = {
    index: number
}
export type ProductListState = {
    productList: Array<MyProduct>
}
export type UserState = {
    user: User
}