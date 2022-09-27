import React from 'react'


export default function NavBar() {


    
    
    
    // Hamburger-icon animation: -
    const hamburgerEffect = () => {
        const bar1 = document.getElementById("bar1");
        const bar2 = document.getElementById("bar2");
        const bar3= document.getElementById("bar3");
    
        // const hamburger= document.getElementById("hamburger");
        const navItems = document.getElementById("nav");
    
    // const home = document.getElementById("home");
    
    // console.log(hamburger);
        bar1.classList.toggle("translate-y-[0.6rem]");
        bar1.classList.toggle("rotate-45");
        bar1.classList.toggle("bg-white");
        bar1.classList.toggle("bg-[#fff000]");
        
        bar2.classList.toggle("opacity-5"); 
        
        bar3.classList.toggle("-translate-y-[0.5rem]");
        bar3.classList.toggle("-rotate-45");
        bar3.classList.toggle("bg-white");
        bar3.classList.toggle("bg-[#fff000]");
        
        
        navItems.classList.toggle("translate-y-[-1000px]");
        // home.classList.toggle("opacity-40");
};


  return (
    <>
        <header name='navbar' className="fixed w-full top-0 right-0 z-[1000] bg-purple-500">
      <nav className="mx-1 px-4 py-2 flex items-center justify-between text-white">
        <div className="left cursor-pointer">
          <span className="text-3xl font-semibold font-mono text-[#ffff00]"><span
              className="text-white">i</span>Logo</span>
        </div>
        <div className="middle hidden md:block">
          <ul className="flex space-x-6">
            <li className="hover:underline hover:scale-105 font-medium transition text-xl"><a href="#home">Home</a></li>
            <li className="hover:underline hover:scale-105 font-medium transition text-xl"><a href="#shop">Shop</a></li>
            <li className="hover:underline hover:scale-105 font-medium transition text-xl"><a href="#new">New Arrival</a></li>
            <li className="hover:underline hover:scale-105 font-medium transition text-xl"><a href="#about">About</a></li>
            <li className="hover:underline hover:scale-105 font-medium transition text-xl"><a href="#brands">Our Partners</a></li>
            <li className="hover:underline hover:scale-105 font-medium transition text-xl"><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="right flex space-x-3 order-3">
          <div className="search hidden cursor-pointer lg:flex justify-center items-center">
            <span className="material-symbols-outlined">search</span>
          </div>
          {/* <!-- <div className="cart hidden cursor-pointer lg:flex justify-center items-center">
            <span className="material-symbols-outlined">shopping_cart</span>
          </div> --> */}
          <div className="login  lg:block cursor-pointer flex justify-center items-center">
            <a href="./assets/login-page/index.html">
              <span className="material-symbols-outlined text-3xl">person</span>
            </a>
          </div>

          <div className="w-7 h-12 ww cursor-pointer z-99999999 md:hidden" onClick={hamburgerEffect} id="hamburger">
            <div className="bg-white mt-3 my-1 w-full h-1 rounded-md transition-all delay-150" id="bar1"></div>
            <div className="bg-white my-1 w-full h-1 rounded-md transition-all delay-150 duration-150 " id="bar2"></div>
            <div className="bg-white my-1 w-full h-1 rounded-md transition-all delay-150" id="bar3"></div>
          </div>

        </div>

        <ul className="py-3 md:hidden sm:flex sm:flex-col transition-all delay-150 translate-y-[-1000px] bg-blue-900  opacity-90 text-white absolute w-full top-16 left-0" id="nav">
          <li className="hover:underline py-3 text-center"><a href="#home">Home</a></li>
          <li className="hover:underline py-3 text-center"><a href="#shop">Shop</a></li>
          <li className="hover:underline py-3 text-center"><a href="#new">New Arrival</a></li>
          <li className="hover:underline py-3 text-center"><a href="#about">About</a></li>
          <li className="hover:underline py-3 text-center"><a href="#brands">Our Partners</a></li>
          <li className="hover:underline py-3  text-center"><a href="#contact">Contact</a></li>
        </ul> 
      </nav>
    </header>
    </>
  )
}
