// Dependencies
import React from 'react';

const Form: React.FC = () => {

    return (
        <div className=" w-full h-full flex flex-col-reverse items-center md:mt-[-35vh] mt-0 absolute">
            <form className="bg-white shadow-md rounded-[30px] px-10 pt-6 pb-8 mb-4 md:w-[60%] w-[90%] ">
                <h2 className="text-4xl md:text-7xl font-bold text-[#757575] text-center mt-10 mb-2">Contact Us</h2>
                <p className="text-md md:text-lg text-center mb-10 text-[#757575]"> Get in touch with our team to learn more about us</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    {/* First Name */}
                    <div className="flex flex-col">
                        <label htmlFor="firstName" className="text-[#757575] ">
                            First name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="First name"
                            className="mt-2 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-col">
                        <label htmlFor="lastName" className="text-[#757575]">
                            Last name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Last name"
                            className="mt-2 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Email Address */}
                <div className="mt-4">
                    <label htmlFor="email" className="text-[#757575]">
                        Email address
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email address"
                        className="w-full mt-2 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Notes */}
                <div className="mt-4">
                    <label htmlFor="notes" className="text-[#757575]">
                        Notes
                    </label>
                    <textarea
                        id="notes"
                        placeholder="Notes"
                        className="w-full mt-2 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Country */}
                <div className="mt-4">
                    <label htmlFor="country" className="text-[#757575]">
                        Country
                    </label>
                    <input
                        type="text"
                        id="country"
                        placeholder="Country"
                        className="w-full mt-2 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Job Title */}
                <div className="mt-4">
                    <label htmlFor="jobTitle" className="text-[#757575]">
                        Job Title
                    </label>
                    <input
                        type="text"
                        id="jobTitle"
                        placeholder="Job Title"
                        className="w-full mt-2 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Submit Button */}
                <div className="mt-6 flex justify-center">
                    <button type="submit"
                        className="bg-teal-500 text-white px-10 py-2 rounded-full hover:bg-teal-600 transition duration-300">
                        Submit
                    </button>
                </div>
            </form>
            <div className='z-10 mb-[-11vh]'>
                <img src="/images/contact-img.png" alt="#" className='md:w-[600px] w-[330px]' />
            </div>
        </div>


    )
};

export default Form;
