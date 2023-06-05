import React from 'react'
import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
 <div className="bg-black text-[#949494] py-20 font-titleFont">
  <div className="max-w-screen-xl mx-auto grid grid-cols-4">
    {}
        <div className="flex flex-col gap-7"> 
        <img className="w-32" src={logo} alt="logo.jpg" /> 
        <p className="text-white text-sm tracking-wide">copyrights</p>
        {/* <img className="w-56" src={paymentLogo} alt="paymentLogo" /> */}
        <div className="flex gap-5 text-lg text-gray-400">

        </div>
      {/* <ImgGitHub className="hover:text-white duration-300 cursor-pointer" />
        <Youtube className="hover:text-white duration-300 cursor-pointer" />
        <Facebook className="hover:text-white duration-300 cursor-pointer" /> 
        <Twitter className="hover:text-white duration-300 cursor-pointer" />
        <Instagram className="hover:text-white duration-300 cursor-pointer" /> */}

        </div>
        {}
    {}
    <div>
    <h2 className="text-2xl font-semibold text-white mb-4">Our contacts</h2>
    <div className="text-base flex flex-col gap-2">
    <p>BaliLavka</p>
    <p>Seattle, US</p>
    <p>email balilavka@balilavka.com</p>
    <p>phone 4258888586</p>
    </div>
    </div>
    <div>
    <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
<div className="flex flex-col justify-center"> 
  <input className="bg-transparent border px-4 py-2 text-sm" placeholder="email" type="text"/>
  <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
    Subscribe
    </button>
  </div>       
</div>
  </div>
  </div>
  );
};

export default Footer;