import {Button, Card, Form} from "react-bootstrap";

import React, {Component} from 'react';
import Lucy from "../../scripts/Lucy";
import {Navigate} from "react-router-dom";

interface IProps {
}

interface IState {
    products?: any;
    token?: any;
    error?: any;
}

class Login extends Component<IProps, IState> {
    private lucy = new Lucy();

    state = {
        token: '',
        error: ''
    };

    constructor(props: IProps) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this)
    }

    async handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        let email = e.currentTarget.email.value;
        let pwd = e.currentTarget.password.value;
        try {
            let response = await this.lucy.login(email, pwd);
            this.setState({token: response.data.access_token})
            sessionStorage.setItem("email", email)
        }catch (error) {
            this.setState({error: error});
        }
    }

    render() {
        let {token, error} = this.state;
        return (
            <div className={"LoginPage"}>
                {token && (
                    <Navigate to="/" replace={true} state={{isLoggedIn:!!token}}/>
                )}
                <Card className={"LoginForm"}>
                    <Card.Header className="card-header">
                        Login
                    </Card.Header>
                    <Card.Body className="card-body">
                        <Form onSubmit={this.handleLogin}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="card-body-label">Email address</Form.Label>
                                <Form.Control type="email" name={"email"} placeholder="Enter email"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="card-body-label">Password</Form.Label>
                                <Form.Control type="password" name={"password"} placeholder="Password"/>
                            </Form.Group>
                            {error && <p>Something went wrong!</p>}
                            <Button className="login-button" variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Login;