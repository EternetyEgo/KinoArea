import React from 'react'
import './News.scss'
import { castle } from '../../assets'
import { Button, Input, Typography } from 'antd'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { IoSearch } from 'react-icons/io5'
import { BiLike } from "react-icons/bi";
import { FaEye } from "react-icons/fa";

export default function News() {
  return (
    <div className='news_film'>
      <Navbar />

      <div className="title">
        <Typography className='text'>Yangliklar</Typography>
      </div>
      <center>
        <div className="inp_pare">
          <Input className='inp' variant='borderless' placeholder='Search in News' />
          <IoSearch size={25} className='icon' />
        </div>
      </center>
      <div className="films">
        {/* 1 */}
        <div className='film'>
          <div className="card">
            <img src={castle} alt="" />
            <div className='card_child'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio impedit quae, rem perspiciatis corporis  laborum?</p>
              <div className='like_parent'>
                <BiLike size={30} className='icon' />
                <div className='eye_parent'>
                  <FaEye size={30} className='icon' />
                  <Typography className='eye_text'>(120)</Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={castle} alt="" />
            <div className='card_child'>
              <p>Lorem ipsum dolor sit, amet consectetur  adipisicing elit. Optio impedit quae, rem perspiciatis corporis laborum?</p>
              <div className='like_parent'>
                <BiLike size={30} className='icon' />
                <div className='eye_parent'>
                  <FaEye size={30} className='icon' />
                  <Typography className='eye_text'>(120)</Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={castle} alt="" />
            <div className='card_child'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio impedit quae, rem perspiciatis corporis laborum?</p>
              <div className='like_parent'>
                <BiLike size={30} className='icon' />
                <div className='eye_parent'>
                  <FaEye size={30} className='icon' />
                  <Typography className='eye_text'>(120)</Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={castle} alt="" />
            <div className='card_child'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio impedit quae, rem perspiciatis corporis laborum?</p>
              <div className='like_parent'>
                <BiLike size={30} className='icon' />
                <div className='eye_parent'>
                  <FaEye size={30} className='icon' />
                  <Typography className='eye_text'>(120)</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className='film'>
          <div className="card">
            <img src={castle} alt="" />
            <div className='card_child'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio impedit quae, rem perspiciatis corporis laborum?</p>
              <div className='like_parent'>
                <BiLike size={30} className='icon' />
                <div className='eye_parent'>
                  <FaEye size={30} className='icon' />
                  <Typography className='eye_text'>(120)</Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={castle} alt="" />
            <div className='card_child'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio impedit quae, rem perspiciatis corporis laborum?</p>
              <div className='like_parent'>
                <BiLike size={30} className='icon' />
                <div className='eye_parent'>
                  <FaEye size={30} className='icon' />
                  <Typography className='eye_text'>(120)</Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={castle} alt="" />
            <div className='card_child'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio impedit quae, rem perspiciatis corporis laborum?</p>
              <div className='like_parent'>
                <BiLike size={30} className='icon' />
                <div className='eye_parent'>
                  <FaEye size={30} className='icon' />
                  <Typography className='eye_text'>(120)</Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={castle} alt="" />
            <div className='card_child'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio impedit quae, rem perspiciatis corporis laborum?</p>
              <div className='like_parent'>
                <BiLike size={30} className='icon' />
                <div className='eye_parent'>
                  <FaEye size={30} className='icon' />
                  <Typography className='eye_text'>(120)</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className='film'>
          <div className="card">
            <img src={castle} alt="" />
            <div className='card_child'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio impedit quae, rem perspiciatis corporis laborum?</p>
              <div className='like_parent'>
                <BiLike size={30} className='icon' />
                <div className='eye_parent'>
                  <FaEye size={30} className='icon' />
                  <Typography className='eye_text'>(120)</Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={castle} alt="" />
            <div className='card_child'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio impedit quae, rem perspiciatis corporis laborum?</p>
              <div className='like_parent'>
                <BiLike size={30} className='icon' />
                <div className='eye_parent'>
                  <FaEye size={30} className='icon' />
                  <Typography className='eye_text'>(120)</Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={castle} alt="" />
            <div className='card_child'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio impedit quae, rem perspiciatis corporis laborum?</p>
              <div className='like_parent'>
                <BiLike size={30} className='icon' />
                <div className='eye_parent'>
                  <FaEye size={30} className='icon' />
                  <Typography className='eye_text'>(120)</Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={castle} alt="" />
            <div className='card_child'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio impedit quae, rem perspiciatis corporis laborum?</p>
              <div className='like_parent'>
                <BiLike size={30} className='icon' />
                <div className='eye_parent'>
                  <FaEye size={30} className='icon' />
                  <Typography className='eye_text'>(120)</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className='film'>
          <div className="card">
            <img src={castle} alt="" />
            <div className='card_child'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio impedit quae, rem perspiciatis corporis laborum?</p>
              <div className='like_parent'>
                <BiLike size={30} className='icon' />
                <div className='eye_parent'>
                  <FaEye size={30} className='icon' />
                  <Typography className='eye_text'>(120)</Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={castle} alt="" />
            <div className='card_child'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio impedit quae, rem perspiciatis corporis laborum?</p>
              <div className='like_parent'>
                <BiLike size={30} className='icon' />
                <div className='eye_parent'>
                  <FaEye size={30} className='icon' />
                  <Typography className='eye_text'>(120)</Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={castle} alt="" />
            <div className='card_child'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio impedit quae, rem perspiciatis corporis laborum?</p>
              <div className='like_parent'>
                <BiLike size={30} className='icon' />
                <div className='eye_parent'>
                  <FaEye size={30} className='icon' />
                  <Typography className='eye_text'>(120)</Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={castle} alt="" />
            <div className='card_child'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio impedit quae, rem perspiciatis corporis laborum?</p>
              <div className='like_parent'>
                <Button>Yana</Button>
                <BiLike size={30} className='icon' />
                <div className='eye_parent'>
                  <FaEye size={30} className='icon' />
                  <Typography className='eye_text'>(120)</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
