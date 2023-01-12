import Category from "./Category";

export default class MyProduct {
    private _id: number;
    private _name: string;
    private _desc: string;
    private _imgUrl: string;
    private _price: number;
    private _quantity: number;
    private _category?: Category;


    constructor(id: number, name: string, desc: string, imgUrl: string, price: number, quantity: number, category?: Category) {
        this._id = id;
        this._name = name;
        this._desc = desc;
        this._imgUrl = imgUrl;
        this._price = price;
        this._quantity = quantity;
        this._category = category;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get desc(): string {
        return this._desc;
    }

    set desc(value: string) {
        this._desc = value;
    }

    get imgUrl(): string {
        return this._imgUrl;
    }

    set imgUrl(value: string) {
        this._imgUrl = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }

    get category(): Category {
        return <Category>this._category;
    }

    set category(value: Category) {
        this._category = value;
    }
}