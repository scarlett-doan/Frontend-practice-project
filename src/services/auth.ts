import axios from "axios";

const API_URL = "https://api.escuelajs.co/api/v1/auth/login";

class AuthService {
    login(email: string, password: string) {
        return axios
            .post(API_URL, {
                email,
                password
            })
            .then((response ) => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    getCurrentUser() {
        const userStr = localStorage.getItem("user");
        if (userStr) return JSON.parse(userStr);

        return null;
    }
}

export default new AuthService();