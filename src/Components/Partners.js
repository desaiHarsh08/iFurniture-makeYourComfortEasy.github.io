import React from 'react'
import google from '../img/google.png'
import amazon from '../img/amazon.jpg'
import netflix from '../img/netflix.png'
import tesla from '../img/tesla.jpg'
import flipkart from '../img/flipkart.png'

export default function Partners() {
  return (
    <>
        {/* <!-- Partners --> */}
      <div id="brands" name='partners' className="section-5 my-20 pt-9 py-6">
        <div className="heading text-center">
          <span className="text-center font-semibold text-2xl my-3 uppercase text-red-500">Brands</span>
          <h2 className="text-3xl font-bold my-3 mb-5">Our Brands Partners</h2>
        </div>
        <div className="brand-container flex flex-wrap justify-evenly items-center mt-8 mx-8 flex-col md:flex-row">
          <img src={google} className="h-20 my-3 mx-3" alt="google" />
          <img src={amazon} className="h-28 my-3 mx-3" alt="amazon" />
          <img src={netflix} className="h-28 my-3 mx-3" alt="netflix" />
          <img src={tesla} className="h-20 my-3 mx-3" alt="tesla" />
          <img src={flipkart} className="h-20 my-3 mx-3" alt="flipkart" />
        </div>
      </div>
    </>
  )
}
