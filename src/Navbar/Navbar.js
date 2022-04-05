import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='link'>
            <Link to= "/Home">Home</Link>
           
            <Link to= "/Reviews"> Reviews </Link>
            <Link to= "/Dashboard"> Dashboard </Link>
            <Link to= "/Blogs"> Blogs </Link>
            <Link to= "/About"> About </Link>
        </nav>
    );
};

export default Navbar;