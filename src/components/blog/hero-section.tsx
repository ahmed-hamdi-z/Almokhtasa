
const HeroSection = () => {
    return (
        <div className="w-full h-[110vh]">
            <div className="bg-blog-hero bg-cover bg-center w-[120%] h-full md:mt-[-28vh] mt-[-35vh]">

                <div className="flex items-center justify-center w-full h-full ">
                    <div className="flex w-full items-center md:justify-center md:mt-64 mt-64 ">
                        <img src="/images/hero-img-blog.png" alt="" className="md:w-[600px] md:h-[320px] w-[400px] h-[150px] md:ml-0 ml-16 " />
                    </div>

                    <div className="flex w-full items-center justify-start md:mt-64 mt-0 " >
                        <h1 className=" text-white md:text-[200px] text-7xl font-bold ml-[-5vw] ">Blog</h1>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default HeroSection