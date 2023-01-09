import React from 'react'
import {BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import Product from './pages/product';
import Cart from './pages/cart';
import Login from "./pages/login";
import WithoutNav from "./components/withoutNav";
import WithNav from "./components/withNav";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route element={<WithoutNav />}>
                    <Route path="/" element={<Login/>}/>
                </Route>
                <Route element={<WithNav />}>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/product' element={<Product/>}/>
                    <Route path='/Profile' element={<Profile/>}/>
                    <Route path='/Cart' element={<Cart/>}/>
                </Route>
            </Routes>

        </Router>

    )
}

export default App