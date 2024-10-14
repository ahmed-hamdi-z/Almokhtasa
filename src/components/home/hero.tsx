// Dependencies
import React from "react";
import ScrollButton from "./scroll-btn";
interface VideoPlayerProps {
    videoUrl: string;
}

const Hero: React.FC<VideoPlayerProps> = ({ videoUrl }) => {

    return (
        <div className="relative flex items-center justify-center ">
            <iframe
                className=" w-full h-screen"
                src={videoUrl}
                title="Video Player"
                allowFullScreen
            />
            <div className="absolute bottom-0 z-10">
                 <ScrollButton />
            </div>
           
        </div>
    )
};

export default Hero;
