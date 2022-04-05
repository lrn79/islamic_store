import React from 'react';
import UserData from '../../Hooks/UserData';
import ReviewCart from '../Reviews/ReviewCart/ReviewCart';
import './home.css'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [reviews] = UserData();

    const slicedReviews = reviews.slice(0, 3)
    return (
        <div className='d-flex align-items-center m-5 row  '>
            <div className='col col-lg-5'>
                <h1 className='h1 fw-bolder'>Your Next Book should be <br /> World's best <span className='txt_color'>peaceful and scientific</span> BOOK </h1>
                <button className='mt-3 btn_color' onClick={() => navigate('/review')}>SEE REVIEWS</button>
            </div>
            <div className='col col-7' >
                <img className='img-flued border border-success rounded-pill shadow-lg p-3 mb-5 bg-white  rounded' src="https://img.freepik.com/free-photo/koran-holy-book-muslims-public-item-all-muslims-table_44074-490.jpg?w=740" alt="" />
            </div>

            <section>
                <h1 className='text-center mt-4 fw-bolder text-dark review_text'>Customers Reviews : {slicedReviews.length}</h1>
                <div className='m-0 grid_cart '>
                    {slicedReviews.map((reviewer) => (
                        <ReviewCart key={reviews.id} reviews={reviewer}></ReviewCart>
                    ))}
                </div>
                <button className='btn_setup btn_color' onClick={() => navigate('/review')}>SEE ALL REVIEWS</button>
            </section>

        </div>
    );
};

export default Home;