import React from "react";
import Carousel from "./Carousel";
import Navbar from "./Navbar";

function Landing(){

    return(
        <div className="w-full h-full bg-black text-white">
            <Navbar/>
            {/* SLIDER */}
            <div className="w-full h-[90vh]">
                <Carousel/>
                <div className="max-w-[1240px] mx-auto flex justify-between center-text">
                    <div></div>
                    <div></div>
                    <h3 className="py-6 px-6 sm:z-10">SCROLL <span>&#8594;</span></h3>
                </div>
            </div>
            
        </div>
    )
}

export default Landing;