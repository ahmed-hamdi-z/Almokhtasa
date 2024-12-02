
import { BiDownArrow } from 'react-icons/bi';

const ScrollButton: React.FC = () => {
    const handleScrollToTop = () => {
        // Scroll to 100px from the top
        window.scrollTo({
            top: 550,
            behavior: 'smooth',
        });
    };
    

    return (

        <button onClick={handleScrollToTop} className=" mb-20 w-10 h-10 bg-stuff-text rounded-full cursor-pointer select-none
                        active:translate-y-2  active:[box-shadow:0_0px_0_0_#FB8302,0_0px_0_0_#1b70f841]
                        active:border-b-[0px]
                        transition-all duration-150 [box-shadow:0_8px_0_0_#FB8302,0_13px_0_0_#1b70f841]
                        border-[1px] border-[#fff]">
            <BiDownArrow className='font-bold mx-auto ' />
        </button>
    );
};

export default ScrollButton;
