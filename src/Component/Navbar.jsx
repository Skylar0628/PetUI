import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../accest/logo.png';

const Navbar = () => {
  return (<>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to={'/'}>
               <img src={logo} alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end align-items-center">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={'/'}>首頁</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/server'}>服務介紹</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/design'}>設計作品</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/adoption'}>領養專區</Link>
                </li>
                <button className="nav-btn" type="submit">
                  <Link className="nav-link" to={'/drswing'}>毛孩似顏繪</Link>
                </button>
            </ul>
            </div>
        </div>
    </nav>
  </>)
}

export default Navbar
