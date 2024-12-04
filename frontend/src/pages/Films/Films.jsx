import React from 'react'
import { film } from '../../assets'
import { HiStar } from 'react-icons/hi2'
import './Films.css'
import { Input, Typography, Button } from 'antd'
import { IoSearch } from 'react-icons/io5'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export default function Films() {
    return (
        <div className='films_films'>
            <Navbar />

                <Typography className='text'>Kinolar</Typography>

            <center>
                <div className="inp_pare">
                    <Input className='inp' variant='borderless' placeholder='Kinolar ichidan qidirish' />
                    <IoSearch size={25} className='icon' />
                </div>
            </center>

            <div className="films">
                {/* 1 */}
                <div className='film'>
                    <div className="card">
                        <img src={film} alt="" />
                        <Button className='btn'>Korish</Button>
                        <div className='texts'>
                            <h4>Джентльмены</h4>
                            <h5>Боевик, комедия, криминал</h5>
                            <div className='star'><HiStar /><HiStar /><HiStar /><HiStar /><HiStar /></div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={film} alt="" />
                        <Button className='btn'>Korish</Button>
                        <div className='texts'>
                            <h4>Джентльмены</h4>
                            <h5>Боевик, комедия, криминал</h5>
                            <div className='star'><HiStar /><HiStar /><HiStar /><HiStar /><HiStar /></div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={film} alt="" />
                        <Button className='btn'>Korish</Button>
                        <div className='texts'>
                            <h4>Джентльмены</h4>
                            <h5>Боевик, комедия, криминал</h5>
                            <div className='star'><HiStar /><HiStar /><HiStar /><HiStar /><HiStar /></div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={film} alt="" />
                        <Button className='btn'>Korish</Button>
                        <div className='texts'>
                            <h4>Джентльмены</h4>
                            <h5>Боевик, комедия, криминал</h5>
                            <div className='star'><HiStar /><HiStar /><HiStar /><HiStar /><HiStar /></div>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className='film'>
                    <div className="card">
                        <img src={film} alt="" />
                        <Button className='btn'>Korish</Button>
                        <div className='texts'>
                            <h4>Джентльмены</h4>
                            <h5>Боевик, комедия, криминал</h5>
                            <div className='star'><HiStar /><HiStar /><HiStar /><HiStar /><HiStar /></div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={film} alt="" />
                        <Button className='btn'>Korish</Button>
                        <div className='texts'>
                            <h4>Джентльмены</h4>
                            <h5>Боевик, комедия, криминал</h5>
                            <div className='star'><HiStar /><HiStar /><HiStar /><HiStar /><HiStar /></div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={film} alt="" />
                        <Button className='btn'>Korish</Button>
                        <div className='texts'>
                            <h4>Джентльмены</h4>
                            <h5>Боевик, комедия, криминал</h5>
                            <div className='star'><HiStar /><HiStar /><HiStar /><HiStar /><HiStar /></div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={film} alt="" />
                        <Button className='btn'>Korish</Button>
                        <div className='texts'>
                            <h4>Джентльмены</h4>
                            <h5>Боевик, комедия, криминал</h5>
                            <div className='star'><HiStar /><HiStar /><HiStar /><HiStar /><HiStar /></div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
