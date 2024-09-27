import React from 'react'
import lightpaperfibers from '../accest/lightpaperfibers.png'
import title from '../accest/title02.png'
import dog from '../accest/dog03.png'
import dog2 from '../accest/dog08.png'

import dog3 from '../accest/cat04.png'
import dog4 from '../accest/dog05.png'


import dog5 from '../accest/dog04-hover.png'
import dog6 from '../accest/dog01-hover.png'


const Adoption = () => {
  return (<>
  <div className='container-fluid' style={{ backgroundImage: `url(${lightpaperfibers})` }}>
  <div className='text-center pt-3'>
    <img src={title} alt="" className='title_img' />
  </div>

  <div className='container'>
    <div id="petCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* 卡片1 */}
        <div className="carousel-item active">
          <div className='row g-3 py-5'>
            <div className='col-12 col-md-8'>
              <div className="card p-3">
                <div className="card-body">
                  <h5 className="card-title mb-3">等家中-Snow</h5>
                  <div className='row mb-3'>
                    <div className='col-5'>
                      品種｜哈士奇 <br />
                      性別｜公 <br />
                      體型｜大型 <br />
                    </div>
                    <div className='col-7'>
                      年紀｜2個月 <br />
                      結紮｜已結紮 <br />
                      狂犬病疫苗｜已施打 <br />
                    </div>
                  </div>
                  <p className="card-text">看起來很兇但特別怕打雷的Snow，很喜歡吃冰，冰冰的水也喜歡，如果摸他的額頭會發出很像貓的叫聲，相當有活力，不適合關籠會發出像獅子的叫聲。 如果照片看起來像你家人，歡迎帶回家一家團圓！</p>
                </div>
                <img src={dog} className="card-img-bottom w-100 card_img" alt="..." />
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <div className="card mb-3">
                <img src={dog2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className='mb-2'>
                    <h5 className="card-title">收容所 <br />高雄浪流連途之家</h5>
                  </div>
                  <div className='mb-2'>
                    <h5 className="card-title">電話 <br />07-123999</h5>
                  </div>
                  <div className='mb-4'>
                    <h5 className="card-title">地址 <br />高雄市三民區河中三路123號</h5>
                  </div>
                  <button className='w-100 card_btn'>前往中途之家</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 卡片2 */}
        <div className="carousel-item">
          <div className='row g-3 py-5'>
            <div className='col-12 col-md-8'>
              <div className="card p-3">
                <div className="card-body">
                  <h5 className="card-title mb-3">等家中-小呆</h5>
                  <div className='row mb-3'>
                    <div className='col-5'>
                      品種｜貴賓犬 <br />
                      性別｜母 <br />
                      體型｜小型 <br />
                    </div>
                    <div className='col-7'>
                      年紀｜1個月 <br />
                      結紮｜未結紮 <br />
                      狂犬病疫苗｜未施打 <br />
                    </div>
                  </div>
                  <p className="card-text">小呆有著圓圓的大眼睛，一歲的他來自台中，原本陪著一位老奶奶生活，上個月奶奶行動不便不能再陪...</p>
                </div>
                <img src={dog5} className="card-img-bottom w-100 card_img" alt="..." />
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <div className="card mb-3">
                <img src={dog3} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className='mb-2'>
                    <h5 className="card-title">收容所 <br />台北動物之家</h5>
                  </div>
                  <div className='mb-2'>
                    <h5 className="card-title">電話 <br />02-123456</h5>
                  </div>
                  <div className='mb-4'>
                    <h5 className="card-title">地址 <br />台北市大安區仁愛路123號</h5>
                  </div>
                  <button className='w-100 card_btn'>前往中途之家</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 卡片3 */}
        <div className="carousel-item">
        <div className='row g-3 py-5'>
          <div className='col-12 col-md-8'>
            <div className="card p-3">
              <div className="card-body">
                <h5 className="card-title mb-3">等家中-Lucky</h5>
                <div className='row mb-3'>
                  <div className='col-5'>
                    品種｜黃金獵犬 <br />
                    性別｜公 <br />
                    體型｜大型 <br />
                  </div>
                  <div className='col-7'>
                    年紀｜3個月 <br />
                    結紮｜未結紮 <br />
                    狂犬病疫苗｜已施打 <br />
                  </div>
                </div>
                <p className="card-text">Lucky是一隻活潑開朗的黃金獵犬，非常聰明且對人友善，特別喜歡和小朋友一起玩耍。喜歡運動的家庭會是他最好的歸宿。如果照片打動了您，請帶他回家吧！</p>
              </div>
              <img src={dog6} className="card-img-bottom w-100 card_img" alt="..." />
            </div>
          </div>
          <div className='col-12 col-md-4'>
            <div className="card mb-3">
              <img src={dog4} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className='mb-2'>
                  <h5 className="card-title">收容所 <br />新北動物之家</h5>
                </div>
                <div className='mb-2'>
                  <h5 className="card-title">電話 <br />02-987654</h5>
                </div>
                <div className='mb-4'>
                  <h5 className="card-title">地址 <br />新北市板橋區中山路456號</h5>
                </div>
                <button className='w-100 card_btn'>前往中途之家</button>
              </div>
            </div>
          </div>
        </div>
        </div>

      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#petCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#petCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</div>

    {/* <div className='container-fluid' style={{ backgroundImage: `url(${lightpaperfibers})` }}>
       <div className='text-center pt-3'>
         <img src={title} alt="" className='title_img'/>
       </div>

       <div className='container'>
         <div className='row g-3 py-5'>
           <div className='col-12 col-md-8'>
            <div class="card p-3">
              <div class="card-body">
                <h5 class="card-title mb-3">等家中-Snow</h5>
                <div className='row mb-3'>
                  <div className='col-5'>
                     品種｜哈士奇 <br/>
                     性別｜公 <br/>
                     體型｜大型 <br/>
                  </div>
                  <div className='col-7'>
                     年紀｜2個月 <br/>
                     結紮｜已結紮 <br/>
                     狂犬病疫苗｜已施打 <br/>
                  </div>
                </div>
                <p class="card-text">看起來很兇但特別怕打雷的Snow，很喜歡吃冰，冰冰的水也喜歡，如果摸他的額頭會發出很像貓的叫聲，相當有活力，不適合關籠會發出像獅子的叫聲。 如果照片看起來像你家人，歡迎帶回家一家團圓！</p>
              </div>
              <img src={dog} class="card-img-bottom w-100 card_img" alt="..." />
            </div>

           </div>
           <div className='col-12 col-md-4'>
           <div class="card mb-3">
            <img src={dog2} class="card-img-top" alt="..." />
            <div class="card-body">
              <div className='mb-2'>
               <h5 class="card-title">
                 收容所 <br />
                 高雄浪流連途之家</h5>
              </div>
              <div className='mb-2'>
               <h5 class="card-title">
                 電話 <br />
                 07-123999</h5>
              </div>
              <div className='mb-4'>
               <h5 class="card-title">
                 地址 <br />
                 高雄市三民區河中三路123號</h5>
              </div>
             <button className='w-100 card_btn'>前往中途之家</button>
            </div>
          </div>
           </div>
         </div>
       </div>
    </div> */}
  </>)
}

export default Adoption
