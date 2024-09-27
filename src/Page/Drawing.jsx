import React from 'react'
import back_img from '../accest/lightpaperfibers.png'
import From from '../Component/From'


const Drawing = () => {
  return (<>
  <div className='container-fluid' style={{ backgroundImage: `url(${back_img})` }}>
    <div className='pt-5'>
      <div className='Drawing_banner'></div>
    </div>
    <div className='container py-5'>
      <From/>
    </div>
  </div>

  </>)
}
export default Drawing