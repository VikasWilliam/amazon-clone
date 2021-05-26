/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Home.css';
import Product from './Product';


export const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
                <img
                    className='Home_image'
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"

                    alt="" 
                />

                <div className='home_row'>
                    <Product 
                    id="23445930"
                    title='The Lean startup'
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating={5}
                    />
                    <Product
                    id="23445931"
                    title='Kenwood mixer Grinder and blender, 5L glass Bowl'
                    price={98.99}
                    image="https://m.media-amazon.com/images/I/71+cDVETcIL._AC_UY218_.jpg"
                    rating={5}
                    />
                    

                </div>

                <div className='home_row'>
                   
                <Product
                    id="4903850"
                    title="MI Fit band LC49RG90SSUEXN wrist band "
                    price={199.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    rating={5}
                    />
                    <Product
                    id="23445931"
                    title='Amaxon Echo (3rd Gneration) | 
                    Smart Speaker with Alexa, charcoal fabric'
                    price={98.99}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    rating={5}
                    />
                    <Product
                    id="23445931"
                    title='New Apple Pro 12.9 inch ipad'
                    price={788.79}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    rating={5}
                    />
                    

                </div>

                <div className='home_row'>
                <Product
                    id="23445931"
                    title="Samsung LC49RG90SSUEXN 49' curved | 
                    LED Monitor"
                    price={1094.98}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    rating={5}
                    />

                </div>
            </div>
        </div>
    )
}

export default Home;
