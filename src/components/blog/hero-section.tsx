
const HeroSection = () => {
    return (
        <div className="w-full h-[110vh]">
            <div className="bg-blog-hero bg-cover bg-center md:w-[120%] w-[200%] h-full md:mt-[-28vh] ">

                <div className="flex md:flex-row flex-col-reverse items-center justify-center w-full h-full ">
                    <div className="flex w-full items-center md:justify-center md:mt-64 mt-10 ">
                        <img src="/images/hero-img-blog.png" alt="" className="md:w-[600px] w-[380px] md:ml-0 ml-16 " />
                    </div>

                    <div className="flex w-full md:items-center md:justify-start justify-center md:mt-64" >
                        <h1 className=" text-white md:text-[200px] text-8xl font-bold md:ml-[-5vw] ml-[-50vw]  ">Blog</h1>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default HeroSection