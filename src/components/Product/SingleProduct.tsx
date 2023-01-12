import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'

export default function SingleProduct(props: any) {
    return (props.p != 0) ? (
        <Row className="SingleProduct">
            <Col md={7}><img src={props.p['images'][0]} alt=""/></Col>
            <Col md={5}>
                <div><h2>{props.p['title']}</h2></div>
                <div><p>{props.p['description']}</p></div>
                <div className='p-price'>
                    Price: <span>${props.p['price']}</span>
                </div>
                <div className='p-cart'>
                    <Button className="add-to-cart" onClick={props.handleClick}>Add to cart</Button>
                </div>
            </Col>
        </Row>
    ) : <></>
}
