import React from 'react'
import title1 from '../accest/title01.png';
import lightpaperfibers from '../accest/lightpaperfibers.png';
import dog1 from '../accest/dog05.png'
import cat1 from '../accest/07.png'
import dog2 from '../accest/dog06.png'
import dog3 from '../accest/Michael.png'



const Design = () => {
  return (<>
   <div className='container-fluid' style={{ backgroundImage: `url(${lightpaperfibers})` }}>
      <div className='container'>
          <div className='py-3 w-100 text-center'>
            <img src={title1} alt="" className='title_img'/>
          </div>
          <div className='row'>
            <div className='col-12 col-md-3 text-center py-md-5 text-md-start'>
               <h4 className='mb-3 mb-md-4 Kalam_txt'>Designer</h4>
              <ul className='d-flex justify-content-center m-0 p-0 flex-md-column text-md-start Kalam_txt'>
                <li className='me-3 mb-md-3' style={{ listStyle: 'none' }}>All</li>
                <li className='me-3 mb-md-3' style={{ listStyle: 'none' }}>Meili</li>
                <li className='me-3 mb-md-3' style={{ listStyle: 'none' }}>Zoe</li>
                <li className='me-3 mb-md-3' style={{ listStyle: 'none' }}>Michael</li>
                <li className='me-3 mb-md-3' style={{ listStyle: 'none' }}>Birdy</li>
              </ul>
            </div>
            <div className='col-12 col-md-9 py-5 '>
               <div className='row g-3 justify-context-center text-center'>
                  <div className='col-6 col-md-4'>
                    <img src={dog1} alt="" className='design_img'/>
                  </div>
                  <div className='col-6 col-md-4'>
                    <img src={cat1} alt="" className='design_img'/>
                  </div>
                  <div className='col-6 col-md-4'>
                    <img src={dog2} alt="" className='design_img'/>
                  </div>
                  <div className='col-6 col-md-4'>
                    <img src={dog3} alt="" className='design_img'/>
                  </div>
               </div>
            </div>
          </div>
          
      </div>
   </div>
  </>)
}

export default Design
