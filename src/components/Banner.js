import React, {useState} from 'react';
import {HiArrowRight, HiArrowLeft } from "react-icons/hi";
 
const Banner = () => {
    const [currentSlide, setCurrentSlide]=useState(0)
    const data = [
        "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/299894787_448094070694431_6281706989276766525_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=du3EI6bRB3wAX9fY5YO&_nc_ht=scontent-sea1-1.xx&oh=00_AfAYEE9TdYqYRXngI-JFtdBYksKhDzgcwqsDv4FCsjyuTA&oe=647E8206",   
        "https://scontent-sea1-1.xx.fbcdn.net/v/t31.18172-8/616185_389839011107760_198723632_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=Ynekz96YEgEAX9yG7k9&_nc_ht=scontent-sea1-1.xx&oh=00_AfCWVBnsTddjf6z2kE8felMTjNSHE-OMFTO8JBOrscohzw&oe=64A17691",
        "https://scontent-sea1-1.xx.fbcdn.net/v/t31.18172-8/736523_389838734441121_167316350_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=D75N9TJ9Hs4AX8G-nYX&_nc_ht=scontent-sea1-1.xx&oh=00_AfBjKegBYJT4DLav3N_KgnxkwKR-EpqB0fAyRCJY0NLO0Q&oe=64A178D0",
        "https://scontent-sea1-1.xx.fbcdn.net/v/t31.18172-8/456287_352467704844891_41462713_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=Ukwhbw3idbwAX9VmpVb&_nc_ht=scontent-sea1-1.xx&oh=00_AfDEgVj2MW0QP6BFjeB_sVG2nZokPAfOrd0yRXQ3dIz3Ew&oe=64A1735C",
    ];
    const prevSlide=()=>{
        setCurrentSlide(currentSlide === 0?3: (prev)=>prev-1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 3?0: (prev)=> prev+1);
    };
  return (
    <div className="w-full h-auto overflow-x-hidden"> 
    <div className="w-screen-h-[650px] relative">
            <div  className="w-[400vw] h-full flex">
                <img 
                className="w-screen h-full object-cover"
                src={data[0]} alt="ImgOne" 
                loading="priority"
                />
               <img
               className="w-screen h-full object-cover"
                src={data[1]} alt="ImgTwo"
                /> 
               <img
               className="w-screen h-full object-cover"
                src={data[2]} alt="ImgThree"/>
                <img
               className="w-screen h-full object-cover"
                src={data[3]} alt="ImgFour"/>
                 </div>
                <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
                    <div onClick={prevSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center 
                    justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white 
                    active: bg-gray-900 duration-300">
                        <HiArrowLeft/>
                    </div> 
                    <div onClick={nextSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center 
                    justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white 
                    active: bg-gray-900 duration-300">
                        <HiArrowRight />
                    </div>
        </div>
        </div>
    </div>
  );
};

export default Banner