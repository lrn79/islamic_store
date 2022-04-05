import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    return (
        <nav className='main_nav'>
            <div className="mx-auto my-4 text-center">
                <Link className=' text-decoration-none mx-3 menubar' to="/">HOME</Link>
                <Link className='text-decoration-none mx-3 menubar' to="/review">REVIEWS</Link>
                <Link className='text-decoration-none mx-3 menubar' to="/dashbord">DASHBORD</Link>
                <Link className='text-decoration-none mx-3 menubar' to="/blog">BLOGS</Link>
            </div>

        </nav >
    );
};

export default Navbar;