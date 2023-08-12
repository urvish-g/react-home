import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {

    return (
        <div className='bg-[#FDEFFF]'>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}
