import React from 'react';
import CustomLink from '../customLink/CustomLink';

const Header = () => {
    return (
        <div className='container d-flex justify-content-center align-items-center bg-gray'>
            <h1>Curious</h1>

            <div className='d-flex mx-auto'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/contact'>Contact</CustomLink>
                <CustomLink to='/data'>Data</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </div>

        </div>
    );
};

export default Header;