import React, { useEffect, useState } from 'react'
import { logo } from '../../assets'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { Drawer, } from 'antd';
import { HiBars3BottomRight } from "react-icons/hi2";
import Login from '../../pages/Login';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsStciky] = useState(false)
  const [show, setShow] = useState(false)

  const show1 = () => {
    setShow(true)
  }
  const hide = () => {
    setShow(false)
  }

  useEffect(() => {
    const handelscroll = () => {
      if (window.scrollY > 100) {
        setIsStciky(true)
      }
      else {
        setIsStciky(false)
      }
    }
    window.addEventListener('scroll', handelscroll)

    return () => {
      window.addEventListener('scroll', handelscroll)
    }
  })

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handelscroll = () => {
      if (window.scrollY > 70) {
        setIsStciky(true)
      }
      else {
        setIsStciky(false)
      }
    }
    window.addEventListener('scroll', handelscroll)

    return () => {
      window.addEventListener('scroll', handelscroll)
    }
  })

  return (
    <nav>
      {/* for navbar  */}
      {isSticky ? <div className='navbar2'>
        <img src={logo} width={50} alt="" />
        <div className='nav_texts' onClick={hide}>
          <li><Link className='li' to={'/'}>Bosh</Link></li>
          <li><Link className='li' to={'/films'}>Kinolar</Link></li>
          <li><Link className='li' to={'/anime'}>Animelar</Link></li>
          <li><Link className='li' to={'/news'}>Yangiliklar</Link></li>
        </div>
        {show ? <div className='pare'>
          <input type="search" placeholder='Search' className='inp' />
          <Login />
        </div> :
          <div className='pare'>
            <IoSearch size={25} color='blue' onClick={show1} style={{ background: 'white', borderRadius: '8px', width: '40px', height: '40px', padding: '10px' }} />
            <Login />
          </div>}
      </div> :
        <div className='navbar'>
          <img src={logo} width={50} alt="" />
          <div className='nav_texts' onClick={hide}>
            <li><Link className='li' to={'/'}>Bosh</Link></li>
            <li><Link className='li' to={'/films'}>Kinolar</Link></li>
            <li><Link className='li' to={'/anime'}>Animelar</Link></li>
            <li><Link className='li' to={'/news'}>Yangiliklar</Link></li>
          </div>
          {show ? <div className='pare'>
            <input type="search" placeholder='Search' className='inp' />
            <Login />
          </div> :
            <div className='pare'>
              <IoSearch size={25} color='blue' onClick={show1} style={{ background: 'white', borderRadius: '8px', width: '40px', height: '40px', padding: '10px' }} />
              <Login />
            </div>}
        </div>}


      {/* for mobile nav  */}
      {isSticky ? <div className='navbar3' >
        <img src={logo} width={50} alt="" onClick={hide} />
        {show ? <div className='pare'>
          <input type="search" placeholder='Search' className='inp' />
          <Login />
        </div> :
          <div className='pare'>
            <IoSearch size={25} color='blue' onClick={show1} style={{ background: 'white', borderRadius: '8px', width: '40px', height: '40px', padding: '10px' }} />
            <Login />
          </div>}
        <HiBars3BottomRight size={40} style={{ cursor: 'pointer', color: 'white' }} onClick={showDrawer} />
        <Drawer title="Navbar" onClose={onClose} open={open} className='drawer'>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '40px', listStyle: 'none' }}>
            <li><Link style={{ color: 'black', fontSize: '30px' }} to={'/'}>Bosh</Link></li>
            <li><Link className='li' style={{ color: 'black', fontSize: '30px' }} to={'/films'}>Kinolar</Link></li>
            <li><Link style={{ color: 'black', fontSize: '30px' }} to={'/anime'}>Animelar</Link></li>
            <li><Link style={{ color: 'black', fontSize: '30px' }} to={'/news'}>Yangiliklar</Link></li>
          </div>
        </Drawer>
      </div> :
        <div className='navbar1' >
          <img src={logo} width={50} alt="" onClick={hide} />
          {show ? <div className='pare'>
            <input type="search" placeholder='Search' className='inp' />
            <Login />
          </div> :
            <div className='pare'>
              <IoSearch size={25} color='blue' onClick={show1} style={{ background: 'white', borderRadius: '8px', width: '40px', height: '40px', padding: '10px' }} />
              <Login />
            </div>}
          <HiBars3BottomRight size={40} style={{ cursor: 'pointer', color: 'white' }} onClick={showDrawer} />
          <Drawer title="Navbar" onClose={onClose} open={open} className='drawer'>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '40px', listStyle: 'none' }}>
              <li><Link style={{ color: 'black', fontSize: '30px' }} to={'/'}>Bosh</Link></li>
              <li><Link style={{ color: 'black', fontSize: '30px' }} to={'/films'}>Kinolar</Link></li>
              <li><Link style={{ color: 'black', fontSize: '30px' }} to={'/anime'}>Animelar</Link></li>
              <li><Link style={{ color: 'black', fontSize: '30px' }} to={'/news'}>Yangiliklar</Link></li>
            </div>
          </Drawer>
        </div>}
    </nav>
  )
}
