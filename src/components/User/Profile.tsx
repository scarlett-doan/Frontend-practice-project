import React, {Component} from 'react'
import User from "../../units/User";
import Lucy from "../../scripts/Lucy";
import {Button, Col, Row} from "react-bootstrap";

interface IProps {

}

interface IState {
    user: User
    isLoggedIn: boolean
}

export default class Profile extends Component<IProps, IState> {
    private lucy: Lucy;

    constructor(props: IProps) {
        super(props);
        this.lucy = new Lucy()
        this.state = {
            isLoggedIn: false,
            user: new User(1, "", "", "")
        }
    }

    componentDidMount() {
        let email = (sessionStorage.getItem("email") || '').toString();
        this.lucy.getUserByEmail(email, (u: User) => {
            if (u != null) {
                this.setState({
                    user: u
                })
            }
        })
    }

    logout = () => {
        sessionStorage.clear();
        window.location.reload();
    }

    render() {
        return (
            <div className={'Profile'}>
                <h2>My Account</h2>
                <div>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img className="userImg" src={this.state.user.image} alt=""/>
                            </div>
                        </Col>
                        <Col md={6}>
                            <Row className="userInfo">
                                <Col md={3}><b>Full name</b></Col>
                                <Col md={9}>{this.state.user.name}</Col>
                                <Col md={3}><b>Email address</b></Col>
                                <Col md={9}>{this.state.user.email}</Col>
                            </Row>
                            <Button className="logout" onClick={this.logout}>Logout</Button>
                        </Col>
                    </Row>
                </div>

            </div>
        )
    }
}
