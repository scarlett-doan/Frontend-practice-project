export default class Category {
    private _id?: number;
    private _name?: string;
    private _image?: string;


    constructor(id?: number, name?: string, image?: string) {
        this._id = id;
        this._name = name;
        this._image = image;
    }

    get id(): number {
        return <number>this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return <string>this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get image(): string {
        return <string>this._image;
    }

    set image(value: string) {
        this._image = value;
    }
}