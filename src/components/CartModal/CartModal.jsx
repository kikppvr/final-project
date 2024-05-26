// import React, { useEffect, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { removeItem, updateItemQuantity} from '../../redux/reducers/cartSlice';
// import './CartModal.scss';

// const CartModal = ({ onClose, children }) => {
//     const modalRef = useRef(null);

//     useEffect(() => {
//         const loadBootstrapModal = async () => {
//             const modalElement = modalRef.current;
//                 if (modalElement) {
//                     console.log('Modal element found:', modalElement);
//                     if (window.bootstrap && window.bootstrap.Modal) {
            
//                     // แสดงโมดอลทันทีหลังจากที่คอมโพเนนต์ถูกเมาท์
//                     const bootstrapModal = new window.bootstrap.Modal(modalElement);
//                     bootstrapModal.show();

//                     // ฟังชั่นสำหรับจัดการการปิดโมดอล
//                     const handleHide = () => {
//                         bootstrapModal.hide();
//                         onClose();
//                     };

//                     modalElement.addEventListener('hidden.bs.modal', handleHide);

//                     // ล้างการตั้งค่าเมื่อคอมโพเนนต์ถูกยกเลิก
//                     return () => {
//                         modalElement.removeEventListener('hidden.bs.modal', handleHide);
//                     };
//                 } else {
//                     console.error('Bootstrap Modal is not available in window.bootstrap');
//                 }
//             }
//         }

//         loadBootstrapModal();
//     }, [onClose]);

//     const dispatch = useDispatch();
//     const items = useSelector(state => state.cart.items);

//     const handleRemoveItem = (id) => {
//         dispatch(removeItem({ id }));
//     };

//     const handleQuantityChange = (id, quantity) => {
//         dispatch(updateItemQuantity({ id, quantity }));
//     };


//     return (
//         <div className="modal modal-cart fade" tabIndex="-1" ref={modalRef}>
//             <div className="modal-dialog modal-dialog-centered modal-lg">
//                 <div className="modal-content shadow">
//                     <span className="close" onClick={onClose}>&times;</span>

//                     <div className="modal-body">
//                         <h2 className="modal-cart-title">Shopping Cart</h2>
//                         <ul className="modal-cart-title">
//                             {items.map(item => (
//                                 <li key={item.id} className="modal-cart-item">
//                                     <div className="modal-cart-image">
//                                         <img src={item.imageUrl} alt={item.imageUrl} />
//                                     </div>
//                                     <div className="modal-cart-body">
//                                         <div className="modal-cart-name">{item.name}</div>
//                                         <div className="modal-cart-price">${item.price}</div>      
//                                     </div>
//                                     <div className="modal-cart-count">
//                                         <input
//                                             type="number"
//                                             value={item.quantity}
//                                             onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
//                                             min="1"
//                                         />
//                                     </div>
                                
//                                     <button onClick={() => handleRemoveItem(item.id)}><i class="fa-solid fa-trash-can"></i></button>
//                                 </li>
//                             ))}
//                         </ul>
//                         <div className="total">
//                             Total: ${items.reduce((total, item) => total + item.price * item.quantity, 0)}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>    
//     );


// };

// export default CartModal;


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { removeItem, updateItemQuantity } from './cartSlice';
import { removeItem, updateItemQuantity} from '../../redux/reducers/cartSlice';
import './CartModal.scss';

const CartModal = ({ onClose }) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);

    const handleRemoveItem = (id) => {
        dispatch(removeItem({ id }));
    };

    const handleQuantityChange = (id, quantity) => {
        dispatch(updateItemQuantity({ id, quantity }));
    };

    return (
        <div className="modal-cart">
            <div className="modal-cart-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2 className="modal-cart-title">Shopping Cart</h2>
                <ul className="modal-cart-title">
                    {items.map(item => (
                        <li key={item.id} className="modal-cart-item">
                            <div className="modal-cart-image">
                                <img src={item.imageUrl} alt={item.imageUrl} />
                            </div>
                            <div className="modal-cart-body">
                                <div className="modal-cart-name">{item.name}</div>
                                <div className="modal-cart-price">${item.price}</div>      
                            </div>
                            <div className="modal-cart-count">
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                    min="1"
                                />
                            </div>
                           
                            <button className="btn-remove-cart" onClick={() => handleRemoveItem(item.id)}><i class="fa-solid fa-trash-can"></i></button>
                        </li>
                    ))}
                </ul>
                <div className="total">
                    Total: <span className="font-bold">${items.reduce((total, item) => total + item.price * item.quantity, 0)}</span>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
