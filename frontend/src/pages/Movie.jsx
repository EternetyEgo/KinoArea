import React from 'react'
import { castle, film } from '../assets'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { FaHeart } from 'react-icons/fa'
import { Input } from 'antd'

export default function Movie() {
    return (
        <div>
            <Navbar />

            <div className='movie'>
                <img src={film} alt="" />
                <div className='texts'>
                    <h4>film: name</h4>
                    <h4>film: age</h4>
                    <h4>film: country</h4>
                    <h4>film: actor</h4>
                    <h4>film: janr</h4>
                </div>
            </div>
            <div className='vid'>
                <img src={castle} alt="" />
            </div>
            <div className='parent'>
                {/* for coment  */}
                <div>
                    <h2>Comentariya</h2>
                    <div className='coments'>
                        <div className='coment'>
                            <h5>nickname</h5>
                            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing.</h3>
                            <FaHeart className='star' />
                        </div>
                        <div className='coment'>
                            <h5>nickname</h5>
                            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing.</h3>
                            <FaHeart className='star' />
                        </div>
                        <div className='coment'>
                            <h5>nickname</h5>
                            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing.</h3>
                            <FaHeart className='star' />
                        </div>
                        <div className='coment'>
                            <h5>nickname</h5>
                            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing.</h3>
                            <FaHeart className='star' />
                        </div>
                        <div className='coment'>
                            <h5>nickname</h5>
                            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing.</h3>
                            <FaHeart className='star' />
                        </div>
                        <div className='coment'>
                            <h5>nickname</h5>
                            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing.</h3>
                            <FaHeart className='star' />
                        </div>
                        <div className='coment'>
                            <h5>nickname</h5>
                            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing.</h3>
                            <FaHeart className='star' />
                        </div>
                        <div className="inp_parent">
                            <Input placeholder='Enter comment' />

                        </div>
                    </div>
                </div>

                {/* about movie  */}
                <div className='about'>
                    <h3>About Movie</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae harum sit minus vitae, quod tenetur odio numquam, hic asperiores totam deleniti amet officiis cumque odit voluptate, explicabo iusto saepe temporibus! Ullam neque ipsa unde minima illo sit expedita. Nulla, quod?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae harum sit minus vitae, quod tenetur odio numquam, hic asperiores totam deleniti amet officiis cumque odit voluptate, explicabo iusto saepe temporibus! Ullam neque ipsa unde minima illo sit expedita. Nulla, quod?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae harum sit minus vitae, quod tenetur odio numquam, hic asperiores totam deleniti amet officiis cumque odit voluptate, explicabo iusto saepe temporibus! Ullam neque ipsa unde minima illo sit expedita. Nulla, quod?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae harum sit minus vitae, quod tenetur odio numquam, hic asperiores totam deleniti amet officiis cumque odit voluptate, explicabo iusto saepe temporibus! Ullam neque ipsa unde minima illo sit expedita. Nulla, quod?</p>
                </div>
            </div>

            <Footer />
        </div>
    )
}
