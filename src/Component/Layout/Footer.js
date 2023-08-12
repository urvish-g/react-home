import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#AB8ABF] mt-[100px] '>
      <div className='container flex justify-between py-12 m-auto'>
        <div>
          <img alt='logo' src='./Images/logo-h.png' />
        </div>
        <div className=''>
          <ul className='flex gap-3 flex-col'>
            <li className='text-white text-left'>Home</li>
            <li className='text-white text-left'>About Us</li>
            <li className='text-white text-left'>Rule</li>
            <li className='text-white text-left'>Programs</li>
          </ul>
        </div>
        <div>
          <ul className='flex gap-3 flex-col'>
            <li className='text-white text-left'>Membership</li>
            <li className='text-white text-left'>Testimonials</li>
            <li className='text-white text-left'>The Dump room</li>
            <li className='text-white text-left'>Shoping cart</li>
          </ul>
        </div>
        <div>
          <button className='border border-white px-10 py-3 text-white'>Contact Us</button>
        </div>

      </div>
    </div>
  )
}
