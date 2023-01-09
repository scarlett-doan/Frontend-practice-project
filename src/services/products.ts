import axios from "axios";

const API_URL = "https://api.escuelajs.co/api/v1/products";

class ProductService {
    getAll() {
        return axios
            .get(API_URL, {})
            .then((response ) => {
                return response;
            });
    }
}

export default new ProductService();