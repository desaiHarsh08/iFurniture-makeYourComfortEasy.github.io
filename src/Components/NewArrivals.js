import React from 'react'
import f6 from '../img/f6.jpg'
import f7 from '../img/f7.jpg'
import sofa from '../img/sofa.png'

export default function NewArrivals() {
  return (
    <>
        {/* <!-- New Arrival --> */}
      <div id="new" name='new-arrivals' className="new-arrivals section-3 my-20">
        <div className="heading text-center py-4">
          <span className="text-center font-semibold text-2xl my-3 uppercase text-red-500">New Arrivals</span>
          <h2 className="text-3xl font-medium my-3">Try This...!</h2>
        </div>
        {/* <!-- new-items --> */}
        <div className="new-container mx-4 my-6 pb-7">
          <div className="row-1 flex flex-col md:flex-row w-[85%] mx-auto justify-evenly">
            {/* <!-- Box 1 --> */}
            <div className="box mx-1 pb-4">
              <div className="box-img">
                <img src={f6} className="h-[263px]" alt="" />
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
                <img src={f7} className="h-[263px]" alt="" />
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
                <img src={sofa} className="h-[263px]" alt="" />
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
