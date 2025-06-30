import React from 'react'
import Navbar from '../../components/Navbar'
import "easymde/dist/easymde.min.css"

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <main className='font-mono'>
            <Navbar />
            {children}
        </main>
    )
}

export default Layout