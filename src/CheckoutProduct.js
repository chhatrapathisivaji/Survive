import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'

function CheckoutProduct({id,image,title,price,rating}) {
    const [{ basket },dispatch]=useStateValue();

    const removeFromBasket =()=>
   {
       //remove item from basket
       dispatch({
           type: 'REMOVE_FROM_BASKET',
           id: id,
        })
   }
    return (
        <div className="checkoutProduct">
            <img 
            src={image}
            alt="" 
            className="checkoutProduct__image" 
            />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_,i)=>(
                        <p>⭐</p>
                    ))}
                    
                </div>
                <br />
                
                <button className="checkoutProduct__Booking">
                    BOOK NOW
                </button>
                
                <button  className="checkoutProduct__Button"onClick={removeFromBasket}>
                    Remove from Cart
                </button>
                
            </div>
        </div>
    )
}

export default CheckoutProduct
