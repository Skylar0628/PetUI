import React from 'react'

const From = () => {
  return (<>
    <form className='form'>
      <div className="row">
         <div className="col-12 col-md-6 mb-3">
            <label for="name" className="form-label">名字</label>
            <input type="text" className="form-control" id="name" />
         </div>
         <div className="col-12 col-md-6 mb-3">
            <label for="LastName" className="form-label">姓氏</label>
            <input type="text" className="form-control" id="LastName" />
         </div>
         <div className="col-12 mb-3">
            <label for="phone" className="form-label">電話號碼</label>
            <input type="tel" className="form-control" id="phone" />
         </div>
         <div className="col-12 mb-3">
            <label for="email" className="form-label">電子郵件</label>
            <input type="email" className="form-control" id="email" />
         </div>
         <div className="mb-3">
            <div className="row">
            <label for="address" className="form-label">收件地址</label>

               <div className="col-12 col-md-6">
                  <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                     <option selected>請選擇城市</option>
                     <option value="1">One</option>
                     <option value="2">Two</option>
                     <option value="3">Three</option>
                  </select>
               </div>
               <div className="col-12 col-md-6">
                  <select class="form-select form-select-lg mb-3" aria-label=".form-select-sm example">
                     <option selected>請選擇區域</option>
                     <option value="1">One</option>
                     <option value="2">Two</option>
                     <option value="3">Three</option>
                  </select>
               </div>
            </div>
          
          
            <input type="text" className="form-control" id="address" placeholder='請輸入詳細地址'/>
         </div>
         <div className="mb-3">
            <label for="name" className="form-label">請選擇設計師風格</label>
            <select class="form-select form-select-lg " aria-label=".form-select-lg example">
                  <option value="1">Meili</option>
                  <option value="2">Meili</option>
                  <option value="3">Meili</option>
            </select>
         </div>
         <div className="mb-3">
            <label for="pay" className="form-label">付款方式</label>
            <select class="form-select form-select-lg " aria-label=".form-select-lg example">
                  <option value="1">貨到付款</option>
                  <option value="2">信用卡結帳</option>
                  <option value="3">Meili</option>
            </select>
         </div>
         <div className="mb-3">
            <label for="name" className="form-label">加購服務</label>
            <div className='d-flex'>
            <div className="mb-3 form-check">
               <input type="checkbox" className="form-check-input" id="Check1" />
               <label className="form-check-label" for="Check1">送禮用包裝 + 100</label>
            </div>
            <div className="ms-3 mb-3 form-check">
               <input type="checkbox" className="form-check-input" id="Check2" />
               <label className="form-check-label" for="Check2">無框畫 + 250</label>
            </div>
            </div>
            
         </div>
         <div class="mb-5">
            <label for="exampleFormControlTextarea1" class="form-label">備註說明</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
         </div>

         <div className='w-100 text-center'>
            <h3 className='mb-3 from_title'>總金額NT$300</h3>
            <button type="submit" className="form-btn">送出訂購資訊</button>
         </div>
     </div> 
    </form>
  </>)
}

export default From
