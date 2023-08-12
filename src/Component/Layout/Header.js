import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='container m-auto'>
            <div className='container flex justify-between items-center py-2.5'>
                <div>
                    <img alt='logo' src='./Images/logo.png' />
                </div>
                <div className='flex w-[65%] justify-between'>
                    <Link to="/home">Home</Link>
                    <Link to="/aboutus">About Us</Link>
                    <Link to="/rules">Rules</Link>
                    <Link to="/programs">Programs</Link>
                    <Link to="/membership">Membership</Link>
                    <Link to="/testimonials">Testimonials</Link>
                    <Link to="/thedumproom">The dump room</Link>
                    <Link to="/shopingcart">Shoping cart</Link>
                </div>
                <div>
                    <button className='bg-[#80549B] px-[48px] py-[15px] text-[#fff] text-xl'>Log In</button>
                </div>
            </div>
        </div>
    )
}
