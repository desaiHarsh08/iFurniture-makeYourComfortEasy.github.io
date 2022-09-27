import React from 'react'
import i1 from '../img/i1.jpg'
import f1 from '../img/f1.jpg'
import f2 from '../img/f2.jpg'
import f3 from '../img/f3.jpg'
import s3 from '../img/s3.jpg'
import f5 from '../img/f5.png'

export default function ShopNow() {
  return (
    <>
        {/* <!-- Shop --> */}
      <div id="shop" name='shop-now' className="shop section-2 my-20 py-4">
        <div className="heading text-center">
          <span className="text-center font-semibold text-2xl my-3 uppercase text-red-500">Shop Now</span>

        </div>
        <div className="shop-container mx-4 my-6">
          <div className="row-1 flex flex-col md:flex-row w-[85%] mx-auto">
            {/* <!-- Box 1 --> */}
            <div className="box mx-1 pb-4">
              <div className="box-img">
                <img src={i1} className="h-[263px]" alt="" />
              </div>
              <div className="title-price flex flex-col justify-between py-2 mx-2">
                <h3 className="font-[1rem] font-medium">Lorem, ipsum.</h3>
                <div className="stars text-green-500">
                  <i className="bx bxs-stars fa-solid fa-star"></i>
                  <i className="bx bxs-stars fa-solid fa-star"></i>
                  <i className="bx bxs-stars fa-solid fa-star"></i>
                  <i className="bx bxs-stars fa-solid fa-star"></i>
                  <i className="bx bxs-stars fa-solid fa-star-half"></i>
                </div>
              </div>
              <div className="flex justify-between items-center mx-2 px-3">
                <span className="text-sm font-semibold text-green-500">122$</span>
                <span className="material-symbols-outlined text-red-500">
                  shopping_cart
                </span>
                {/* <!-- <i className="fa-solid fa-cart-arrow-down text-green-500"></i> --> */}
              </div>
            </div>
            {/* <!-- Box 2 --> */}
            <div className="box mx-1 pb-4">
              <div className="box-img">
                <img src={f1} className="h-[263px]" alt="" />
              </div>
              <div className="title-price flex flex-col justify-between py-2 mx-2">
                <h3 className="font-[1rem] font-medium">Lorem, ipsum.</h3>
                <div className="stars text-green-500">
                  <i className="bx bxs-stars fa-solid fa-star"></i>
                  <i className="bx bxs-stars fa-solid fa-star"></i>
                  <i className="bx bxs-stars fa-solid fa-star"></i>
                  <i className="bx bxs-stars fa-solid fa-star"></i>
                  <i className="bx bxs-stars fa-solid fa-star-half"></i>
                </div>
              </div>
              <div className="flex justify-between items-center mx-2 px-3">
                <span className="text-sm font-semibold text-green-500">122$</span>
                <span className="material-symbols-outlined text-red-500">
                  shopping_cart
                </span>
                {/* <!-- <i className="fa-solid fa-cart-arrow-down text-green-500"></i> --> */}
              </div>
            </div>
            {/* <!-- Box 3 --> */}
            <div className="box mx-1 pb-4">
              <div className="box-img">
                <img src={f2} className="h-[263px]" alt="" />
              </div>
              <div className="title-price flex flex-col justify-between py-2 mx-2">
                <h3 className="font-[1rem] font-medium">Lorem, ipsum.</h3>
                <div className="stars text-green-500">
                  <i className="bx bxs-stars fa-solid fa-star"></i>
                  <i className="bx bxs-stars fa-solid fa-star"></i>
                  <i className="bx bxs-stars fa-solid fa-star"></i>
                  <i className="bx bxs-stars fa-solid fa-star"></i>
                  <i className="bx bxs-stars fa-solid fa-star-half"></i>
                </div>
              </div>
              <div className="flex justify-between items-center mx-2 px-3">
                <span className="text-sm font-semibold text-green-500">122$</span>
                <span className="material-symbols-outlined text-red-500">
                  shopping_cart
                </span>
                {/* <!-- <i className="fa-solid fa-cart-arrow-down text-green-500"></i> --> */}
              </div>
            </div>
          </div>
          <div className="row-2 flex my-4 flex-col md:flex-row w-[85%] mx-auto">
            {/* <!-- Box 4 --> */}
            <div className="box mx-1 pb-4">
              <div className="box-img">
                <img src={f3} className="h-[263px]" alt="" />
              </div>
              <div className="title-price flex flex-col justify-between py-2 mx-2">
                <h3 className="font-[1rem] font-medium">Lorem, ipsum.</h3>
                <div className="stars text-green-500">
                  <i className="bx bxs-stars fa-solid fa-star"></i>
                  <i className="bx bxs-stars fa-solid fa-star"></i>
                  <i className="bx bxs-stars fa-solid fa-star"></i>
                  <i className="bx bxs-stars fa-solid fa-star"></i>
                  <i className="bx bxs-stars fa-solid fa-star-half"></i>
                </div>
              </div>
              <div className="flex justify-between items-center mx-2 px-3">
                <span className="text-sm font-semibold text-green-500">122$</span>
                <span className="material-symbols-outlined text-red-500">
                  shopping_cart
                </span>
                {/* <!-- <i className="fa-solid fa-cart-arrow-down text-green-500"></i> --> */}
              </div>
            </div>
            {/* <!-- Box 5 --> */}
            <div className="box mx-1 pb-4">
              <div className="box-img">
                <img src={s3} className="h-[263px]" alt="" />
              </div>
              <div className="title-price flex flex-col justify-between py-2 mx-2">
                <h3 className="font-[1rem] font-medium">Lorem, ipsum.</h3>
                <div className="stars text-green-500">
                  <i className="bx bxs-stars fa-solid fa-star"></i>
                  <i className="bx bxs-stars fa-solid fa-star"></i>
                  <i className="bx bxs-stars fa-solid fa-star"></i>
                  <i className="bx bxs-stars fa-solid fa-star"></i>
                  <i className="bx bxs-stars fa-solid fa-star-half"></i>
                </div>
              </div>
              <div className="flex justify-between items-center mx-2 px-3">
                <span className="text-sm font-semibold text-green-500">122$</span>
                <span className="material-symbols-outlined text-red-500">
                  shopping_cart
                </span>
                {/* <!-- <i className="fa-solid fa-cart-arrow-down text-green-500"></i> --> */}
              </div>
            </div>
            {/* <!-- Box 6 --> */}
            <div className="box mx-1 pb-4">
              <div className="box-img">
                <img src={f5} className="h-[263px]" alt="" />
              </div>
              <div className="title-price flex flex-col justify-between py-2 mx-2">
                <h3 className="font-[1rem] font-medium">Lorem, ipsum.</h3>
                <div className="stars text-green-500">
                  <i className="bx bxs-stars fa-solid fa-star"></i>
                  <i className="bx bxs-stars fa-solid fa-star"></i>
                  <i className="bx bxs-stars fa-solid fa-star"></i>
                  <i className="bx bxs-stars fa-solid fa-star"></i>
                  <i className="bx bxs-stars fa-solid fa-star-half"></i>
                </div>
              </div>
              <div className="flex justify-between items-center mx-2 px-3">
                <span className="text-sm font-semibold text-green-500">122$</span>
                <span className="material-symbols-outlined text-red-500">
                  shopping_cart
                </span>
                {/* <!-- <i className="fa-solid fa-cart-arrow-down text-green-500"></i> --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
