import MyProduct from "../MyProduct";
import MyCart from "../Cart";

export default interface CartInterface {
    products: Array<MyProduct>;
    total: number;
}
export type CartAction = {
    type: string,
    cart: CartInterface
}

export type CartState = {
    cart: MyCart
}

export type DispatchType = (args: CartAction) => CartAction