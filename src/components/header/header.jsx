import React from 'react';
import profile from '../../../assets/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4'>
            <h1 className='text-4xl text-red-600 font-bold'>React Know<span className='text-lime-600'>ledge</span> Cafe</h1>
            <img src={profile} alt='profile'/>

        </div>
    );
};

export default Header;