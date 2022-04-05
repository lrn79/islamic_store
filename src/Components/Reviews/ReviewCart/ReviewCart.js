import React from 'react';
import './revierCart.css'

const ReviewCart = (props) => {
    const { name, message, img, rate } = props.reviews;
    console.log(props)
    return (
        <div className='Review_cart m-5'>
            <div className=''>
                <div className='mx-auto d-flex align-items-center justify-content-between'>
                    <img className='mx-auto reviews_img ' src={img} alt="" srcset="" />
                    <h1 className='m-3'>{name}</h1>
                </div>
                <h4 className='mt-2'>"{message}"</h4>
                <h2 className='mt-4 fw-bolder'>RATINGS: {rate}</h2>

            </div>
        </div>
    );
};

export default ReviewCart;