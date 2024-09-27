import React from 'react'
import step01 from '../accest/step01.png'
import step02 from '../accest/step02.png'
import step03 from '../accest/step03.png'
import step04 from '../accest/step04.png'
import bannerServer from '../accest/banner_service-sm.png'
import lightpaperfibers from '../accest/lightpaperfibers.png'


const Server = () => {
  return (<>
    <div className="container-fluid " style={{ backgroundImage: `url(${lightpaperfibers})` }}>
       <div className='text-center py-5 banner-container'>
         <img src={bannerServer} alt="" className='w-100 Server_banner'/>
       </div>
       <div className='container pb-5'>
         <div className='row g-3 w-100'>
            <div className='col-12 col-md-3 d-flex align-items-center justify-content-center flex-md-column'>
              <div>
                <img src={step01} alt="" className='server_img me-3'/>
              </div>
              <div>
                 <h6 className='server-title'>STEP1</h6>
                 <h6 className='server-title2'>購買似顏繪服務</h6>
                 <p className='server-txt'>填寫購買表單 <br /> 並完成轉帳付款</p>
              </div>
            </div>
            <div className='col-12 col-md-3 d-flex align-items-center justify-content-center flex-md-column'>
              <div>
                <img src={step02} alt="" className='server_img me-3'/>
              </div>
              <div>
                 <h6 className='server-title'>STEP2</h6>
                 <h6 className='server-title2'>購買似顏繪服務</h6>
                 <p className='server-txt'>填寫購買表單 <br /> 並完成轉帳付款</p>
              </div>
            </div>
            <div className='col-12 col-md-3 d-flex align-items-center justify-content-center flex-md-column'>
              <div>
                <img src={step03} alt="" className='server_img me-3'/>
              </div>
              <div>
                 <h6 className='server-title'>step03</h6>
                 <h6 className='server-title2'>購買似顏繪服務</h6>
                 <p className='server-txt'>填寫購買表單 <br /> 並完成轉帳付款</p>
              </div>
            </div>
            <div className='col-12 col-md-3 d-flex align-items-center justify-content-center flex-md-column'>
              <div>
                <img src={step04} alt="" className='server_img me-3'/>
              </div>
              <div>
                 <h6 className='server-title'>step04</h6>
                 <h6 className='server-title2'>購買似顏繪服務</h6>
                 <p className='server-txt'>填寫購買表單 <br /> 並完成轉帳付款</p>
              </div>
            </div>
         </div>
       </div>

    </div>
  </>)
}

export default Server
