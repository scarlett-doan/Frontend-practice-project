import * as React from 'react';
import auth from "../services/auth";
import { Navigate } from "react-router-dom";
interface LoginState {
    email: string;
    password: string;
    token: string;
    error: any;
}

class LoginForm extends React.Component<{}, LoginState> {

    state = {
        email: '',
        password: '',
        token: '',
        error: ''
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState({ [name]: value } as Pick<LoginState, keyof LoginState>);
    }

    handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            let response = await auth.login(this.state.email, this.state.password);
            let token = response.data.access_token;
            this.setState({ email:this.state.email, token });
            sessionStorage.setItem("email", this.state.email);
            sessionStorage.setItem("token", token);
        } catch (error) {
            this.setState({ error });
        }
    }

    render() {
        let { token, error } = this.state;

        const { email, password } = this.state;
        return (
            <div>
                {error && <p>Something wrong!</p>}
                {token && (
                    <Navigate to="/home" replace={true}/>
                )}
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Log in</button>
                </form>
            </div>

        );
    }
}

export default LoginForm;
