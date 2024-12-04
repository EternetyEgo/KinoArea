import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Typography } from 'antd'
import './Pages.css'

export default function NotFound() {
    return (
        <div>
            <Navbar />
            
            <div className='notfound'>
                <Typography className='four'>404</Typography>
                <Typography className='page'>Page Not Found</Typography>
                <button>Bosh menyuga qaytish</button>
            </div>

            <Footer />
        </div>
    )
}
