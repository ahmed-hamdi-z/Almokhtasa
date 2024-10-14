// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-footer bg-cover w-[130%] ml-[-18%] ">
            <div className="container flex flex-col items-center mx-auto py-10 px-4">
                {/* Footer Wrapper */}
                <div className="text-center md:text-left">
                    <img src="/images/logo.png" alt="Logo" className="mx-auto md:mx-0 mb-4" />
                    {/* <h2 className="text-[#505050] text-2xl font-bold">AL MOHTASSA</h2>
            <p className="text-[#505050]">PET CLINIC</p> */}
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
                    {/* Logo Section */}


                    {/* Information Columns */}
                    <div className="flex md:flex-row flex-col md:space-x-10 md:space-y-0 space-y-3">
                        {/* First Info Block */}
                        <div>
                            <h3 className="text-[#505050] text-lg font-semibold">Lorem ipsum</h3>
                            <p className="text-[#505050]">
                                dolor, sit amet consectetur adipisicing elit.<br />
                                Expedita sequi.<br />
                                Harum repellendus ipsum dignissimos?
                            </p>
                        </div>

                        {/* Second Info Block */}
                        <div>
                            <h3 className="text-[#505050] text-lg font-semibold">Lorem ipsum</h3>
                            <p className="text-[#505050]">
                                dolor, sit amet consectetur adipisicing elit.<br />
                                Expedita sequi.<br />
                                Harum repellendus ipsum dignissimos?
                            </p>
                            <div className="flex justify-center md:justify-start space-x-2 mt-8 ">
                                <a href="#" aria-label="Instagram">
                                    <img src="/images/insta.svg" className='w-10 h-10' alt="#" />
                                </a>
                                <a href="#" aria-label="Facebook">
                                    <img src="/images/face.svg" className='w-10 h-10' alt="#" />
                                </a>
                                <a href="#" aria-label="Twitter">
                                    <img src="/images/x.svg" className='w-10 h-10' alt="#" />
                                </a>
                                <a href="#" aria-label="YouTube">
                                    <img src="/images/youtube.svg" className='w-10 h-10' alt="#" />
                                </a>
                                <a href="#" aria-label="">
                                    <img src="/images/tiktok.svg" className='w-10 h-10' alt="#" />
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* Form Section */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-[#505050] text-lg font-semibold">Lorem ipsum</h3>
                        <input
                            type="text"
                            placeholder="Your email"
                            className="mt-2 px-4 py-2 rounded-md w-full md:w-48"
                        />
                        <input
                            type="text"
                            placeholder="Message"
                            className="mt-2 px-4 py-2 rounded-md w-full md:w-48"
                        />
                        <button className="mt-4 px-6 py-2 bg-[#FB8302] text-[#505050] rounded-md">
                            Submit
                        </button>
                    </div>
                </div>

                {/* Social Media Icons */}

            </div>
        </footer>
    );
};

export default Footer;
