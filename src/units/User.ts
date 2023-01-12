interface UserInterface {

}

export default class User implements UserInterface {
    private _id?: number;
    private _email?: string;
    private _password?: string;
    private _name?: string;
    private _image?: string;
    private _token?: string;
    private _role?: string;


    constructor(id?: number, email?: string, password?: string, name?: string) {
        if (id) {
            this._id = id;
        }
        if (email) {
            this._email = email;
        }
        if (password) {
            this._password = password;
        }
        if (name) {
            this._name = name;
        }
    }

    get role(): string {
        return <string>this._role;
    }

    set role(value: string) {
        this._role = value;
    }

    get id(): number {
        return <number>this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get email(): string {
        return <string>this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get password(): string {
        return <string>this._password;
    }

    set password(value: string) {
        this._password = value;
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


    get token(): string {
        return <string>this._token;
    }

    set token(value: string) {
        this._token = value;
    }
}