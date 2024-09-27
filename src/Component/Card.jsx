import React from 'react'

import dog01 from '../accest/dog01.png';
import cat04 from '../accest/cat04.png'
import dog08 from '../accest/dog08.png';

import dog_01_hover from '../accest/dog01-hover.png';
import dog_02_hover from '../accest/dog04-hover.png';
import dog_03_hover from '../accest/dog01-hover-1.png';

import { Link } from 'react-router-dom';


const Card = () => {
  return (<>
    <div className='col-12 col-md-4 '> 
    <div class="card card-01">
     <img class="card-img-01" src={dog01} alt="Original Image"/>
     <img class="card-img-01-hover" src={dog_01_hover} alt="Hover Image"/>     
    <div class="card-body">
      <h5 class="card-title">等家中-華仔</h5>
        <p class="card-text">
            目前7個月大的華仔，是個愛笑的貪吃鬼，喜歡吃西瓜還有蓮霧，是一隻吃素的乖狗狗，會挑食不喜歡...
        </p>
        <hr />
      <div className='w-100 text-center'>
        <Link to={'/adoption'} className='card-a card-a-01'>MORE</Link>
      </div>
    </div>
    </div>
    </div>
   
    <div className='col-12 col-md-4 '>
    <div class="card card-02">
      <img class="card-img-02" src={cat04}  alt="Original Image"/>
      <img class="card-img-02-hover" src={dog_02_hover} alt="Hover Image"/>     
        <div class="card-body">
          <h5 class="card-title">等家中-小呆</h5>
          <p class="card-text">
           小呆有著圓圓的大眼睛，一歲的他來自台中，原本陪著一位老奶奶生活，上個月奶奶行動不便不能再陪...
          </p>
          <hr />
          <div className='w-100 text-center' >
           <Link to={'/adoption'} className='card-a card-a-01'>MORE</Link>
          </div>
        </div>
    </div>
    </div>
    
    <div className='col-12 col-md-4'>
    <div class="card card-03">
    <img class="card-img-03" src={dog08}  alt="Original Image"/>
    <img class="card-img-03-hover" src={dog_03_hover} alt="Hover Image"/>     
        <div class="card-body">
          <h5 class="card-title">等家中-Snow</h5>
            <p class="card-text">
            看起來很兇但特別怕打雷的Snow，很喜歡吃冰，冰冰的水也喜歡，如果摸他的額頭會發出吹口哨的聲...
            </p>
          <hr />
          <div className='w-100 text-center'>
           <Link to={'/adoption'} className='card-a card-a-01'>MORE</Link> 
          </div>
        </div>
    </div>
    </div>
  </>)
}

export default Card
