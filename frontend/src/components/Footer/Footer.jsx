import React from 'react'
import './Footer.scss'
import { logo } from '../../assets'
import { FaInstagram, FaFacebook,  FaTelegramPlane, FaYoutube, FaLinkedin } from "react-icons/fa";
import { Tooltip } from 'antd';


export default function Footer() {
    return (
        <div className='footer'>
            <Tooltip title='Hydra_Coder logo'>
                <img  className='logo_des' width={50} src={logo} alt="" />
            </Tooltip>
            <div className='logos'>
                <Tooltip title='Instagram' color='red'>
                    <FaInstagram className='logo' style={{ background: 'white', color: 'black', width: '40px', padding: '5px', height: '40px', borderRadius: '50%' }} />
                </Tooltip>
                <Tooltip title='Facebook' color='red'>
                    <FaFacebook className='logo' style={{ background: 'white', color: 'black', width: '40px', padding: '5px', height: '40px', borderRadius: '50%' }} />
                </Tooltip>
                <Tooltip title='Telegram' color='red'>
                    <FaTelegramPlane className='logo' style={{ background: 'white', color: 'black', width: '40px', padding: '5px', height: '40px', borderRadius: '50%' }} />
                </Tooltip>
                <Tooltip title='You Tube' color='red'>
                    <FaYoutube className='logo' style={{ background: 'white', color: 'black', width: '40px', padding: '5px', height: '40px', borderRadius: '50%' }} />
                </Tooltip>
                <Tooltip title='Linkedin' color='red'>
                    <FaLinkedin className='logo' style={{ background: 'white', color: 'black', width: '40px', padding: '5px', height: '40px', borderRadius: '50%' }} />
                </Tooltip>
            </div>
        </div>
    )
}
