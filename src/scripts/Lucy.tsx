import axios from "axios"
import User from "../units/User";

export default class Lucy {
    API = "https://api.escuelajs.co/api/v1"

    getProducts(cb: any) {
        let url = `${this.API}/products?offset=0`
        axios.get(url).then(res => {
            const products = res.data;
            cb(products);
        }).catch(error => console.log(error));
    }

    async getAllProducts() {
        let url = `${this.API}/products`
        return await axios.get(url);
    }

    async findProductBy(key: string, value: string) {
        if (!key) {
            key = "title"
        }
        let url = `${this.API}/products?${key}=${value}`;
        return await axios.get(url);
    }

    getProduct(productId: number, cb: any) {
        let url = `${this.API}/products/${productId}`
        axios.get(url).then(res => {
            const products = res.data;
            cb(products);
        }).catch(error => console.log(error));
    }

    getUserByEmail(email: string, cb: any){
        let url = `${this.API}/users/`
        axios.get(url).then(res => {
            let user: User;
            if (res.status == 200) {
                const u = res.data.filter((x: { [x: string]: string; })=>x['email'] === email)[0];
                user = new User(u['id'], u['email'], u['password'], u['name'])
                user.image = u['avatar']
            }
            // @ts-ignore
            cb(user);

        }).catch(error => console.log(error));
    }

    getUser(userId: number, cb: any) {
        let url = `${this.API}/users/${userId}`
        axios.get(url).then(res => {
            let user: User;
            if (res.status == 200) {
                const u = res.data;
                user = new User(u['id'], u['email'], u['password'], u['name'])
                user.image = u['avatar']
            }
            // @ts-ignore
            cb(user);

        }).catch(error => console.log(error));
    }

    login(email: string, pwd: string) {
        let url = `${this.API}/auth/login`
        let payload = {
            "email": email,
            "password": pwd
        }
        return axios.post(url, payload)
            .then((res) => {
                sessionStorage.setItem("token", res.data.access_token)
                return res;
            })

    }
}