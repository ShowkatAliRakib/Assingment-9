import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='link'>
            <Link to= "/Home">Home</Link>
           
            <Link to= "/Reviews"> Reviews </Link>
            <Link to= "/Dashboard"> Dashboard </Link>
            <Link to= "/Blogs"> Blogs </Link>
            <Link to= "/About"> About </Link>
        </div>
    );
};

export default Navbar;