import React from 'react';
import UserData from '../../Hooks/UserData';
import ReviewCart from './ReviewCart/ReviewCart';
import './Reviwes.css'

const Reviews = () => {
    const [reviews] = UserData()
    return (
        <div>
            <h1 className='text-center mt-4 fw-bolder text-dark review_text'> TOTAL REVIEWS : {reviews.length}</h1>
            <div className='grid_cart'>
                {reviews.map((reviewer) => (
                    <ReviewCart key={reviews.id} reviews={reviewer}></ReviewCart>
                ))}
            </div>
        </div>
    );
};

export default Reviews;