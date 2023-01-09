import React, {useEffect, useState} from 'react';
import productService from "../services/products"
import './styles/products.scss'

interface ProductItem {
    id: number;
    title: string;
    images: string[];
    price: number;
    description: string;
}

const Product: React.FC = () => {
    const [products, setProducts] = useState<ProductItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await productService.getAll();
            setProducts(result.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>
                <center>List of products</center>
            </h1>
            <div className="collection">
                {products?.length &&
                    products.map((product) => (
                        <div key={Math.random() * 10000} className="product">
                            <img src={product.images[0]} width="200" alt={product.title} className="product__image"/>
                            <div className="product__name"><b>{product.title}</b></div>
                            <div className="product__price"><b>Price: </b>{product.price}</div>
                            <div><b>Description: </b>{product.description}</div>
                            <button className="product__atc">Add To Cart</button>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Product;
