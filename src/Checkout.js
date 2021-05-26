import { Checkbox } from '@material-ui/core';
import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';


export const Checkout = () => {

    const[{basket}, dispatch]= useStateValue();

    return (
        <div className="checkout">
            <div className="check0ut_left">
                <img className="checkout_ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""></img>

                <div>
                    <h2 className="checkout_title">Your shopping basket</h2>
                     
                     {basket.map(item=>(
                         <CheckoutProduct
                         id={item.id}
                         title={item.title}
                         image={item.image}
                         price={item.price}
                         rating={item.rating}/>
                          
                     ))}
                    {/* checkOutProducts*/}
               
                </div>
            </div>

            <div className="checkout_right">
              <Subtotal/>
            </div>
            
        </div>
    )
}

export default Checkbox;
