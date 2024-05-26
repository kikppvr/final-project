import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CartModal from '../CartModal/CartModal';
import './CartIcon.scss';

const CartIcon = () => {
    const [showModal, setShowModal] = useState(false);
    const items = useSelector(state => state.cart.items);
    const itemCount = items.reduce((total, item) => total + item.quantity, 0);

    useEffect(() => {
        // setShowModal(true)
        // setShowLoadingModal(true)
        // setShowAlertModal(true)
        // setShowSuccessModal(true)
    })

    const handleToggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="cart-icon">
            <span className="cart-count">{itemCount}</span>
            <button onClick={handleToggleModal}>
                <i className="fa fa-shopping-cart"></i>
            </button>
            {showModal && <CartModal onClose={handleToggleModal} />}
        </div>
    );
};

export default CartIcon;
