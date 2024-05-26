import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/reducers/cartSlice';
import './Products.scss';

import Product1 from '../../assets/images/products/product-1.png'
import Product2 from '../../assets/images/products/product-2.png'

const products = [
    {   id: 3, 
        name: "Matcha Tank - I Survived", 
        price: 8,
        imageUrl: Product1,
    },
    {   id: 2, 
        name: "Peach Tank - Get Peachy ", 
        price: 8,
        imageUrl: Product2,
    },
    // { id: "2", name: "Healthy Product 2", price: 20 },
    // { id: "3", name: "Healthy Product 3", price: 30 },
];

const Products = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addItem({ ...product, quantity: 1 }));
    };

    return (
        <div className="products">
            <div className="container">
                <h2 className="products-title">Products</h2>
                <div className="products-list">
                    {products.map((product) => (
                        <div className="products-card" key={product.id}>
                            <div className="products-image-wrapper">
                                <img src={product.imageUrl} alt={product.name} className="products-image" />
                            </div>
                            <h2 className="products-name">{product.name}</h2>
                            <p className="products-price">${product.price}</p>
                            <button className="btn-add-cart" onClick={() => handleAddToCart(product)}>
                                Add to Cart
                            </button>
                        </div>
                     ))}
                </div>
                {/* <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <span>{product.name}</span>
                            <span>${product.price}</span>
                            <button onClick={() => handleAddToCart(product)}>
                                Add to Cart
                            </button>
                        </li>
                    ))}
                </ul> */}
            </div>
        </div>
    );
};

export default Products;
