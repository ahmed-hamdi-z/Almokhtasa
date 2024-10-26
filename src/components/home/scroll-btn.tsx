import React from 'react';
import { BiDownArrow } from 'react-icons/bi';

const ScrollButton: React.FC = () => {
    const handleScrollToBottom = () => {
        // Scroll to 100px from the bottom
        window.scrollTo({
            top: document.documentElement.scrollHeight - window.innerHeight - 4200,
            behavior: 'smooth',
        });
    };

    return (

        <button onClick={handleScrollToBottom} className=" mb-16 w-10 h-10 bg-[#FB8302] rounded-full cursor-pointer select-none
                        active:translate-y-2  active:[box-shadow:0_0px_0_0_#FB8302,0_0px_0_0_#1b70f841]
                        active:border-b-[0px]
                        transition-all duration-150 [box-shadow:0_8px_0_0_#FB8302,0_13px_0_0_#1b70f841]
                        border-[1px] border-[#505050]">
            <BiDownArrow className='font-bold mx-auto ' />
        </button>
    );
};

export default ScrollButton;
