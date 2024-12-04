import React from 'react'
import './Hero.scss'
import Typography from 'antd/es/typography/Typography'
import { film } from '../../assets'
import { HiStar } from 'react-icons/hi2'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom'
import { Button } from 'antd'

export default function Hero() {
    return (
        <div className='hero'>
            <div className="title">
                <Typography className='text'>Kinolar</Typography>
            </div>

            {/* for films  */}
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

            <div className="title">
                <Typography className='text'>Anime</Typography>
            </div>
            <div className="films">
                {/* 1 */}
                <div className='film'>
                    <div className="card">
                        <img src={film} alt="" />
                        <Button className='btn'>Animelar</Button>
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

            <Link to={'/films'} className='link'>
                <div className='btn_parent'>
                    <button class="button">
                        <Typography className='textk'>Yana Ko'rish</Typography>
                        <div class="arrow"><IoIosArrowForward /></div>
                    </button>
                </div>
            </Link>
        </div>
    )
}
