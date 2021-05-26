import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

export const Product = ({id,title,image,price,rating}) => {

    const [{ basket },dispatch]=useStateValue();

    console.log("items in basket >>>>", basket);

    const addToBasket=()=>{
        //dispatch item to datalayer
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{

                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            }
        })


        
    }
    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>

                </p>
                <div className='product_rating'>

                    {Array(rating).fill().map((_,i)=>(
                        <p>⭐</p>
                    ))}
                   
                </div>

            </div>
            <img src={image} alt=""></img>

            <button className='button_hover' onClick={addToBasket}>Add to basket</button>

        </div>
    )
}

export default Product;
