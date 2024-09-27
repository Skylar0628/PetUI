import React from 'react'
import link01 from '../accest/link01.png'
import link02 from '../accest/link02.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (<>
    <div className='container-fluid ' style={{ borderTop: '3px solid #F9C745' }}>
     <div className='row d-flex justify-content-center' style={{ backgroundColor:'#fff', padding:' 4rem 0' }}>
       <div className='col-12 col-md-4 text-center mb-5 mb-md-0 d-md-flex '>
       <div className='mb-3 me-md-3'>
          <img src={link01} alt="Group_img" className='w-100' style={{ maxWidth:'160px' }}/>
        </div>
        <div className='text-md-start'>
          <h5 className='mb-2'>加入奴才團隊</h5>
          <p className='mb-2'>我也會畫畫，希望能盡一份心力！</p>
          <button className='footer_btn'>
           <Link to={'/drswing'} style={{color:'#3A3A3A'}}>聯絡我們</Link>
          </button>
        </div>
       </div>
       <div className='col-12 col-md-4 text-center  mb-md-0 d-md-flex'>
       <div className='mb-3 me-md-3'>
          <img src={link02} alt="Group_img" className='w-100' style={{ maxWidth:'160px' }}/>
        </div>
        <div className='text-md-start'>
          <h5 className='mb-2'>加入奴才團隊</h5>
          <p className='mb-2'>我也會畫畫，希望能盡一份心力！</p>
          <button className='footer_btn'>
            <Link to={'/adoption'} style={{color:'#3A3A3A'}}>領養專區</Link>
            </button>
        </div>
       </div>
    </div>
    <div className='row bg-dark text-center'>
     <p className='mb-0 py-4' style={{ color:'#FFFFFF' }}>
       Copyright © 2024 撿到寶.All rights reserved.
     </p>
    </div>
    </div>
  </>)
}

export default Footer
