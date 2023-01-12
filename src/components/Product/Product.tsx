import {useParams} from 'react-router-dom'

import React, {Component, useState} from 'react'
import Lucy from '../../scripts/Lucy';
import SingleProduct from './SingleProduct';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {addToCart} from "../../redux/reducer";
import MyProduct from "../../units/MyProduct";
import {ProductState} from "../../redux/type";

type IProps = {
    // updateCart: (products: Array<MyProduct> | any) => void
}
//  const book = useAppSelector((state) => state.book.bookList.find((book) => book.id === id)); // Selecting particular book's information to prefill inputs for updating.
export default function Product(props: IProps) {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    let [product, setProduct] = useState(0)
    let lucy = new Lucy();
    if (product == 0) {
        lucy.getProduct(Number(id), (p: any) => {
            setProduct(p)
        })
    }
    // const [products, total] = React.useState<CartInterface|{}>()
    const handleAddToCart = (e: React.Component) => {
        let newProduct: ProductState = {
            // @ts-ignore
            product: new MyProduct(id, product['title'], product['description'], product['images'][0], product['price'], 1)
        }
        dispatch(addToCart(newProduct))
    }

    return (
        <div className='SingleProduct'>
            {<SingleProduct handleClick={handleAddToCart} p={product}/>}
        </div>
    )
}

