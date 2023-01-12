import React, {Component} from 'react'
import MyProduct from "../../units/MyProduct";
import CartItem from "./CartItem";
import {Button, Table} from "react-bootstrap";
import MyCart from "../../units/Cart";
import {useAppSelector, useAppDispatch} from "../../hooks";
import {removeCart} from "../../redux/reducer";

const Cart = () => {
    let myOrder: MyCart = useAppSelector((state) => state.cart.cart)
    const carts = myOrder.products.map((p: MyProduct) => <CartItem key={p.id} p={p}/>)
    const dispatch = useAppDispatch()
    const handleClearOrder = () => {
        dispatch(removeCart({
            cart: new MyCart([])
        }))
    }
    return (
        <div className='Cart'>
            <h2>My cart</h2>
            <Table className="cart-table" striped bordered hover size="sm">
                <thead>
                <tr>
                    <td className="column-header">ID</td>
                    <td className="column-header">Name</td>
                    <td className="column-header">Price</td>
                    <td className="column-header">Quantity</td>
                    <td className="column-header">Total</td>
                </tr>
                </thead>
                <tbody>
                {carts}
                <tr>
                    <td colSpan={4}><b>Total order</b></td>
                    <td><b>{myOrder.total}</b></td>
                </tr>
                </tbody>
            </Table>
            <Button className="clear-cart" variant={"danger"} onClick={handleClearOrder}>Clear cart</Button>
        </div>
    )
};

export default Cart;
