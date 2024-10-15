// Dependencies
import React from "react";


const AboutHero: React.FC= () => {

    return (
        <div className=" w-full  ">
            <div className=" w-[130%] ml-[-15%] md:h-screen relative bg-center bg-cover md:top-[-28vh] top-[-10vh] bg-about flex items-center justify-center ">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="md:text-[150px] text-7xl relative md:top-72 top-44 font-semibold text-white">About us</h1>
                  <div className="relative md:top-48 top-28">
                  <img  src="/images/about-section.png" alt="#" className="md:w-[800px] w-[500px]" />
                  </div>
                </div>
            </div>
        </div> 
    )
};

export default AboutHero;
