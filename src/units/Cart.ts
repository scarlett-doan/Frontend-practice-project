import MyProduct from "./MyProduct";

export default class MyCart {
    private _total?: number;
    private _products: Array<MyProduct>;

    constructor(products: Array<MyProduct>, total?: number) {
        if (typeof total != "undefined") {
            this._total = total;
        }
        this._products = products;
    }


    get total(): number {
        let totalPrice: number = 0;
        this._products.map((p: MyProduct) => {
            totalPrice += (p.price * p.quantity)
        });
        return totalPrice;
    }

    get products(): Array<MyProduct> {
        return this._products;
    }

    set products(value: Array<MyProduct>) {
        this._products = value;
    }
}