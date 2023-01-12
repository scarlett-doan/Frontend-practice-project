import React, {FormEvent} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {addProductToList} from "../../redux/productReducer";
import MyProduct from "../../units/MyProduct";
import Row from "react-bootstrap/Row";
import ProductItem from "./ProductItem";
import Lucy from "../../scripts/Lucy";
import {Form} from "react-bootstrap";

const ProductList = () => {
    const dispatch = useAppDispatch();
    const productList: Array<MyProduct> = useAppSelector((state) => state.productList.productList)
    const l = new Lucy();
    let products = productList.map((p: MyProduct, index) => <ProductItem key={index} p={p}/>)

    if (productList.length == 0) {
        l.getAllProducts().then((res) => {
            dispatch(addProductToList({
                productList: res.data
            }))
        });
    }

    const filterByTitle = (e: any) => {
        e.preventDefault();
        let value = e.currentTarget.value;
        l.findProductBy("title", value)
            .then((res) => {
                dispatch(addProductToList({
                    productList: res.data
                }))
            })
    }
    const comparePrice = (a: MyProduct, b: MyProduct) => {
        if (a.price < b.price) {
            return -1;
        }
        if (a.price > b.price) {
            return 1;
        }
        return 0;
    }
    const compareCategory = (a: MyProduct, b: MyProduct) => {
        if (a.category.name < b.category.name) {
            return -1;
        }
        if (a.category.name > b.category.name) {
            return 1;
        }
        return 0;
    }


    const sortBy = (e: any) => {
        let value = e.currentTarget.value;
        console.log(value);
        if (value != "") {
            let _list = productList.slice().sort(value == "price" ? comparePrice : compareCategory)
            // console.table(_list)
            dispatch(addProductToList({
                productList: _list
            }))
        }
    }
    return (
        <div className='Home'>
            {/*<h3>{productList.length == 0 ? "List empty!" : "Product List"}</h3>*/}
            <div className="SearchForm" style={{display: "flex"}}>
                <input className="searchLabel" type={"text"} placeholder={"Search by title"} onChange={filterByTitle}
                       style={{float: "left"}}/>
                <Form.Select className="filterForm" style={{width: "200px", float: "right"}} onChange={sortBy}>
                    <option value={""}>Select sort method</option>
                    <option value={"price"}>Sort by Price</option>
                    <option value={"category"}>Sort by Category</option>
                </Form.Select>
            </div>
            <Row className='Products'>
                {products}
            </Row>
        </div>
    );
};

export default ProductList;