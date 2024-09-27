import React from 'react'
import home01 from '../accest/home01.png'
import dog05 from '../accest/dog05.png'
import dog07 from '../accest/dog07.png'
import dog06 from '../accest/dog06.png'
import Michael from '../accest/Michael.png'
import title01 from '../accest/title01.png'
import title02 from '../accest/title02.png'
import btn from '../accest/btn.png'

import lightpaperfibers from '../accest/lightpaperfibers.png'
import Card from '../Component/Card'
import { Link } from 'react-router-dom'


const Home = () => {
  return (<>
    <div className='container-fluid banner'></div>
    <div className='container-fluid' style={{backgroundImage: `url(${lightpaperfibers})`}}> 
    <div className='container'>
    {/* service */}
      <div className='row py-3 g-5 d-flex justify-content-center align-items-center mb-5'>
        <div className='col-12 col-md-5 order-md-2'>
        <p className='text-center mb-0 server-center-txt' style={{ fontSize:'24px' }}>Service</p>
        <p className='text-center d-md-none' style={{ fontSize:'32px', color:'#3A3A3A' }}>
            您出錢 我出力 <br/> 一起助浪浪
        </p>
        <p className='text-center d-none d-md-inline' style={{ fontSize:'32px', color:'#3A3A3A' }}>
            您出錢 我出力 一起助浪浪
        </p>
        <p className='mb-0' style={{ fontSize:'16px', color:'#3A3A3A'}}>
            我們是一群貓奴才狗奴才，
            希望能透過自己小小的力量幫助浪貓浪狗們，
            可我們沒什麼錢錢，但我們喜歡畫畫、喜愛貓狗，
            於是想到個兩全其美的好法子！
            如果您購買我們的寵物似顏繪服務，
            我們將會把設計費100%全數捐給浪浪們！
            您出錢，我出力，合作無間讓浪浪有飯吃，讚啦！
        </p>
        </div>
        <div className='col-12 col-md-5 order-md-'>
            <img src={home01} alt="" className='w-100'/>
        </div>
      </div>
    {/* works */}  
     <div className="row py-3 g-3 d-flex justify-content-center align-items-center mb-5">
        <div className='w-100 text-center'>
          <img src={title01} alt="" className='title_img01 w-100'/>
        </div>

        <div className='col-6 col-md-3 '>
          <div className='work_img w-100' style={{ backgroundImage:`url(${dog05})` }}>
          <div className='work_span'></div>
            <span className='work-txt'>  
              designer <br />
              Meili
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3">
         <div className='work_img' style={{ backgroundImage:`url(${dog07})` }}>
            <div className='work_span'></div>
            <span className='work-txt'>               
              designer <br />
              Meili
            </span>
          </div>
        </div>
         <div className="col-6 col-md-3">
          <div className='work_img' style={{ backgroundImage:`url(${dog06})` }}>
          <div className='work_span'></div>
            <span className='work-txt'>                
              designer <br />
              Meili
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className='work_img' style={{ backgroundImage:`url(${Michael})` }}>
          <div className='work_span'></div>
            <span className='work-txt'>                
              designer <br />
              Meili
            </span>
          </div>
        </div>
       {/* 按鈕 */}
        <div className='d-flex justify-content-center'>
         <button type="button" class="work_btn me-5 d-none d-md-block">
           <Link to={'/design'} style={{ color:'#3A3A3A' }}>查看更多作品</Link>
         </button>
         <button type="button" class="work_btn" style={{backgroundColor:'#F9C745', border:'none'}}>
           <Link to={'/drswing'} style={{ color:'#3A3A3A' }}>客製化毛孩似顏繪</Link>
         </button>
      </div>  
     </div>
    {/* Group */}   
    <div className='row py-5 g-3  justify-content-center '>
      <div className='w-100 text-center mb-2'>
         <img src={title02} alt="" className='title_img02 w-100'/>
         <p>這裡是在還在等家的浪浪們，若您正巧在找個家人，不訪來認識一下唄</p>
      </div>
        <Card/>
        <div className='w-100 text-center'>
          <button className='bottom_btn'>看看更多浪浪</button>
        </div>
        
    </div>
    </div>
    </div>
    <div className='d-none d-md-block'>
      <img src={btn} alt="" className='fixed-bottom-right'/>
    </div>
  </>)
}

export default Home
