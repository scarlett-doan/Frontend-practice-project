import React from 'react';
import MyProduct from "../../units/MyProduct";

interface IProps {
    p: MyProduct;
}

const CartItem = (props: IProps) => {
    return (
        <tr>
            <td>{props.p.id}</td>
            <td>{props.p.name}</td>
            <td>{props.p.price}</td>
            <td>{props.p.quantity}</td>
            <td>{props.p.quantity * props.p.price}</td>
        </tr>
    );
};

export default CartItem;