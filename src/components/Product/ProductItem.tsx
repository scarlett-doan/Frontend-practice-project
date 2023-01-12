import { Col } from "react-bootstrap"
import { Link } from 'react-router-dom'

export default function ProductItem(props: any) {
    return (
        <Col md={3} className="ProductItem">
            <div id={`p_${props.p['id']}`}>
                <div>
                    <img className='p-img' src={props.p['images'][0]} alt="" />
                </div>
                <div className="detail">
                    <div className="p-name">
                        <Link to={`/product/${props.p['id']}`}>{props.p['title']}</Link>
                    </div>
                    <div className="p-price">${props.p['price']}</div>
                </div>
            </div >
        </Col>
    )
}

