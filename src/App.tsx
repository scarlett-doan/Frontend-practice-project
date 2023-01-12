import './style/App.scss';
import {BrowserRouter, Routes, Route, useParams, Navigate} from 'react-router-dom'
import Product from './components/Product/Product';
import Profile from './components/User/Profile';
import Cart from './components/Cart/Cart';
import Navigation from './components/Home/Navigation';
import Container from 'react-bootstrap/Container';
import Login from "./components/Auth/Login";

import React, {Component} from 'react';
import ProductList from "./components/Product/ProductList";

interface IProps {

}


class App extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    componentDidMount() {
        this.setState({
            isLoggedIn: !!sessionStorage.getItem("token")
        })
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Navigation/>
                    </div>
                    <Container>
                        <Routes>
                            <Route path='/' element={<ProductList/>}/>
                            <Route path='/product/:id' element={<Product/>}/>
                            <Route path={'/profile'}
                                   element={<ProtectedRoute outlet={<Profile/>}
                                                            authenticationPath={"/login"}/>}/>
                            <Route path={'/cart'}
                                   element={<ProtectedRoute outlet={<Cart/>}
                                                            authenticationPath={"/login"}/>}/>
                            <Route path='/login' element={<Login/>}/>
                        </Routes>
                    </Container>
                </BrowserRouter>
            </div>
        );
    }
}

function withRouter(Child: any) {
    return function withRouter(props: any) {
        const id = useParams;
        return <Child {...props} id={id}/>;
    }
}

type ProtectedRouteProps = {
    authenticationPath: string;
    outlet: JSX.Element;
};


function ProtectedRoute({authenticationPath, outlet}: ProtectedRouteProps) {
    let isLoggedIn = !!sessionStorage.getItem("token");
    if (isLoggedIn) {
        return outlet;
    } else {
        return <Navigate to={{pathname: authenticationPath}}/>;
    }
}

const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    authenticationPath: '/login',
}
export default App;
